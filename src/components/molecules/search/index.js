import Input from "../../atoms/input";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";

const Search = ({ placeholder, id, onChange, className, ...props }) => {
  const myClass = classNames("search", {
    [className]: className,
  });

  return (
    <div className={myClass}>
      <Input placeholder={placeholder} id={id} onChange={onChange} {...props} />
    </div>
  );
};
Search.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};
export default Search;
