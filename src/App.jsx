import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { NotificationWrapper } from "./components/NotificationWrapper/NotificationWrapper";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <NotificationWrapper>
        <Header />
        <Main />
      </NotificationWrapper>
    </DataProvider>
  );
}

export default App;
