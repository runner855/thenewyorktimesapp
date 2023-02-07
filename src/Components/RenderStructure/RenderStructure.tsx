import React, { useEffect, useState } from "react";
import "../RenderStructure/RenderStructure.css";
import {
  ArticleDetailsProps,
  ArticlesProps,
  UserProps,
} from "../../ Types/Apptypes";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleDetails } from "../ArticleDetails/ArticleDetails";

type LayoutProps = {
  article: ArticlesProps[] | undefined;
};

export const RenderStructure = ({ article }: LayoutProps) => {
  const [articleDetails, setArticleDetails] = useState<string | undefined>();
  const [articleClicked, setArticleClicked] = useState<boolean>(false);
  const [filteredArticle, setFilteredArticle] = useState(article);

  const navigate = useNavigate();
  const params = useParams();

  const filterByArticle = (title: string) => {
    setFilteredArticle(
      article &&
        article.filter(
          (selectedArticle) => `${selectedArticle.title}` === title
        )
    );
  };

  const art = Array.from(
    new Set(
      article && article.map((selectedArticle) => `${selectedArticle.title}`)
    )
  );

  return (
    <div className="container">
      <div className="article_data">
        {article &&
          article.map((item, index) => {
            return (
              <div
                className="card_container"
                key={index}
                onClick={() =>
                  navigate(`/articledetails/${params.page}/${item.id}`)
                }
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
