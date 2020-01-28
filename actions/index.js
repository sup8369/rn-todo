export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const UPDATE_DATA = "UPDATE_DATA";
export function addTodo(title, date) {
  return { type: ADD_TODO, title, date };
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id };
}

export function editTodo(id, title, date) {
  return { type: EDIT_TODO, id, title, date };
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id };
}

export function updateData() {
  return { type: UPDATE_DATA };
}
