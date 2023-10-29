import React from "react";
import AppRoutes from "../Routes/Routes";
import Headers from "../Headers/Headers";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Headers />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
