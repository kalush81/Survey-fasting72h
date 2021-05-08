//import './App.css';
import { useState } from "react";
import * as Survey from "survey-react";
import elements from "./elements";
import "survey-react/modern.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./home";
import SurveyCompo from "./survey";
import React from "react";
import * as SurveyPDF from "survey-pdf";
import emailjs from "emailjs-com";

function sendEmail(obj) {
  //console.log(typeof `${JSON.stringify(obj)}`)
  let templateParams = {
    message: JSON.stringify(obj)
  };
  emailjs
    .send(
      "service_0skfdj7",
      "template_0n38sxo",
      templateParams,
      "user_UKV5nNDlHLdUGk3WZuxg6"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}

function sendCanvasAsAttachment(canvas) {
  //var base64 = canvas.toDataURL();
  emailjs.send('service_0skfdj7', 'template_0n38sxo', {
      content: canvas
  }, "user_UKV5nNDlHLdUGk3WZuxg6");
}

Survey.StylesManager.applyTheme("modern");

function App() {
  const [isRead, setRead] = useState(false);
  let json = {
    pages: [{ questions: elements }],
  };

  const model = new Survey.Model(json);
  model.completedHtml = "dziekujemy za wypelnienie ankiety";
  model.showQuestionNumbers = "on";

  return (
    <div>
      <Switch>
        <Route path="/survey">
          <SurveyCompo isRead={isRead}>
            {isRead ? (
              <Survey.Survey
                model={model}
                onComplete={(result) => {
                  const data = result.data;
                  sendEmail(data) //send data as string

                  //let surveyPDF = new SurveyPDF.SurveyPDF(json);
                  //surveyPDF.data = data;

                  //as string
                  // surveyPDF.raw().then(function (text) {
                  //   let file = new Blob([text], { type: "application/pdf" });
                  //   console.log(file)
                  // });

                  //as blob
                  // surveyPDF.raw("bloburl").then(function (bloburl) {
                  //   console.log(bloburl)
                  // });
                  
                  //as base64 url 
                  // surveyPDF.raw("dataurlstring").then(function (dataurl) {
                  //   //const data = JSON.stringify(dataurl)
                  //   //sendEmail(data)
                  //   //sendCanvasAsAttachment(dataurl);
                  // });
                }}
              />
            ) : (
              <Redirect to="/" />
            )}
          </SurveyCompo>
        </Route>
        <Route exact path="/">
          <Home setIsRead={setRead} />
        </Route>
        <Route>
          <h2>such url doesnt exist</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
