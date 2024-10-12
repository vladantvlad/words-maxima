import { words } from "../Words";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./selectedWords.css";
function SelectedWords() {
  const params = useParams();
  const selectedWords1 = words.filter(
    (item) => item.toUpperCase()[0] === params.id
  );
  const selectedWords2 = words.filter(
    (item) =>
      item.toUpperCase().includes(params.id) &&
      item.toUpperCase()[0] !== params.id
  );
  return (
    <div className="selected-words">
      <div className="selected-words__left-col">
        <p className="selected-words__title">{`Слова, которые начинаются на букву "${params.id.toLowerCase()}":`}</p>
        {selectedWords1.map((item, index) => (
          <div key={index}>
            <Link className="selected-words__link" to={`/word/${item}`}>
              {item}
            </Link>
          </div>
        ))}
      </div>
      <div className="selected-words__right-col">
        <p className="selected-words__title">{`Слова, которые содержат букву "${params.id.toLowerCase()}":`}</p>
        {selectedWords2.map((item, index) => (
          <div key={index}>
            <Link className="selected-words__link" to={`/word/${item}`}>
              {item}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedWords;
