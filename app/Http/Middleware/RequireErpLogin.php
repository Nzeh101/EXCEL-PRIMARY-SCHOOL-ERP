<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RequireErpLogin
{
    public function handle(Request $request, Closure $next)
    {
        abort_unless($request->user(), 401, 'Sign in to access school records.');
        foreach (['role', 'created_by_role'] as $field) {
            if ($request->has($field)) {
                abort_unless($request->input($field) === $request->user()->role, 403, 'The submitted role does not match your signed-in account.');
            }
        }

        $finance = in_array($request->user()->role, ['Director', 'School Manager', 'Super Admin'], true);
        if (! $finance && preg_match('~^erp-api/(payments|balances|dashboards/finance|receipts)(/|$)~', $request->path())) {
            abort(403, 'Financial records are restricted to school management.');
        }
        $response = $next($request);
        if (! $finance && $response instanceof \Illuminate\Http\JsonResponse) {
            $scrub = function ($value) use (&$scrub) {
                if (! is_array($value)) return $value;
                foreach ($value as $key => $item) {
                    if (in_array($key, ['payments', 'balances', 'fee_balances', 'feeBalances', 'tuition_fee', 'finance_dashboard', 'payments_total', 'payments_today', 'balances_due', 'balances_outstanding', 'pending_payments', 'cells', 'issues', 'summary', 'amount_due', 'amount_paid', 'balance'], true)) {
                        unset($value[$key]);
                    } else { $value[$key] = $scrub($item); }
                }
                return $value;
            };
            $response->setData($scrub($response->getData(true)));
        }
        $response->headers->set('Cache-Control', 'private, no-store');
        return $response;
    }
}
