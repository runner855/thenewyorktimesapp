import React, { useState, useEffect, useInsertionEffect } from "react";
import "../ArticleDetails/ArticleDetails.css";
import { ArticlesProps } from "../../ Types/Apptypes";
import ApiCall from "../../API/ApiCall";
import { useParams } from "react-router-dom";

export const ArticleDetails = () => {
  const [details, setDetails] = useState<ArticlesProps[] | undefined>();
  const params = useParams();

  useEffect(() => {
    ApiCall.get(
      `topstories/v2/${params.page}.json?api-key=${process.env.REACT_APP_API_KEY}`,
      {}
    ).then((res) => {
      setDetails(res.data.results);
    });
  }, [params.page]);
  return (
    <div>
      {details &&
        details.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
    </div>
  );
};
