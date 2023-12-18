export const getLocalStorageUser = () => {
    const parseUser = JSON.parse(localStorage.getItem("user"));
    return parseUser;
  }
  
  export const setLocalStorageUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  }
  
  export const getToken = () => {
    const parsedUser = getLocalStorageUser();
    return parsedUser.token;
  };