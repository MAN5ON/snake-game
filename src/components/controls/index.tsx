import { useDispatch, useSelector } from "react-redux/es/exports";
import s from "./controls.module.scss";
import { RootState } from "../../store/store";
import {
	downMove,
	leftMove,
	rightMove,
	startPlay,
	upMove,
} from "../../store/snakeSlice";

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
					<button className={s.up} onClick={() => dispatch(upMove())}>
						⬆
					</button>
					<div className={s.secondLine}>
						<button
							className={s.left}
							onClick={() => dispatch(leftMove())}
						>
							⬅
						</button>
						<button
							className={s.down}
							onClick={() => dispatch(downMove())}
						>
							⬇
						</button>
						<button
							className={s.right}
							onClick={() => dispatch(rightMove())}
						>
							⮕
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
