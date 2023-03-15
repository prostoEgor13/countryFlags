import css from "./Header.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";
import moon from "./img/moon.png";

const Header = ({ logo = "Where in the world?" }) => {
  return (
    <header className={cn(css.Header__header)}>
      <div className={cn(css.Header__main)}>
        <div className={cn(css.Header__logo)}>
          <h1>{logo}</h1>
        </div>
        <div className={cn(css.Header__theme)}>
          <img src={moon} alt="" className={cn(css.Header__moon)} />
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  );
};
Header.protoTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;
