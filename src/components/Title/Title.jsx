import { useContext } from "react";
import styles from "./styles.module.css";
import { DataContext } from "../../context/DataContext";

export const Title = ({ children }) => {
  const { counter } = useContext(DataContext);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{children}</h1>
      <div className={styles.counter} key={counter}>
        {counter}
      </div>
    </div>
  );
};
