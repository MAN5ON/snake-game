import s from "./App.module.scss";
import { Controls } from "./components/controls";
import { Field } from "./components/field";
import { Header } from "./components/header";

function App() {
	return (
		<div className={s.appWrapper}>
			<Header />
			<Field />
			<Controls />
		</div>
	);
}

export default App;
