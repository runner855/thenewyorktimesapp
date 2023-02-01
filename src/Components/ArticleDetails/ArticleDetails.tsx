import React, { useState, useEffect } from "react";
import "../ArticleDetails/ArticleDetails.css";
import { ArticlesProps } from "../../ Types/Apptypes";
import ApiCall from "../../API/ApiCall";
import { useParams } from "react-router-dom";
const { v4: uuidv4 } = require("uuid");

export const ArticleDetails = () => {
  const [details, setDetails] = useState<ArticlesProps[] | undefined>();
  const params = useParams();

  useEffect(() => {
    ApiCall.get(
      `topstories/v2/${params.page}.json?api-key=${process.env.REACT_APP_API_KEY}`,
      {}
    ).then((res) => {
      setDetails(
        res.data.results.map((item: any) => ({
          ...item,
          id: uuidv4(),
        }))
      );
    });
  }, [params.id, params.page]);

  return <div></div>;
};
