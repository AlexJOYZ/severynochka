import { AuthService } from '../../API/entities/auth';
import { addUserAction } from '../reducers/accountReducer';

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const user = await AuthService.login(email, password);
      dispatch(addUserAction(user.data));
    } catch (e) {
      console.log(e);
    }
  };
};
