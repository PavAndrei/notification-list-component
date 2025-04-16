import styles from "./styles.module.css";

import { NotificationList } from "../NotificationList/NotificationList";

export const Main = () => {
  return (
    <main className={styles.main}>
      <NotificationList></NotificationList>
    </main>
  );
};
