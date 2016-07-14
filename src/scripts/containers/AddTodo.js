import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions";

let AddTodo = ({dispatch}) => {
    let input;

    return (
        <div>
            <input ref={node => {
              input = node;
              }}
                   onKeyPress={(event) => {
                   if(event.charCode  == 13){
                        if(input.value==""){
                            alert("Пожалуйста, введите название")
                        }else{
                        dispatch(addTodo(input.value));
                        input.value = "";
                        }
                   }
      }}
            />
            <button onClick={() => {
        dispatch(addTodo(input.value));
        input.value = "";
      }}>
                Add Todo
            </button>
        </div>
    );
};
AddTodo = connect()(AddTodo);

export default AddTodo
