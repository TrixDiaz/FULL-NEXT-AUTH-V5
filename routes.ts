/**
 * An array of routes that are accessible to the public
 * These route do not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = [
    '/',
    '/auth/new-verification'
];

/**
 * An array of routes that are used for authentication
 * These route will redirect login users to /settings
 * @type {string[]}
 */
export const authRoutes: string[] = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
];

/**
 * The prefix for API Authentication routes.
 * Route's that start with this prefix are used for API authentication purposes
 *  @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default redirect path after login
 *  @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT: string = '/settings';