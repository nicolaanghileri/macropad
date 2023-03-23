import AuthProvider from "../services/AuthProvider";

export const useLogout = () =>  {
    console.log("Use Logout");
    AuthProvider.logout();
    //window.location.href = "/login";
}