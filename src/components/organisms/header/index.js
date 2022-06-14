import CustomLink from "../../molecules/custom-link";
import Typography, { Tags } from "../../atoms/typography";
import classNames from "classnames";
import Nav from "./nav";
import "./style.css";


const Header = ({ className }) => {
  const myClass = classNames("header", {
    [className]: className,
  });

  let activeClassName = "active";

  return (
    <div className="header">
      <div className="nav-bar">
        <Typography className="title" tag={Tags.H4}>
          Hacker News
        </Typography>

        <div className="menu-bar">
          {Nav.map((item, index) => (
            <CustomLink
              url={item.path}
              className={({ isActive }) => (isActive ? activeClassName : "")}
            >
              {item.name}
            </CustomLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
