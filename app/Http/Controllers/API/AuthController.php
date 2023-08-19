<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{    
    public function register(Request $request)
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|unique:users',
            'email' => 'required|email',
            'password' => 'required',
            'confirm_password' => 'required|same:password'
        ]);

        // If validation fails, return the error
        if ($validator->fails()) {
            return response()->json([
                'status_code' => 400,
                'message' => 'Bad Request',
                'errors' => $validator->errors(),
            ], 400);
        }

        // If validation succeeds, create the user
        $user = User::create(array_merge(
            $validator->validated(),
            ['password' => bcrypt($request->password)]
        ));

        // Return the user and a token if the user is created successfully
        return response()->json([
            'status_code' => 200,
            'message' => 'User created successfully',
            'user' => $user,
            'token' => $user->createToken('auth_token')->plainTextToken,
        ], 200);
    }

    public function login(Request $request)
    {        
        // Validate the request
        $validator = Validator::make($request->all(), [
            'username' => 'required|string',
            'password' => 'required',
        ]);

        // If validation fails, return the error
        if ($validator->fails()) {
            return response()->json([
                'status_code' => 400,
                'message' => 'Bad Request',
                'errors' => $validator->errors(),
            ], 400);
        }
        
        # If validation succeeds, attempt to log the user in
        if(Auth::attempt(['username' => $request->username, 'password' => $request->password])) {                                                
            /** @var \App\Models\User $user **/
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;        
            return response()->json([
                'status_code' => 200,
                'message' => 'User logged in successfully',
                'user' => $user,                
                'token' => $token,
            ], 200);
        } else {
            return response()->json([
                'status_code' => 401,
                'message' => 'Unauthorized',
                'errors' => 'Incorrect password',
            ], 401);
        }
    }
}
