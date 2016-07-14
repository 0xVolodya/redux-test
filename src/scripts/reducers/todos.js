export const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          order:action.id,
          completed: false
        }
      ];
    case "DELETE_TODO":
      return state.filter(
        (item) => item.id !== action.id
      );

    default:
      return state;
  }
};
