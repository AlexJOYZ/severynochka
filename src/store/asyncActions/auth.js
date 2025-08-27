import { UserService } from '../../API/entities/user';
import { addUserAction } from '../reducers/accountReducer';

export const checkAuth = () => async (dispatch) => {
  try {
    const { data } = await UserService.getProfile();
    dispatch(addUserAction(data));
  } catch (e) {
    console.log(e);
  }
};
