
import { Link, useNavigate } from "react-router-dom";
import "./mainLayout.css";

function MainLayout({ children }) {
  const letters = [
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ъ",
    "Ы",
    "Ь",
    "Э",
    "Ю",
    "Я"

  ];

  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <Link to="/" className="header__nav-link">
            Главная
          </Link>
          <div className="header__nav-alphabet">
            {letters.map((item, index) => {
              return (
                <div key={index}>
                  <button
                    onClick={() => navigate(`/letter/${item}`)}
                    className="header__nav-btn"
                  >
                    {item}
                  </button>
                </div>
              );
            })}
          </div>
        </nav>
      </header>

      <main className="main">{children}</main>
    </>
  );
}

export default MainLayout;
