<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LogRequest
{
    public function handle(Request $request, Closure $next)
    {
        Log::info('Incoming Request', [
            'method' => $request->method(),
            'url' => $request->url(),
            'body' => $request->except(['password']),
            'ip' => $request->ip(),
            'user_agent' => $request->header('User-Agent'),
        ]);

        $response = $next($request);

        Log::info('Response Sent', [
            'status' => $response->status(),
            'body' => $response->getContent(),
        ]);

        return $response;
    }
}
