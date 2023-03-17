import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
	startPlay: boolean;
	score: number;
	record: number;
}

const initialState: CounterState = {
	startPlay: false,
	score: 0,
	record: 0,
};

export const snakeSlice = createSlice({
	name: "snake",
	initialState,
	reducers: {
		startPlay: (state) => {
			state.startPlay = !state.startPlay;
		},
		counter: (state) => {
			state.score += 1;
		},
	},
});

export const { startPlay } = snakeSlice.actions;

export default snakeSlice.reducer;
