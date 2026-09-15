const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('public/erp/app.js', 'utf8');
function section(start, end) { return source.slice(source.indexOf(start), source.indexOf(end, source.indexOf(start))); }
test('login navigates after authentication without waiting for school records', async () => {
  let finishLoading;
  const loading = new Promise(resolve => { finishLoading = resolve; });
  const button = { disabled: false, textContent: 'Sign In' };
  const error = { textContent: '' };
  const context = vm.createContext({
    apiRequest: async () => ({role: 'Director', csrf_token: 'fresh'}),
    document: {querySelector: () => ({content: ''})},
    localStorage: {setItem() {}},
    FormData: class { *[Symbol.iterator]() { yield ['email', 'test@example.com']; } },
    loadBackendData: () => loading,
    location: {hash: '#/login'}, app() {}, backendLoaded: true, backendError: null,
  });
  vm.runInContext(section('async function demoLogin(', 'const students ='), context);
  const pending = context.demoLogin({querySelector: selector => selector.includes('button') ? button : error});
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(context.location.hash, '#/dashboard');
  assert.equal(context.backendLoaded, false);
  assert.equal(button.disabled, true);
  finishLoading(); await pending;
  assert.equal(button.disabled, false);
});
test('compact relations restore student identity and period class without cycles', () => {
  const context = vm.createContext({});
  vm.runInContext(section('function hydrateBootstrap(', 'async function loadBackendData('), context);
  const data = { compact: true, students: [{id: 7, first_name: 'Test', class_name: 'Nursery', guardian: {name: 'Parent'}, fee_balances: [{balance: 10}]}], payments: [{student: {student_ref: 7}}], admission_follow_ups: [{student_ref: 7}] };
  const result = context.hydrateBootstrap(data);
  assert.equal(result.payments[0].student.class_name, 'Nursery');
  assert.equal(result.payments[0].student.guardian, undefined);
  assert.equal(result.admission_follow_ups[0].guardian.name, 'Parent');
  assert.doesNotThrow(() => JSON.stringify(result));
});
