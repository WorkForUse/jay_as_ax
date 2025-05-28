import React from "react";
import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";

const App = () => {
  return (
    <div class="container text-center border border-dark p-5">
      <Appname/>
        <Addtodo/>
    </div>
  );
};

export default App;
