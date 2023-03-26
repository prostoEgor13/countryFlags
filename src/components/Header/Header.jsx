import css from "./Header.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";
import moon from "./img/moon.png";
import useLocalStorageState from "use-local-storage-state";

const lightTheme = "light";
const darkTheme = "dark";

const lightThemeMain = "lightMain";
const darkThemeMain = "darkMain";

const Header = ({ logo = "Where in the world" }) => {
  const [theme, setTheme] = useLocalStorageState("theme", {
    defaultValue: "light",
  });
  const [themeMain, setThemeMain] = useLocalStorageState("themeMain", {
    defaultValue: "lightMain",
  });
  const changeMode = () => {
    // const newTheme = theme === "light" ? "dark" : "light";
    // setTheme(newTheme);

    // if (theme === "light") {
    //   setTheme("dark");
    // } else {
    //   setTheme("light");
    // }

    setTheme(theme === lightTheme ? darkTheme : lightTheme);
    setThemeMain(themeMain === lightThemeMain ? darkThemeMain : lightThemeMain);
    console.log("a");
  };

  return (
    <header className={cn(css.Header__header)}>
      <div className={cn(css.Header__main)}data-theme={theme}>
        <div className={cn(css.Header__logo)}>
          <h1>{logo}</h1>
        </div>
        <div className={cn(css.Header__theme)}>
          <img src={moon} alt="" className={cn(css.Header__moon)} />
          <p onClick={changeMode}> Dark Mode</p>
        </div>
      </div>
    </header>
  );
};
Header.protoTypes = {
  logo: PropTypes.string,
};

export default Header;
