import PropTypes from "prop-types";

const Title = ({ name, type }) => {
  return (
    <p type={type} style={{ fontWeight: type }}>
      {name}
    </p>
  );
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["bold", "normal"]).isRequired,
};

export default Title;
