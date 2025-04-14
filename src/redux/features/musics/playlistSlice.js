import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userPlaylists: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addPlaylist: (state, action) => {
      state.userPlaylists.push(action.payload);
    },
  },
});

export const { addPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
