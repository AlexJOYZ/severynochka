const initialState = {
  isAuth: false,
  user: {},
};
const ADD_USER = 'ADD_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.payload, isAuth: true };
    case LOGOUT_USER:
      return { ...state, user: {}, isAuth: false };
    default:
      return state;
  }
};

export const addUserAction = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const logoutUserAction = () => ({
  type: LOGOUT_USER,
});
