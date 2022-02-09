import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const useAuth = (code: string): string => {
  const dispatch = useDispatch();
  const [accessToken, setAccessToken] = useState<string>("");
  const [refreshToken, setRefreshToken] = useState<string>("");
  const [expiresIn, setExpiresIn] = useState<number>(0);

  useEffect(() => {
    if (!accessToken) return;
    dispatch({
      type: "SET_ACCESS_TOKEN",
      payload: accessToken,
    })
  }, [accessToken])

  useEffect(() => {
    if (!code) return;
    axios
      .post("http://localhost:3001/login", {
        code,
      })
      .then((res) => {
        const { accessToken, refreshToken, expiresIn } = res.data;
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setExpiresIn(expiresIn);
        window.history.pushState({}, "", "/");
      })
      .catch(() => {
        window.location.href = "/";
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh", {
          refreshToken,
        })
        .then((res) => {
          const { accessToken, refreshToken, expiresIn } = res.data;
          setAccessToken(accessToken);
          setExpiresIn(expiresIn);
        })
        .catch(() => {
          window.location.href = "/";
        });
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return accessToken;
};

export default useAuth;
