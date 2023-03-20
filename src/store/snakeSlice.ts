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
	speed: number
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
	speed: 1,
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

		setSize: (state, action) =>{
			state.canvas.canvasH = action.payload;
			state.canvas.canvasW = action.payload;
		},

		setSpeed: (state, action) => {
			state.speed = action.payload;
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

export const { startPlay, openSettings, setSize, setSpeed, upMove, leftMove, downMove, rightMove } =
	snakeSlice.actions;

export default snakeSlice.reducer;
