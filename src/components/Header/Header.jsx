import css from "./Header.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";
// import moon from "./img/moon.png";
import useLocalStorageState from "use-local-storage-state";
import { ReactComponent as Moon } from "./img/moon-icon.svg";
import { useTheme } from "../../useTheme";

const lightTheme = "light";
const darkTheme = "dark";

const Header = ({ logo = "Where in the world" }) => {
  const [theme, setTheme] = useLocalStorageState("theme", {
    defaultValue: "light",
  });
  const [, isDarkHeader] = useTheme();

  const changeMode = () => {
    // const newTheme = theme === "light" ? "dark" : "light";
    // setTheme(newTheme);

    // if (theme === "light") {
    //   setTheme("dark");
    // } else {
    //   setTheme("light");
    // }

    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  console.log(isDarkHeader);
  return (
    <header className={cn(css.Header__header, { darkHeader: isDarkHeader })}>
      <div className={cn(css.Header__main, { darkHeader: isDarkHeader })} data-theme={theme}>
        <div className={cn(css.Header__logo)}>
          <h1>{logo}</h1>
        </div>
        <div className={cn(css.Header__theme)}>
          {/* <img src={moon} alt="" className={cn(css.Header__moon)} /> */}
          <Moon className={cn(css.Header__moon)} />
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
