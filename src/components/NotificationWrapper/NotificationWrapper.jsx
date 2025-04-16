import { Container } from "../Container/Container";
import styles from "./styles.module.css";

export const NotificationWrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>{children}</div>
      </Container>
    </div>
  );
};
