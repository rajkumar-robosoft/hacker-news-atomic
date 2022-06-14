import CustomLink from "../../molecules/custom-link";
import "./style.css";
import Nav from "./nav";
import Search from "../../molecules/search";

const Footer = () => {
  let activeClassName = "active";
  return (
    <div className="footer">
      <div className="footer-menu">
        {Nav.map((item, index) => (
          <CustomLink
            url={item.path}
            className={({ isActive }) => (isActive ? activeClassName : "")}
          >
            {item.name}
          </CustomLink>
        ))}
      </div>
      <div className="footer-search">
        <Search placeholder="Search" id="search" />
      </div>
    </div>
  );
};
export default Footer;
