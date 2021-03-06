import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  UPDATE_DATA
} from "../actions";
import Utils from "../utils";

const initialState = {
  updateData: new Date().getTime(),
  data: [
    {
      id: Utils.randomStringGenerator(10),
      title: "Make a todo!",
      createdAt: 0,
      willFinish: 1580129085,
      completed: false
    },
    {
      id: Utils.randomStringGenerator(10),
      title: "Finish make to!",
      createdAt: 0,
      willFinish: 1580130085,
      completed: false
    }
  ]
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      if (!state.data) state.data = [];
      return Object.assign({}, state, {
        data: [
          {
            id: Utils.randomStringGenerator(10),
            title: action.title,
            createdAt: 0,
            willFinish: Utils.dateToTimestamp(action.date),
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
                willFinish: Utils.dateToTimestamp(action.date)
              })
            : todo
        )
      });

    case COMPLETE_TODO:
      return Object.assign({}, state, {
        data: state.data.map(todo => {
          if (todo.id === action.id) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }
          return todo;
        })
      });
    case UPDATE_DATA:
      return Object.assign({}, state, {
        updateData: new Date().getTime(),
        data: state.data.map(x => {
          return Object.assign({}, x, {
            createdAt: ++x.createdAt
          });
        })
      });
    default:
      return state;
  }
}
