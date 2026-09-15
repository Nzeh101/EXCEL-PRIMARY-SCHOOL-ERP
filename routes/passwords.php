<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Password as PasswordRule;
use Illuminate\Support\Facades\Route;
Route::get('/forgot-password', fn() => response()->view('auth.password', ['reset'=>false])->header('Cache-Control','no-store'))->name('password.request');
Route::post('/forgot-password', function(Request $request) {
    $request->validate(['email'=>'required|email']);
    Password::sendResetLink($request->only('email'));
    return back()->with('status','If this email has an account, a password link will arrive shortly.');
})->middleware('throttle:5,1')->name('password.email');
Route::get('/reset-password/{token}', fn(Request $request, string $token) => response()->view('auth.password', ['reset'=>true,'token'=>$token,'email'=>$request->query('email')])->header('Cache-Control','no-store')->header('Referrer-Policy','no-referrer'))->name('password.reset');
Route::post('/reset-password', function(Request $request) {
    $request->validate(['token'=>'required','email'=>'required|email','password'=>['required','confirmed',PasswordRule::min(12)]]);
    $status = Password::reset($request->only('email','password','password_confirmation','token'), function($user,$password) {
        $user->forceFill(['password'=>$password,'remember_token'=>Str::random(60)])->save();
        DB::table('sessions')->where('user_id',$user->id)->delete();
        event(new \Illuminate\Auth\Events\PasswordReset($user));
    });
    if ($status !== Password::PasswordReset) return back()->withErrors(['email'=>__($status)])->withInput($request->only('email'));
    return redirect('/forgot-password')->with('status','Your password has been set. You can now sign in to the school website.');
})->middleware('throttle:10,1')->name('password.update');
