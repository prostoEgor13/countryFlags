import css from "./MainPage.module.scss";
import cn from "classnames";
import FlagCards from "../FlagCards/FlagCards";
import { useTheme } from "../../useTheme";
import { useThemeMain } from "../../useThemeMain";
import "./styles.css/theme.css";
// import search from "./img/free-icon-search-5369463.png"

const MainPage = () => {
  const theme = useTheme();
  const themeMain = useThemeMain();
  console.log(theme);
  return (
    <>
      <div className={cn(css.MainPage__Body)} data-theme={themeMain}>
        <div className={cn(css.MainPage__Main)} data-theme={themeMain}>
          <div className={cn(css.MainPage__MainSearch)} data-theme={themeMain}>
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="     Search for the country"
                className={cn(css.MainPage__MainSearchInput)}
                data-theme={theme}
              />
            </div>
            <div>
              <select
                className={cn(css.MainPage__MainSearchSelect)}
                data-theme={theme}
              >
                <option value="">Filter by Region</option>
                <option value="">Africa</option>
                <option value="">America</option>
                <option value="">Asia</option>
                <option value="">Europe</option>
                <option value="">Oceania</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <FlagCards />
    </>
  );
};
export default MainPage;
