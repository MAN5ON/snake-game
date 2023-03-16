import { configureStore } from "@reduxjs/toolkit";
import snakeSlice from "./snakeSlice";

export const store = configureStore({
	reducer: {
		snake: snakeSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
