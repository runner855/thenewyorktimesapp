// import React, { useState, useEffect } from "react";
// import "../ArticleDetails/ArticleDetails.css";
// import { ArticlesProps } from "../../ Types/Apptypes";
// import ApiCall from "../../API/ApiCall";
// import { useParams } from "react-router-dom";
// const { v4: uuidv4 } = require("uuid");

// export const ArticleDetails = () => {
//   const [details, setDetails] = useState<ArticlesProps[] | undefined>();
//   const [filteredArticle, setFilteredArticle] = useState(details);
//   const params = useParams();

//   const filterByTitle = (title: string) => {
//     setFilteredArticle(
//       details && details.filter((article) => `${article.id} ` === params.id)
//     );
//   };

//   const articles = Array.from(
//     new Set(details && details.map((article) => `${article.title}`))
//   );

//   const handleChange = (e: any) => {
//     filterByTitle(e.target.value);
//   };

//   useEffect(() => {
//     ApiCall.get(
//       `topstories/v2/${params.page}.json?api-key=${process.env.REACT_APP_API_KEY}`,
//       {}
//     ).then((res) => {
//       setDetails(
//         res.data.results.map((item: any) => ({
//           ...item,
//           id: uuidv4(),
//         }))
//       );
//     });
//   }, [params.id, params.page]);

//   return (
//     <div>
//       <select onChange={handleChange}>
//         <option value="">Select User</option>

//         {articles.map((selectedUser) => {
//           return <option key={selectedUser}>{selectedUser}</option>;
//         })}
//       </select>

//       {filteredArticle &&
//         filteredArticle.map((item) => {
//           const { id, title, abstract } = item;
//           return (
//             <div key={id}>
//               {title} {abstract}
//             </div>
//           );
//         })}
//     </div>
//   );
// };

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticlesProps } from "../../ Types/Apptypes";
import ApiCall from "../../API/ApiCall";
const { v4: uuidv4 } = require("uuid");

export const ArticleDetails = () => {
  const [details, setDetails] = useState<ArticlesProps[] | undefined>();
  const [filteredEmployees, setFilteredEmployees] = useState(details);

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

  const filterByDepartment = (title: string) => {
    setFilteredEmployees(
      details && details.filter((art) => art.title === title)
    );
  };

  // Using Set to filter unique values
  const departments = Array.from(
    new Set(details && details.map((art) => art.title))
  );

  return (
    <div className="App">
      <select onChange={(e) => filterByDepartment(e.target.value)}>
        <option value="" disabled selected>
          Select department
        </option>

        {departments.map((department) => {
          return <option key={department}>{department}</option>;
        })}
      </select>
      <ul>
        {filteredEmployees &&
          filteredEmployees.map((employee) => {
            const { id, title, abstract } = employee;
            return (
              <li key={id}>
                <h1>{title}</h1>
                <div>{abstract}</div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
