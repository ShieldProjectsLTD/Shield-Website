import React from "react";
import AppRoutes from "../Routes/Routes";
import Headers from "../Headers/Headers";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div className="appbody">
      <div className="app">
        <Headers />
        <AppRoutes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
