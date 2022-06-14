import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import QueryString from "query-string";
import Item from "../../molecules/item";
import CustomLink from "../../molecules/custom-link";
import Button from "../../atoms/button";
import "./style.css";

const ListItem = ({ data }) => {
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(15);
  const [dataPerPage, setDataPerPage] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [nextPage, setNextPage] = useState(2);
  const [more, setMore] = useState(false);

  const location = useLocation();
  const pathName = location.pathname;
  const history = useNavigate();
  const queryParams = location.search
    ? QueryString.parse(location.search)
    : null;

  useEffect(() => {
    if (queryParams && queryParams.p) {
      if (data.length > perPage * (+queryParams.p - 1)) {
        let newOffset = perPage * (+queryParams.p - 1);

        setOffset(newOffset);
        setNextPage(+queryParams.p + 1);
        setDataPerPage(data.slice(newOffset, newOffset + perPage));
        moreButton(queryParams.p);
      } else {
        history.push(pathName);
        setDataPerPage(data.slice(offset, offset + perPage));
        if (data.length > perPage) {
          setMore(true);
        }
      }
    } else {
      setDataPerPage(data.slice(offset, offset + perPage));
      if (data.length > perPage) {
        setMore(true);
      }
    }
  }, [pageCount]);

  const moreButton = (pageNum) => {
    if (data.length <= pageNum * perPage) {
      setMore(false);
    } else {
      setMore(true);
    }
  };

  const paginate = () => {
    setOffset(pageCount * perPage);
    setNextPage(nextPage + 1);
    setPageCount(pageCount + 1);
  };

  return (
    <>
     { data && (
        <div className="listing-area">
          {dataPerPage.map((data, index) => {
            return <Item id={data} number={offset + index + 1} key={index} />;
          })}
          {more && (
            <div className="more">
              <CustomLink
                url={`${pathName}?p=${+nextPage}`}
                onClick={paginate}
                className="morelink"
              >
                <Button>More...</Button>
              </CustomLink>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ListItem;
