import React from "react";
import { Redirect } from "react-router";

export default function SurveyCompo({ children, isRead }) {
  return <div>{isRead ? children : <Redirect to="/" />}</div>;
}
