import './App.css';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage';
// import { useTheme } from './useTheme';
import { useThemeMain } from './useThemeMain';
import "./components/MainPage/styles.css/mainTheme.css"

function App() {
  // const theme = useTheme()
  const themeMain = useThemeMain()
  return (
    <div className="App">
      <div data-theme={themeMain}>
        <Header />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
