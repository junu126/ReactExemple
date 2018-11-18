import { ADD_TODOLIST, DELETE_TODOLIST, ON_HANDLE_TOGGLE } from '../action/types'

// 초기 상태 지정
const initialState = {
  value : '',
  TodoItems : [
    { text : '블로그 포스팅하기', check : false },
    { text : '깃허브 커밋하기', check : false },
    { text : '소설 읽기', check : false },
  ],
}

// 리듀서 작성
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOLIST:
      return (
        state.push({text : action.text, check : false})
      );
    case DELETE_TODOLIST:
      return (
        state.filter((items, index) => index !== action.id )
      );
    case ON_HANDLE_TOGGLE:
      return (
        state.map((items, index) => index === action.id ? { ...items, check : !items.check } : items)
      );
    default:
      return state;
  }
}

export default todos;