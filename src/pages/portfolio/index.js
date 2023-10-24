import { React, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import FsLightbox from "fslightbox-react";
export const Portfolio = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // To keep track of the current portfolio item

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setToggler(!toggler);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Gallery</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={data.i} className="po_item">
                <img src={data.img} alt={data.alt} />

                <div className="content">
                  <p>{data.description}</p>
                  <button onClick={() => openLightbox(i)}>View</button>
                </div>
              </div>
            );
          })}
        </div>

        <FsLightbox
          toggler={toggler}
          sources={dataportfolio.map((data) => data.img)}
          sourceIndex={currentIndex}
          type="image"
        />
      </Container>
    </HelmetProvider>
  );
};