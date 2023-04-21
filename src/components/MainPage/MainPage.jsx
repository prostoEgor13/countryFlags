import css from "./MainPage.module.scss";
import cn from "classnames";
import FlagCards from "../FlagCards/FlagCards";
import { useTheme } from "../../useTheme";
import "./styles.css/theme.css";
import { useEffect, useState } from "react";
import axios from "axios";

const MainPage = () => {
  const [theme, isDarkMain, isdarkMainBody] = useTheme();
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [flagsRegion, setFlagsRegion] = useState([]);

  const onChangeRegion = (e) => {
    setRegion(e.target.value);
  };

  const getFlagsByRegion = async (regionName) => {
    // const response1 = axios.get(
    //   `https://restcountries.com/v3/region/${regionName}`
    // ).then((data)=>{
    //   console.log(data);
    // });

    const response = await axios.get(
      `https://restcountries.com/v3/region/${regionName}`
    );
    setFlagsRegion(response.data);
  };

  const getAllFlags = async () => {
    const response = await axios.get("https://restcountries.com/v3/all");
    setFlagsRegion(response.data);
  };

  useEffect(() => {
    if (region) {
      getFlagsByRegion(region);
    } else {
      getAllFlags();
    }
  }, [region]);

  useEffect(() => {
    getAllFlags();
  }, []);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const getFlagsByCountry = async (countryName) => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    setFlagsRegion(response.data);
    console.log(countryName);
  };

  useEffect(() => {
    if (country) {
      getFlagsByCountry(country);
    } else {
      getAllFlags();
    }
  }, [country]);

  return (
    <>
      <div
        className={cn(css.MainPage__Body, { darkMainBody: isdarkMainBody })}
        data-theme={theme}
      >
        <div className={cn(css.MainPage__Main)} data-theme={theme}>
          <div
            className={cn(css.MainPage__MainSearch, { darkMain: isDarkMain })}
            data-theme={theme}
          >
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="     Search for the country"
                className={cn(css.MainPage__MainSearchInput)}
                data-theme={theme}
                onChange={onChangeCountry}
              />
            </div>
            <div>
              <select
                className={cn(css.MainPage__MainSearchSelect)}
                data-theme={theme}
                onChange={onChangeRegion}
              >
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <FlagCards flags={flagsRegion} />
    </>
  );
};
export default MainPage;
