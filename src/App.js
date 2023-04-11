import './App.css';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage';
import { useTheme } from './useTheme';




function App() {
  const [theme] = useTheme()

  return (
    <div className="App">
      <div  data-theme={theme}>
        <Header />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
