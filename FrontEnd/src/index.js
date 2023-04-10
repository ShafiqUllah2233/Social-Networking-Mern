import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './component/App';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

ReactDOM.render(
        <App />,
  document.getElementById("root")
);