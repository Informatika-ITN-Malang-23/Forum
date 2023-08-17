import React from "react";
import AuthProvider from "./services/authProvider";
import Routes from "./routes/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;