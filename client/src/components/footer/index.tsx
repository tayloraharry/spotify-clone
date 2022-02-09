import "./footer.css";
import {
  IoRepeatOutline,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlayCircleOutline,
  IoShuffleSharp,
} from "react-icons/io5";
import RangeSlider from "react-bootstrap-range-slider";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Player from "../player";

const Footer = () => {
  return (
    <div className="footer">
      <Player/>
    </div>
  );
};

export default Footer;
