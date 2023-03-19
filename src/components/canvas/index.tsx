import s from "./canvas.module.scss";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { RootState } from "../../store/store";

export const Canvas = () => {
	const canvSize = useSelector((state: RootState) => state.snake.canvas);
	return (
		<canvas className={s.canvas} width={canvSize.canvasW} height={canvSize.canvasH}></canvas>
	);
};
