import s from "./settings.module.scss";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { RootState } from "../../../store/store";
import { setSize, setSpeed } from "../../../store/snakeSlice";

export const Settings = () => {
	const dispatch = useDispatch();
	const size = useSelector((state: RootState) => state.snake.canvas);
	const speed = useSelector((state:RootState) => state.snake.speed)

	return (
		<div className={s.settings}>
			<div className={s.canvSize}>
				<span>Canvas Size: </span>
				<label>
					<input
						type="radio"
						checked={size.canvasH === 300}
						onClick={() => dispatch(setSize(300))}
					/>
					small
				</label>
				<label>
					<input
						type="radio"
						checked={size.canvasH === 450}
						onClick={() => dispatch(setSize(450))}
					/>
					medium
				</label>
				<label>
					<input
						type="radio"
						checked={size.canvasH === 900}
						onClick={() => dispatch(setSize(900))}
					/>
					large
				</label>
			</div>
			<div className={s.canvSize}>
				<span>Speed: </span>
				<label>
					<input
						type="radio"
						checked={speed === 1}
						onClick={() => dispatch(setSpeed(1))}
					/>
					slow
				</label>
				<label>
					<input
						type="radio"
						checked={speed === 2}
						onClick={() => dispatch(setSpeed(2))}
					/>
					normal
				</label>
				<label>
					<input
						type="radio"
						checked={speed === 3}
						onClick={() => dispatch(setSpeed(3))}
					/>
					fast
				</label>
			</div>
		</div>
	);
};
