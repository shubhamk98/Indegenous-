import { useContext } from "react";
import { ApiContext } from "../Context/ContentContext";
import Cite from "citation-js";

const Dropdown = () => {
  const { citeText, selectedText, setSelectedText } = useContext(ApiContext);

  const genrateCite = (citationStyle) => {
    const cite = new Cite();

    const bibtexEntry = citeText.bibtex;

    cite.add(bibtexEntry);

    let citation = "";
    let bibliography = "";

    switch (citationStyle) {
      case "APA7":
        citation = cite.format("citation", {
          format: "text",
          style: "apa",
        });
        bibliography = cite.format("bibliography", {
          format: "text",
          style: "apa",
        });
        break;
      case "MLA9":
        citation = cite.format("citation", {
          format: "text",
          style: "mla",
        });
        bibliography = cite.format("bibliography", {
          format: "text",
          style: "mla",
        });
        break;
      case "IEEE":
        citation = cite.format("citation", {
          format: "text",
          style: "ieee",
        });
        bibliography = cite.format("bibliography", {
          format: "text",
          style: "ieee",
        });
        break;
      case "Harvard":
        citation = cite.format("citation", {
          format: "text",
          style: "harvard1",
        });
        bibliography = cite.format("bibliography", {
          format: "text",
          style: "harvard1",
        });
        break;
      default:
        citation = "Invalid citation style";
        bibliography = "Invalid citation style";
    }

    const updatedApiData = selectedText + "\n" + bibliography + citation;

    setSelectedText(updatedApiData);
  };

  const citationTexts = ["APA7", "MLA9", "IEEE", "Harvard"];

  return (
    <div className="absolute bottom-16 right-28 bg-white p-2 rounded">
      {citationTexts.map((val) => (
        <input
          key={val}
          type="button"
          value={val}
          onClick={() => genrateCite(val)}
          className="w-24 flex flex-row gap-2 p-2 rounded cursor-pointer hover:bg-yellow-200"
        />
      ))}
    </div>
  );
};

export default Dropdown;
