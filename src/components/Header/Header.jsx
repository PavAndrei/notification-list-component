import { Title } from "../Title/Title";
import { ReadAllButton } from "../ReadAllButton/ReadAllButton";

import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Title>Notifications</Title>
      <ReadAllButton>Mark all as read</ReadAllButton>
    </header>
  );
};
