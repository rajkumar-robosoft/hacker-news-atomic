import React, { useState, useEffect } from "react";
import { API } from "../../../services/api";
import { TimeFromNow } from "../../../utils/time-from-now/";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";
import Typography from "../../atoms/typography";

const Item = ({ id, number, className, ...props }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await API.item(id);
      setItem(response);
    }
    getData();
  }, [id]);

  if (!item) return "No Item Found!";

  const myClass = classNames("item-container", {
    [className]: className,
  });

  return (
    <>
      {item && (
        <div className={myClass} {...props}>
          {number && <Typography className="serial-no">{number}.</Typography>}

          <div className="item">
            <ul>
              <li>
                <a>
                  <span className="arrow-up"></span>
                </a>
                <a href={item.url} target="_blank">
                  {item.title}
                </a>{" "}
                {item.url && (
                  <small>
                    (
                    {
                      `${item.url}`
                        .replace("http://", "")
                        .replace("https://", "")
                        .replace("www.", "")
                        .split(/[/?#]/)[0]
                    }
                    )
                  </small>
                )}
              </li>
              <li>
                <Typography>{item.score}</Typography> point by <Typography>{item.by}</Typography>{" "}
                <TimeFromNow timestamp={item.time} /> | <Typography>{item.type}</Typography>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
Item.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.number,
  className: PropTypes.string,
};
export default Item;
