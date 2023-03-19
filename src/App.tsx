import s from "./App.module.scss";
import { Controls } from "./components/controls";
import { Canvas } from "./components/canvas";
import { Header } from "./components/header";
import { useDispatch } from "react-redux/es/exports";
import { downMove, leftMove, rightMove, upMove } from "./store/snakeSlice";
import { Modal } from "./components/modal";

function App() {
	const dispatch = useDispatch();

	const keyHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.code === "KeyW") {
			dispatch(upMove());
		}
		if (event.code === "KeyA") {
			dispatch(leftMove());
		}
		if (event.code === "KeyS") {
			dispatch(downMove());
		}
		if (event.code === "KeyD") {
			dispatch(rightMove());
		}
	};

	return (
		<div className={s.appWrapper} tabIndex={0} onKeyDown={keyHandler}>
			<Header />
			<Modal />
			<Canvas />
			<Controls />
		</div>
	);
}

export default App;
