import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const doSomething = () => {
    console.log("Clicked");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button backColor="green" text="Add" method={doSomething} />
    </header>
  );
};
Header.defaultProps = {
  title: "Task tracker",
};

Header.propTypes = {
  text: PropTypes.string,
};
export default Header;
