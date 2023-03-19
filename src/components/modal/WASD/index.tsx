import { useSelector } from "react-redux/es/exports";
import { RootState } from "../../../store/store";
import wasd from "../../../assets/wasd.svg";

import s from "./WASD.module.scss";

export const WASD = () => {
	const play = useSelector((state: RootState) => state.snake.startPlay);
	return !play ? (
		<div className={s.wasd}>
			<div>Use </div>
			<img src={wasd} alt="WASD"></img>
		</div>
	) : null;
};
