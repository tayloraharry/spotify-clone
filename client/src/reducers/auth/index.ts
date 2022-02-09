import { AuthActions } from "../../actions/auth";

export interface IAuthState {
  code: string;
  access_token: string;
}

export const authReducer = (
  state: IAuthState = { code: '', access_token: '' },
  action: AuthActions
) => {
  switch (action.type) {
    case "SET_AUTH_CODE":
      return { ...state, code: action.payload };
      case "SET_ACCESS_TOKEN":
        return { ...state, access_token: action.payload };
    default:
      return state;
  }
};