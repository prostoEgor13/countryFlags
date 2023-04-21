import css from "./FlagCards.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";
import { useTheme } from "../../useTheme";

const FlagCards = ({ flags }) => {
  const [theme, isDark] = useTheme();

  const flagcards = flags.map((e, index) => {
    return (
      <div
        className={cn(css.FlagCards__flagCards)}
        key={index}
        data-theme={theme}
      >
        <Link
          className={cn(css.FlagCards__Link)}
          to={`/country/${e.cca3}`}
          data-theme={theme}
        >
          <div className={cn(css.FlagCards__cardFlags)}>
            <img
              src={e.flags[0] ?? e.flags.png}
              alt=""
              className={cn(css.FlagCards__flagsImg)}
            />
          </div>
          <div className={cn(css.FlagCards__InfoCard)}>
            <div className={cn(css.FlagCards__InfoCardText)}>
              <h4 className={cn(css.FlagCards__InfoCardName)}>
                {e.name.official}
              </h4>
              <h5 className={cn(css.FlagCards__InfoCardInfo)}>
                Population:{" "}
                <span className={cn(css.FlagCards__InfoCardInfoSpan)}>
                  {e.population.toLocaleString("en-US")}
                </span>
              </h5>
              <h5 className={cn(css.FlagCards__InfoCardInfo)}>
                Region:{" "}
                <span className={cn(css.FlagCards__InfoCardInfoSpan)}>
                  {e.region}
                </span>
              </h5>
              <h5 className={cn(css.FlagCards__InfoCardInfo)}>
                Capital:{" "}
                <span className={cn(css.FlagCards__InfoCardInfoSpan)}>
                  {e.capital}
                </span>
              </h5>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  console.log(flagcards);
  return (
    <div className={cn(css.FlagCards__wrapper)} data-theme={theme}>
      <div className={cn(css.FlagCards__main)} data-theme={theme}>
        <div
          className={cn(css.FlagCards__card, { dark: isDark })}
          data-theme={theme}
        >
          {flagcards}
        </div>
      </div>
    </div>
  );
};
export default FlagCards;
