import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setNotifications(data));
  }, []);

  const removeItemActivity = (id) => {
    setNotifications((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, isRead: true };
        } else {
          return item;
        }
      })
    );
  };

  const removeAllItemsActivity = () => {
    setNotifications((prevState) =>
      prevState.map((item) => {
        return { ...item, isRead: true };
      })
    );
  };

  const counter = notifications.reduce((acc, item) => {
    if (!item.isRead) {
      acc += 1;
    }
    return acc;
  }, 0);

  return (
    <DataContext.Provider
      value={{
        notifications,
        removeItemActivity,
        removeAllItemsActivity,
        counter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
