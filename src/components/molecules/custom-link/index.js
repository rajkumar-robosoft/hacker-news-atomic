import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import Typography from "../../atoms/typography";
import "./style.css";

const CustomLink = ({ url, activeClass, className, id, children, ...props }) => {
  const myClass = classNames("nav-link", {
    [className]: className,
  });

  return (
    <NavLink
      to={url}
      activeClassName={activeClass}
      className={myClass}
      id={id}
      {...props}
    >
      <Typography>{children}</Typography>
    </NavLink>
  );
};
CustomLink.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};


export default CustomLink;
