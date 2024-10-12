import { useParams, Outlet, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import "./words.css";
function Words() {
  const params = useParams();
  return (
    <MainLayout>
      <div className="words">
        {!params.id ? (
          <div className="words-list">
            {words.map((item) => (
              <div key={item}>
                <Link className="word" to={`/word/${item}`}>
                  {item}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </MainLayout>
  );
}
export const words = [
  "эскимо",
  "булавка",
  "арбуз",
  "собака",
  "итог",
  "рис",
  "масса",
  "функция",
  "цвет",
  "танец",
  "чемпионат",
  "объяснение",
  "поэзия",
  "эксплуатация",
  "майор",
  "яблоко",
  "тон",
  "дно",
  "вес",
  "стандарт",
  "щека",
  "гостиница",
  "камера",
  "присутствие",
  "процедура",
  "испытание",
  "нож",
  "проверка",
  "коммунист",
  "цифра"
];
export default Words;
