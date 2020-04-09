import { Action } from "redux";
import { userConstants } from "../constants";

const token = sessionStorage.getItem("user");
const initialState = token ? { isLoggedIn: true, user: token } : {};

const authentication = (state = initialState, action: Action) => {
  const { user } = action;

  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        isLoggingIn: true,
        user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        isLoggingIn: false,
        user,
      };

    case userConstants.LOGIN_FAILURE:
    case userConstants.LOGOUT:
      return {
        isLoggedIn: false,
        isLoggingIn: false,
      };

    default:
      return state;
  }
};

export default authentication;
