import axios from "axios";

const endPoint = "http://10.10.1.243:8080/api/todos";

export function getTodos() {
  return axios.get(endPoint);
}

export async function createTodo(body) {
  const response = await axios.post(endPoint, body);
  return response;
}
export async function getTodo(todoID) {
  const response = await axios.get(endPoint, todoID);
  return response;
}
export async function deleteTodo(todoID) {
  const response = await axios.delete(`${endPoint}/${todoID}`, todoID);
  return response;
}
export async function updateTodo(todoID, todo) {
  const response = await axios.put(`${endPoint}/${todoID}`, todo);
  return response;
}
