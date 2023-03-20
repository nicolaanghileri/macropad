import AuthProvider from "../services/AuthProvider";

export const useAuth = () =>  {
    AuthProvider.getCurrentUser();   
}