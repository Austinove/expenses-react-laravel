import React from "react";
import { Container, UncontrolledTooltip } from "reactstrap";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="copyright" id="copyright">
                    © {new Date().getFullYear()}, Made by{" "}
                    <a
                        href="https://edmartsystems.com"
                        target="_blank"
                    >
                        Edmart Systems
                    </a>
                    . Coded by{" "}
                    <a
                        href="https://www.github.com/austinove"
                        target="_blank"
                    >
                        Kulaba Brian
                    </a>
                    .
                </div>
            </Container>
        </footer>
    );
}

export default Footer;