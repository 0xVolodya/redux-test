var React = require("react"),
  Todo = require("./Todo"),
  HTML5Backend = require('react-dnd-html5-backend'),
  ReactDnD = require('react-dnd'),
  ReactCSSTransitionGroup = require("react-addons-css-transition-group");


var TodoList = React.createClass({
    getInitialState: function () {
      return {todos: []};
    },
    componentWillReceiveProps: function (nextProps) {
      this.setState({todos: nextProps.todos});
    },


    compareTodo(todo1, todo2){
      return todo1.order - todo2.order;
    },

    swapTodos: function (id1, id2) {
      var todos = this.props.todos;

      var todo1 = todos.filter(function (i) {
        return i.id === id1
      })[0];

      var todo2 = todos.filter(function (i) {
        return i.id === id2
      })[0];

      var todo1Order = todo1.order;
      todo1.order = todo2.order;
      todo2.order = todo1Order;

      todos.sort(this.compareTodo);

      // TodoList.setProps({todos :todos});
      this.setState({todos: todos});
    },


    render: function () {

      var todos = this.state.todos;

      var todoss = this.state.todos.map(function (todo) {

          return (
            <Todo
              key={todo.id}
              style={{display:"inline-block"}}
              text={todo.text}
              {...this.props}
              id={todo.id}
              swapTodos={this.swapTodos}
            >
            </Todo>
          );
        }.bind(this)
      );
      var todos2 = this.state.todos.map(function (todo) {

          return (
            <div
              key={todo.id}
              style={{display:"inline-block"}}

            >
              <div>text={todo.text}</div>
              <div>text={todo.text}</div>
            </div>

          );
        }.bind(this)
      );


      return (
        !Object.keys(todos).length ?
          <div>
            У вас нет дел, наслаждайтесь моментом
          </div>
          :
          <ul>
            <ReactCSSTransitionGroup transitionName="example"
                                     transitionAppear={true}
                                     transitionAppearTimeout={500}
                                     transitionEnterTimeout={500}
                                     transitionLeaveTimeout={500}>
              {todoss}
            </ReactCSSTransitionGroup>

          </ul>

      )
    }
  })
  ;

module.exports = ReactDnD.DragDropContext(HTML5Backend)(TodoList);
