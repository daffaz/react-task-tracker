import PropTypes from "prop-types";

const Button = ({ backColor, text, method }) => {
  return (
    <button
      onClick={method}
      className="btn"
      style={{ backgroundColor: backColor }}
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  color: "steelblue",
};
Button.propTypes = {
  text: PropTypes.string,
  backColor: PropTypes.string,
  method: PropTypes.func,
};

export default Button;
