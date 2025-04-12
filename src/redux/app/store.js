import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerSlice";
import loginReducer from "../features/auth/loginSlice";
import playerReducer from "../features/musics/playerSlice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    player: playerReducer,
  },
});

export default store;
