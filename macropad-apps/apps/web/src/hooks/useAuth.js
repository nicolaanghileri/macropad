import AuthProvider from "../services/AuthProvider";

export const useAuth = () => {return "" + AuthProvider.getCurrentUser();}