import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Container from './components/Container';
import { UserProvider} from "./context/UserContext";

function App() {
  return (
    /*<ThemeContext.Provider value="dark">
    <Button />
  </ThemeContext.Provider>*/
    <ThemeProvider>
          <UserProvider>
      

      <Container />
      </UserProvider>

    </ThemeProvider>
  );
}

export default App;
