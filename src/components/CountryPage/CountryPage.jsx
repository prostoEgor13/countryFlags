import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import css from "./CountryPage.module.scss";
import cn from "classnames";
import { useTheme } from "../../useTheme";

const Country = () => {
  const { code } = useParams();
  const [country, setCountry] = useState({});
  const [borders, setBorders] = useState([]);
  const [theme] = useTheme();

  const getCountry = async () => {
    const response = await axios.get(
      `https://restcountries.com/v2/alpha/${code}`
    );
    setCountry(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getCountry();
  }, [code]);

  const getBorder = async () => {
    if (country.borders) {
      const response = await axios.get(
        `https://restcountries.com/v2/alpha?codes=${country.borders.toString()}`
      );
      setBorders(response.data);
    }
  };
  console.log(borders);

  useEffect(() => {
    getBorder();
  }, [country]);

  const currencies = country.currencies?.map((currencie) => {
    return <p>{currencie.name}</p>;
  });
  const languages = country.languages?.map((language) => {
    return <p>{language.name}</p>;
  });

  const bordersCountry = borders?.map((border) => {
    return (
      <Link
        className={cn(css.CountryPage__linkBorder)}
        to={`/country/${border.alpha3Code}`}
        data-theme={theme}
      >
        {border.name}
      </Link>
    );
  });

  return (
    <div data-theme={theme}>
      <Header />
      <div className={cn(css.CountryPage__wrapper)} data-theme={theme}>
        <div className={cn(css.CountryPage__wrapperMain)} data-theme={theme}>
          <Link to="/">
            <button className={cn(css.CountryPage__mainButton)}>back</button>
          </Link>
          <div className={cn(css.CountryPage__mainSection)} data-theme={theme}>
            <div className={cn(css.CountryPage__sectionFlag)}>
              <img
                className={cn(css.CountryPage__Flag)}
                src={country?.flag}
                alt=""
              />
            </div>
            <div className={cn(css.CountryPage__sectionInfo)}>
              <h3>Country</h3>
              <div className={cn(css.CountryPage__infoDetails)}>
                <div>
                  <p>Native Name: {country.name}</p>
                  <p>
                    Population: {country.population?.toLocaleString("en-US")}{" "}
                  </p>
                  <p>Region: {country.region}</p>
                  <p>Sub Region: {country.subregion}</p>
                  <p>Capital: {country.name}</p>
                </div>
                <div className={cn(css.CountryPage__infoDetailsRight)}>
                  <p>Top Level Domain: {country.topLevelDomain} </p>

                  <p>Currencies: {currencies} </p>

                  <p>Languages:{languages}</p>
                </div>
              </div>
              <div className={cn(css.CountryPage__borders)}>
                <p>Border Countries: {bordersCountry}</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Country;
