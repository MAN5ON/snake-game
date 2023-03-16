import s from "./header.module.scss";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../../store/store";

export const Header = () => {
	const play = useSelector((state: RootState) => state.snake.startPlay);
	const count = useSelector((state: RootState) => state.snake.count);
	const record = useSelector((state: RootState) => state.snake.record);
	return (
		<div className={s.header}>
			<h2>Snake Game</h2>
			{!play ? (
				<span className={s.clue}>
					(Use "WASD" or Arrows to control)
				</span>
			) : (
				<div className={s.inGame}>
					<span>Current local record {record}</span>
					<span>Current score: {count}</span>
				</div>
			)}
		</div>
	);
};
