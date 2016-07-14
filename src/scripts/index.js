import "babel-core/polyfill";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {todoStore} from "./store";
import TodoApp from "./components/TodoApp";
import "../css/style.css";


render(
  <div>
    <Provider store={todoStore}>
      <TodoApp />
    </Provider>
    
  </div>
  ,
  document.getElementById("app")
);
