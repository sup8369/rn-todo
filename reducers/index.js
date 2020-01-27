import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO } from "../actions";
import Utils from "../utils";

const initialState = {
  isFetchingAllTodos: false,
  data: [
    {
      id: Utils.randomStringGenerator(10),
      title: "Make a todo!",
      createdAt: 1580128085,
      willFinish: 1580129085,
      completed: false
    }
  ]
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        data: [
          {
            id: Utils.GUID(),
            title: action.title,
            endTime: getEndTime(action.hour),
            completed: false
          },
          ...state.data
        ]
      });

    case DELETE_TODO:
      return Object.assign({}, state, {
        data: state.data.filter(todo => todo.id !== action.id)
      });

    case EDIT_TODO:
      return Object.assign({}, state, {
        data: state.data.map(todo =>
          todo.id === action.id
            ? Object.assign({}, todo, {
                title: action.title,
                endTime: getEndTime(action.hour)
              })
            : todo
        )
      });

    case COMPLETE_TODO:
      return Object.assign({}, state, {
        data: state.data.map(todo => {
          var now = new Date().getTime();
          if (todo.id === action.id && new Date(todo.endTime).getTime() - now) {
            return Object.assign({}, todo, {
              completed: !todo.completed,
              completedTime: now
            });
          }
          return todo;
        })
      });

    default:
      return state;
  }
}
