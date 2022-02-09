export type SetAuthCodeAction  = { type: "SET_AUTH_CODE", payload: string };
export type SetAccessTokenAction  = { type: "SET_ACCESS_TOKEN", payload: string };

export type AuthActions =
| SetAuthCodeAction
| SetAccessTokenAction

export const setAuthCode = (code: string): SetAuthCodeAction => ({
  type: "SET_AUTH_CODE",
  payload: code,
});

export const setAccessToken = (accessToken: string): SetAccessTokenAction => ({
  type: "SET_ACCESS_TOKEN",
  payload: accessToken,
});