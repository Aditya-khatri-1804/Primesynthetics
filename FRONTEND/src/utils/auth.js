// utils/auth.js
export function isAuthenticated() {
  return !!localStorage.getItem('user'); // checks if user is logged in
}
