import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";
export const ImageVariant = {
  DEFAULT: "default",
  ROUNDED: "rounded",
  CIRCLE: "circle",
};

const Image = ({ width, height, src, alt, variant, className, ...props }) => {
  const myClass = classNames("img-fluid ", {
    [variant]: variant,
    [className]: className,
  });

  return (
    <img
      src={src}
      height={height}
      width={width}
      alt={alt}
      className={myClass}
      {...props}
    />
  );
};
Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(ImageVariant)),
};
Image.defaultProps = {
  variant: ImageVariant.DEFAULT
};
export default Image;
