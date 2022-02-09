import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useAuth from "../../hooks/useAuth";
import Body from "../body";
import Footer from "../footer";
import Sidebar from "../sidebar";

import './main.css'

interface IMainProps {
  code: string;
}

const Main = ({code}: IMainProps) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!code) return;
    dispatch({
      type: "SET_AUTH_CODE",
      payload: code,
    });
  }, [code]);

  return (
    <div className="main">
      <div className="main__body">
        <Sidebar/>
        <Body/>
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
