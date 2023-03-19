import { useSelector, useDispatch } from "react-redux/es/exports";
import { RootState } from "../../store/store";
import s from "./header.module.scss";
import gear from "../../assets/gear.svg";
import { openSettings } from "../../store/snakeSlice";

export const Header = () => {
	const dispatch = useDispatch();
	const play = useSelector((state: RootState) => state.snake.startPlay);
	const score = useSelector((state: RootState) => state.snake.score);
	const record = useSelector((state: RootState) => state.snake.record);

	return (
		<div className={s.header}>
			<h2>
				Snake Game{" "}
				{!play ? (
					<img className={s.gear} src={gear} alt="gear" onClick={() => dispatch(openSettings())} />
				) : null}
			</h2>

			{!play ? (
				<span className={s.clue}>
					(Use "WASD" or Arrows to control)
				</span>
			) : (
				<div className={s.inGame}>
					<span>Current local record {record}</span>
					<span>Current score: {score}</span>
				</div>
			)}
		</div>
	);
};
