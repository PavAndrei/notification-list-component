import { useContext } from "react";
import styles from "./styles.module.css";
import { DataContext } from "../../context/DataContext";

export const ReadAllButton = ({ children }) => {
  const { removeAllItemsActivity } = useContext(DataContext);

  return (
    <button onClick={removeAllItemsActivity} className={styles.btn}>
      {children}
    </button>
  );
};
