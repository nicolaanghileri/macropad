import AuthProvider from "../services/AuthProvider";

/**
 * Hook to AuthProvider to logout the user and after redirect automatically to /login.
 */
export const useLogout = () => {AuthProvider.logout(); window.location.href = "/login";};
