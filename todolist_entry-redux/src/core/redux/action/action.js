import { IS_HANDLE_INPUT, ADD_TODOLIST, DELETE_TODOLIST, ON_HANDLE_TOGGLE } from './types';

const isHandleInput = ( value ) => ({
  type : IS_HANDLE_INPUT,
  value : value
});

const addTodoList = ( text ) => ({ 
  type : ADD_TODOLIST,
  text : text
});

const deleteTodoList = ( id ) => ({ 
  type : DELETE_TODOLIST, 
  id 
});

const onHandleToggle = ( id ) => ({ 
  type : ON_HANDLE_TOGGLE, 
  id 
});

export {
  isHandleInput,
  addTodoList,
  deleteTodoList,
  onHandleToggle
}