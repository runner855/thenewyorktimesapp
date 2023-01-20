import React, { useState, useEffect } from "react";
import "../PageStructure/PageStructure.css";
import ApiCall from "../../API/ApiCall";
import { ArticlesProps } from "../../ Types/Apptypes";
import { useParams } from "react-router-dom";
import { RenderStructure } from "../RenderStructure/RenderStructure";
const { v4: uuidv4 } = require("uuid");

export const PageStructure = () => {
  const [article, setArticle] = useState<ArticlesProps[] | undefined>();
  const params = useParams();

  useEffect(() => {
    ApiCall.get(
      `topstories/v2/${params.page}.json?api-key=${process.env.REACT_APP_API_KEY}`,
      {}
    ).then((res) => {
      setArticle(
        res.data.results.map((item: any) => ({ ...item, id: uuidv4() }))
      );
    });
  }, [params]);

  return (
    <div>
      <RenderStructure article={article} />
    </div>
  );
};
