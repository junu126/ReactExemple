import { ADD_TODOLIST, DELETE_TODOLIST, ON_HANDLE_TOGGLE } from './types';

const addTodoList = () => ({ 
  type : ADD_TODOLIST
});

const deleteTodoList = ( id ) => ({ 
  type : DELETE_TODOLIST, 
  id 
});

const onHandleToggle = ( id ) => ({ 
  type : ON_HANDLE_TOGGLE, 
  id 
});

export default {
  addTodoList,
  deleteTodoList,
  onHandleToggle
}