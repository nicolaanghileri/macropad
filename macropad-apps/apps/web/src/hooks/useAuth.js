import AuthProvider from "../services/AuthProvider";

export const useAuth = () =>  {
    console.log("DIOCANE PORCO USEAUTH");
    AuthProvider.getCurrentUser();   
}