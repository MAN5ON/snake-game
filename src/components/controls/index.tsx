import { useDispatch, useSelector } from "react-redux/es/exports";
import s from "./controls.module.scss";
import { RootState } from "../../store/store";
import { startPlay } from "../../store/snakeSlice";

export const Controls = () => {
	const play = useSelector((state: RootState) => state.snake.startPlay);
	const dispatch = useDispatch();

	return (
		<div>
			{!play ? (
				<div className={s.controls}>
					<button
						className={s.Start}
						onClick={() => dispatch(startPlay())}
					>
						START
					</button>
				</div>
			) : (
				<div className={s.controls}>
					<button className={s.up}>⬆</button>
					<div className={s.secondLine}>
						<button className={s.left}>⬅</button>
						<button className={s.down}>⬇</button>
						<button className={s.right}>⮕</button>
					</div>
				</div>
			)}
		</div>
	);
};
