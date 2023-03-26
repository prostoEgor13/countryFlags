import css from "./FlagCards.module.scss";
import cn from "classnames";
import axios from "axios";
import { useEffect, useState } from "react";
import { useThemeMain } from "../../useThemeMain";
import { useTheme } from "../../useTheme";

const FlagCards = () => {
  const [flags, setFlags] = useState([]);
  const theme = useTheme();
  const themeMain = useThemeMain();

  const getCountry = async () => {
    const response = await axios.get("https://restcountries.com/v3/all");
    setFlags(response.data);
  };

  useEffect(() => {
    getCountry();
  }, []);

  const flagcards = flags.map((e, index) => {
    return (
      <div
        className={cn(css.FlagCards__flagCards)}
        key={index}
        data-theme={theme}
      >
        <div className={cn(css.FlagCards__cardFlags)}>
          <img
            src={e.flags[0]}
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
                {e.population}
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
      </div>
    );
  });
  return (
    <div className={cn(css.FlagCards__wrapper)} data-theme={themeMain}>
      <div className={cn(css.FlagCards__main)} data-theme={theme}>
        <div className={cn(css.FlagCards__card)} data-theme={themeMain}>
          {flagcards}
        </div>
      </div>
    </div>
  );
};
export default FlagCards;
