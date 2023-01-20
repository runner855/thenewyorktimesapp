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
              >
                <div className="text_content">
                  <div className="title">{item.title}</div>
                  <div className="article_content">{item.abstract}</div>
                  <div className="article_author">{item.byline}</div>
                </div>
                <div className="image_container">
                  <img
                    className="article_image"
                    src={item.multimedia[0].url}
                    alt="article_image"
                  />
                  <div className="image_caption">
                    {item.multimedia[0].caption}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
