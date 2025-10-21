import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { PostIt } from "./components/PostIt";
import "bootstrap-icons/font/bootstrap-icons.css";


import "./css/style.css";

export function App() {
  return (
    <Fragment>
      <PostIt />
    </Fragment>
  );
}

