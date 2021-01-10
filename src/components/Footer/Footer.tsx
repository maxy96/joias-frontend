import React from 'react';
import { ColMd6 } from '../Col/Col';
import Container from '../Container/Container';
import Row from '../Row/Row';
import './Footer.css';

const Footer: React.FC = () => (
  <footer>
      <Container>
        <Row>
          <ColMd6>
            <div className="text-center text-footer">
              Copyright©empresa
            </div>
          </ColMd6>
          <ColMd6>
            <div className="text-center text-footer">
              Contacto
            </div>
          </ColMd6>
        </Row>
      </Container>
  </footer>
);

export default Footer;
