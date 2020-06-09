import {LOAD_DATA_SUCCESS} from '../actions';

const initialState = {
  data: []
};

const dataReducer = function(state = initialState, action) {

  switch(action.type) {

    case LOAD_DATA_SUCCESS:
      return Object.assign({}, state, { data: action.data });

    // no default
  }

  return state;

}

export default dataReducer;
