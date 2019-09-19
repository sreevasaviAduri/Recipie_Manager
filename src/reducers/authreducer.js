const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return { uid: action.uid };
    case "USER_LOGOUT":
      return {};
    default:
      return state;
  }
};

export default AuthReducer;
