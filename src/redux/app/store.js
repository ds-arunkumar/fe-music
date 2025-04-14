import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerSlice";
import loginReducer from "../features/auth/loginSlice";
import playerReducer from "../features/musics/playerSlice";
import playlistReducer from "../features/musics/playlistSlice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    player: playerReducer,
    playlist: playlistReducer,
  },
});

export default store;
