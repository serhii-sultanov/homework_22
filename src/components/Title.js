import PropTypes from "prop-types";

const Title = ({ name, fontWeight }) => {
  return <p style={{ fontWeight }}>{name}</p>;
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  fontWeight: PropTypes.oneOf(["bold", "normal"]),
};

export default Title;
