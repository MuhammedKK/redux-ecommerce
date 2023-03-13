const userState = {
    name: "",
    age: 0
  }

// user Reducer
const userReducer = (state = userState, action) => {
    switch(action.type) {
      case "SET_USER_DATA":
        state = {
          ...state,
          name: action.payload.username,
          age: action.payload.age
        };
        break;
      case "REMOVE_USER_DATA":
        state = {
          ...state,
          name: "",
          age: 0
        };
        break;
      default:
        state = {
          ...state
        }
        break;
    }
    return state
  };

  export default userReducer