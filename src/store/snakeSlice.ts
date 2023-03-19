import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
	startPlay: boolean;
	openSettings: boolean;

	score: number;
	record: number;

	canvas: {
		canvasH: number;
		canvasW: number;
	};
}

const initialState: CounterState = {
	startPlay: false,
	openSettings: false,
	score: 0,
	record: 0,
	canvas: {
		canvasH: 450,
		canvasW: 450,
	},
};

export const snakeSlice = createSlice({
	name: "snake",
	initialState,
	reducers: {
		startPlay: (state) => {
			state.startPlay = !state.startPlay;
		},
		openSettings: (state) => {
			state.openSettings = !state.openSettings;
		},

		counter: (state) => {
			state.score += 1;
		},
		upMove: () => {
			console.log("up");
		},

		leftMove: () => {
			console.log("left");
		},

		downMove: () => {
			console.log("down");
		},

		rightMove: () => {
			console.log("right");
		},
	},
});

export const { startPlay, openSettings, upMove, leftMove, downMove, rightMove } =
	snakeSlice.actions;

export default snakeSlice.reducer;
