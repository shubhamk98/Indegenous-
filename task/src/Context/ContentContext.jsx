/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";

export const ApiContext = createContext(null);

export const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const [citeText, setCiteText] = useState("");

  const handleSearch = () => {
    let data = JSON.stringify({
      keyword: keyword,
      limit: "10",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.gyanibooks.com/search_publication/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        const data = response.data;
        console.log("response - ", response);
        if (!response.data.error) {
          setApiData(data);
        } else {
          setApiData("404");
        }

        console.log("cite", data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const value = {
    apiData,
    setApiData,
    keyword,
    setKeyword,
    handleSearch,
    selectedText,
    setSelectedText,
    citeText,
    setCiteText,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
