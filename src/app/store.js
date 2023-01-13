import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    movie: movieReducer,
  },
});
