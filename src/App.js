//import './App.css';
import { useState } from 'react'
import * as Survey from "survey-react";
import elements from "./elements";
import "survey-react/modern.css";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import SurveyCompo from './survey'
import React from "react";

Survey.StylesManager.applyTheme("modern");

function App() {
  const [isRead , setRead] = useState(false)
  console.log(elements);
  let json = {
    pages: [{ questions: elements }],
  };

  const model = new Survey.Model(json);
  model.completedHtml = "dziekujemy za wypelnienie ankiety";
  model.showQuestionNumbers = "on";

  return (
    <div className="App">
      <Switch>
        <Route path="/survey">
          <SurveyCompo isRead={isRead}>
            <Survey.Survey
              model={model}
              onComplete={(result) => {
                console.log("json result: ...", result.data);
                console.log("res.data type", typeof result.data);
              }}
            />
          </SurveyCompo>
        </Route>
        <Route path="/">
          <Home setIsRead={setRead}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
