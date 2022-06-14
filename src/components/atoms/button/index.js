import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";

export const ButtonType = {
  BUTTON: "button",
  RESET: "reset",
  SUBMIT: "submit",
};
export const ButtonVariant = {
  PRIMARY: "primary",
  DISABLED: "disabled",
};
export const ButtonSize = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

const Button = ({
  id,
  name,
  type,
  variant,
  size,
  className,
  onClick,
  children,
  ...props
}) => {
  const myClass = classNames("button", {
    [size]: size,
    [variant]: variant,
    [className]: className,
  });
  return (
    <button
      name={name}
      id={id}
      className={myClass}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(ButtonType)),
  variant: PropTypes.oneOf(Object.keys(ButtonVariant)),
  size: PropTypes.oneOf(Object.keys(ButtonSize)),
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
Button.defaultProps = {
  type: ButtonType.BUTTON,
  variant: ButtonVariant.PRIMARY,
  size: ButtonSize.SMALL,
};

export default Button;
