import { useSelector } from "react-redux/es/exports";
import { RootState } from "../../store/store";
import { Settings } from "./settings";
import { WASD } from "./WASD";

export const Modal = () => {
	const openSettings = useSelector(
		(state: RootState) => state.snake.openSettings
	);
	return (
		openSettings ? <Settings /> : <WASD />
	);
};
