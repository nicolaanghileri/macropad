import AuthProvider from "../services/AuthProvider";

/**
 * Hook to AuthProvider for retrieve the user object stored in localStorage.
 * 
 * @returns the user object stored in localStorage.
 */
export const useAuth = () => {return AuthProvider.getCurrentUser();}