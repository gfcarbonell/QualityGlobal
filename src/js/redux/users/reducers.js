import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR} from "../utils/actions-types"

var stateInitital = { users: [], error:null,  loading:true};

const userReducer = (state = stateInitital, action) =>
{
  switch (action.type) {
    case FETCH_REQUEST:
        return state;
    case FETCH_SUCCESS:
        return {
                users: action.data,
                error:null,
                loading:false
              };
    case FETCH_ERROR:
        return {
                users: [],
                error: action.error,
                loading:false
              };
    default:
      return state;
  }
}

export {userReducer}