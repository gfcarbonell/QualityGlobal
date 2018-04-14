import axios from 'axios';
import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR} from '../utils/actions-types';


const ROOT_URL = 'https://randomuser.me/api/';

class User {

  static loadUsers () {

      return (dispatch) => {
          //Begin Request
          dispatch({type: FETCH_REQUEST});

          return axios.get(`${ROOT_URL}`)
              .then(response => {
                  //Success Request
                  dispatch({ type: FETCH_SUCCESS, data: response.data });
              })
              .catch(error => {
                  //Error Request
                  dispatch({type: FETCH_ERROR, error:error})
              });
          };
      }
}

export {User}
