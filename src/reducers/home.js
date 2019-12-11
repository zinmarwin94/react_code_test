
import { SPACE_LIST } from "../actions/actionTypes";  
 
const initialState = { 
  space_list: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SPACE_LIST:
      return {
        ...state,
        space_list: action.space_list.space_list
      };
    default:
      return state;
  }
};

export default reducer;
