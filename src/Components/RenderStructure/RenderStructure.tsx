import React from "react";
import "../RenderStructure/RenderStructure.css";
import { ArticlesProps } from "../../ Types/Apptypes";
import { useNavigate, useParams } from "react-router-dom";

type LayoutProps = {
  article: ArticlesProps[] | undefined;
};

export const RenderStructure = ({ article }: LayoutProps) => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div className="container">
      <div className="article_data">
        {article &&
          article.map((item, index) => {
            return (
              <div
                className="card_container"
                key={index}
                onClick={() => navigate(`/datailedarticle/${params.page}`)}
              ></div>
            );
          })}
      </div>
    </div>
  );
};
