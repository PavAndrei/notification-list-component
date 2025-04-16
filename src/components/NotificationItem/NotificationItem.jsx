import styles from "./styles.module.css";

export const NotificationItem = ({
  id,
  nickname,
  picture,
  isRead,
  imgSrc,
  message,
  type,
  time,
  text,
  removeItemActivity,
}) => {
  return (
    <li
      onClick={() => removeItemActivity(id)}
      className={isRead ? styles.item : styles.itemActive}
    >
      <div className={styles.avatar}>
        <img src={imgSrc} alt="avatar " />
      </div>
      <div>
        <div className={styles.info}>
          <span className={styles.nickname}>{nickname}</span>
          <span className={styles.message}>{message}</span>
          {type === "react" && <span className={styles.react}>{message}</span>}
          {(type === "join" || type === "left") && (
            <span className={styles.group}>{message}</span>
          )}
          {!isRead && <span className={styles.decor}></span>}
        </div>
        <div className={styles.date}>{time}</div>
        {text && <p className={styles.text}>{text}</p>}
      </div>
      {type === "comment" ? (
        <div className={styles.picture}>
          <img src={picture} alt="photo" />
        </div>
      ) : null}
    </li>
  );
};
