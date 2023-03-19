import s from "./settings.module.scss";

export const Settings = () => {
	return (
        <div className={s.settings}>
            <span>Canvas Size: <input></input>, <input></input></span>
            <span>Speed:</span>
            <button>Save</button>
        </div>
	);
};
