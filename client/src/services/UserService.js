import { getToken } from "../utils/localStorageUtils";
import http from "../http-common";

const getAll = () =>{
    return http.get(`/auth/users`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
}

const authenticate = (user) => {
    return http.post(`/auth/authenticate`, user);
}

const register = (user) => {
    return http.post(`/auth/register`, user);
  }

const UserService = {
    getAll,
    authenticate,
    register
}

export default UserService;