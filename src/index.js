import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Auth0Provider
    domain="dev-yavvgogwjd6y86kz.us.auth0.com"
    clientId="i4b7UAHocV5uXB3GALt70Fq7VH8PO78Z"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);
