var React = require("react"),
  ReactDnD = require('react-dnd');

var todoSource = {
  beginDrag: function (props) {
    return {id: props.id}
  }
};

var todoTarget = {
  hover: function (props, monitor) {
    var drraggedId = monitor.getItem().id;

    if (drraggedId.id != props.id) {
      props.swapTodos(drraggedId, props.id);
    }
  }
};

var DragSourceDecorator = ReactDnD.DragSource("todo", todoSource,
  function (connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    }
  });

var DropTargetDecorator = ReactDnD.DropTarget("todo", todoTarget,
  function (connect) {
    return {
      connectDropTarget: connect.dropTarget()
    }
  });

var Todo = React.createClass({

  render: function () {
    var style = {
      border: '1px dashed gray',
      padding: '0.5rem 1rem',
      marginBottom: '.5rem',
      backgroundColor: 'white',
      cursor: 'move',
      opacity: this.props.isDragging ? 0 : 1,
      width: "300px",
      heigh:"100px"
    };

    return this.props.connectDragSource(this.props.connectDropTarget(
      <div>
        <li style={style}>
          <div style={{display:"inline-block", width:"200px",float:"left"}}>{this.props.text}</div>

          <button style={{display:"inline-block",float:"right"}} className={`btn btn-default`} onClick={() =>
        this.props.onDeleteClick(this.props.id)}
          >
            <i className="fa fa-times"/>
          </button>
        </li>
      </div>
      )
    );
  }
});

module.exports = DropTargetDecorator(DragSourceDecorator(Todo));
