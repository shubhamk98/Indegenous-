import { useContext } from "react";
import { ApiContext } from "../Context/ContentContext";

const Card = () => {
  const { apiData, setSelectedText, setCiteText } = useContext(ApiContext);

  const handleBtn = (val) => {
    setSelectedText(val.abstract);
    setCiteText(val.citationStyles);
    console.log(val.citationStyles);
  };

  // if (!apiData || !apiData.data || apiData.data.length === 0) {
  //   return <p>Your API data is either empty or undefined.</p>;
  // }


  return (
    <div className="h-[442px] overflow-auto">
      {apiData !== "404" ? (
        apiData?.data.map((val) => (
          <div
            key={val.paperId}
            className="border-2 border-yellow-400 w-[90%] rounded-md h-48 m-auto mt-6 flex gap-3 flex-col p-4 mb-4"
          >
            <p className="font-semibold"> {val.title}</p>
            <p className="truncate w-fit text-wrap">{val.abstract}</p>
            <button
              className="px-4 py-2 bg-yellow-400 rounded w-[30%]"
              onClick={() => handleBtn(val)}
            >
              Insert
            </button>
          </div>
        ))
      ) : (
        <div>
          <p className="px-6 py-5">Your API failed :/ try again or Refresh </p>
        </div>
      )}
    </div>
  );
};

export default Card;
