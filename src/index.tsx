import "./wdyr.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import reportWebVitals from "reportWebVitals";
import { DevTools, loadServer } from "jira-dev-tool";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import { AppProviders } from "context";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
loadServer(() => {
  root.render(
    <React.StrictMode>
      <ConfigProvider
        theme={{
          token: {
            //colorPrimary: "",
            fontSize: 16,
          },
        }}
      >
        <AppProviders>
          <DevTools />
          <App />
        </AppProviders>
      </ConfigProvider>
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
