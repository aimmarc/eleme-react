import {ACTION_INCREASE} from "../redux/actions";
import request from '../util/request';


export function addCount() {
  return dispatch => {
    return request('/api/terminal?page=1', {}).then(json => {
      dispatch({
        type: ACTION_INCREASE,
      });
    });
  }
}
