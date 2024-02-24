import "./Footer.css";
/* Components */
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="my-3">
      <p className="footer__paragraph">
        © 2023 CopyRight. Todos los derechos reservados.
      </p>
      <p className="footer__paragraph">
        Diseñado y Desarrollado por{" "}
        <em className="footer__paragraph-em">Nova Code Link</em>{" "}
      </p>
    </Container>
  );
};

export default Footer;
