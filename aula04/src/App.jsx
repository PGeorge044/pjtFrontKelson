import React from "react";
import Campanha from "./components/Campanha";

const App = () => {
  return (
    <div>
      <Campanha mes="Setembro"/>
      <Campanha mes="Outubro" />
      <Campanha mes="Novembro" />
    </div>
  );
};

export default App;