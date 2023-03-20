import AuthProvider from "../services/AuthProvider";

export const useLogout = () =>  {
    AuthProvider.logout();
}