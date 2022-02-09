import React from "react";
import buildAuthUrl from "./build-auth-url";
import { Container } from "react-bootstrap";

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a href={buildAuthUrl()} className="btn btn-success btn-lg">
        Login With Spotify
      </a>
    </Container>
  );
}
