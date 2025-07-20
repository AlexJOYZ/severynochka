import { UserService } from '../../API/entities/user';
import { addUserAction } from '../reducers/accountReducer';

export const checkAuth = () => {
  return async (dispatch) => {
    try {
      const user = await UserService.getProfile();
      dispatch(addUserAction(user.data));
    } catch (e) {
      console.log(e);
    }
  };
};
