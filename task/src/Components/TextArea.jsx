import { useContext } from "react";
import { ApiContext } from "../Context/ContentContext";

const TextArea = () => {
  const { selectedText, setSelectedText } = useContext(ApiContext);

  const handleTextChange = (event) => {
    setSelectedText(event.target.value);
  };

  return (
    <div className="w-full h-[442px] flex items-center justify-center relative">
      <textarea
        className="w-[60%] h-full bg-gray-100 mt-6 rounded-md resize-none outline-none p-5 text-lg"
        placeholder="Start typing here..."
        value={selectedText || ""}
        onChange={handleTextChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
