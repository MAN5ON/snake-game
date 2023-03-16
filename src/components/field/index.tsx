import s from "./field.module.scss";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { RootState } from "../../store/store";
import wasd from "./../../assets/wasd.svg";

export const Field = () => {
	const play = useSelector((state: RootState) => state.snake.startPlay);
	return (
		<div className={s.field}>
			{!play ? (
				<div className={s.alert}>
					<div>Use </div>
					<img src={wasd} alt="WASD"></img>
				</div>
			) : null}
		</div>
	);
};
