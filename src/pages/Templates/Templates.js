import React, { useState, useEffect } from "react";
import "./Templates.css";
import axios from "axios";
import Header from "../../Components/Header/Header";
import TemplateCard from "../../Components/TemplateCard/TemplateCard";
import Pagination from "../../Components/Pagination/Pagination";

import loadingGif from "../../assets/loading.gif";

import { AiOutlineInfoCircle } from "react-icons/ai";

const Templates = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const [name, setname] = useState("");
  const [category, setcategory] = useState("All");
  const [nameOrder, setnameOrder] = useState("");
  const [dateOrder, setdateOrder] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
        );
        setdata(response.data);
        setloading(false);
      } catch (error) {}
    };

    getData();
  }, []);

  let filteredData = [...data];

  filteredData = name
    ? filteredData.filter((template) =>
        template.name.toLowerCase().includes(name.toLowerCase())
      )
    : filteredData;

  filteredData =
    nameOrder === "Ascending"
      ? filteredData.sort((a, b) => a.name.localeCompare(b.name))
      : filteredData.sort((a, b) => b.name.localeCompare(a.name));

  filteredData =
    dateOrder === "Ascending"
      ? filteredData.sort((a, b) => new Date(a.created) - new Date(b.created))
      : filteredData.sort((a, b) => new Date(b.created) - new Date(a.created));

  filteredData =
    category !== "All"
      ? filteredData.filter((template) => template.category.includes(category))
      : filteredData;

  let start = (currentPage - 1) * postsPerPage;
  let end = start + postsPerPage;
  let pagesNumber = Math.ceil(filteredData.length / postsPerPage);

  return (
    <div>
      <Header
        name={name}
        setname={setname}
        category={category}
        setcategory={setcategory}
        nameOrder={nameOrder}
        setnameOrder={setnameOrder}
        dateOrder={dateOrder}
        setdateOrder={setdateOrder}
      />
      <div className="catch-phrase">
        <span className="info-icon">
          <AiOutlineInfoCircle />
        </span>
        Tada! Get started with a free template. Can’t find what you are looking
        for? Search from the 1000+ available templates
      </div>
      {loading ? (
        <div className="loadingGif-wrapper">
          <img
            className="loading-gif"
            src={loadingGif}
            alt="articles-loading"
          />
        </div>
      ) : (
        <div className="templates-wrapper">
          <div className="templates-header">
            <div>{category} Templates</div>
            <div>{filteredData.length}</div>
          </div>
          <div className="templates">
            {filteredData.slice(start, end).map((template, index) => {
              return <TemplateCard template={template} key={index} />;
            })}
          </div>
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        pagesNumber={pagesNumber}
        setcurrentPage={setcurrentPage}
      />
    </div>
  );
};

export default Templates;
