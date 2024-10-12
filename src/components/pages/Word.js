import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import "./word.css";
function Word() {
  let params = useParams();
  return (
    <MainLayout>
      <div className="selected-word-inner">
        <p className="selected-word">{params.id}</p>
      </div>
    </MainLayout>
  );
}

export default Word;
