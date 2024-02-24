import "./Header.css";

/* Components */
import { Container } from "react-bootstrap";
import CustomButton from "../Customs/CustomButton/CustomButton";

const Header = () => {
  return (
    <Container className="header">
      <div className="header__data">
        <h3 className="header__data-title">Bienvenidos a Nova Code Link</h3>
        <p className="header__data-paragraph">
          Diseño y desarrollo de páginas web dirigidas para microempresas o
          micronegocios que busquen tener presencia en internet.
        </p>
        <CustomButton text="Contactanos" />
      </div>
      <img
        className="data__img"
        alt="Nova logo"
        src="/src/assets/headerImageDesktop.png"
      />
    </Container>
  );
};

export default Header;
