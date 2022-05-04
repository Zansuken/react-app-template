import type { FC } from "react";
import classes from "../src/styles/App.module.scss";

const App: FC = () => {
  return <div className={classes['root']}>Hello world!</div>;
};

export default App;