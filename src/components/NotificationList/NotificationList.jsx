import styles from "./styles.module.css";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export const NotificationList = () => {
  const { notifications, removeItemActivity } = useContext(DataContext);

  return (
    <ul className={styles.list}>
      {notifications.map((item) => {
        return (
          <NotificationItem
            key={item.id}
            id={item.id}
            nickname={item.nickname}
            isRead={item.isRead}
            imgSrc={item.avatar}
            message={item.message}
            type={item.type}
            time={item.time}
            picture={item.picture}
            text={item.text}
            removeItemActivity={removeItemActivity}
          />
        );
      })}
    </ul>
  );
};
