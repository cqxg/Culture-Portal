import React from "react";
import { FormattedMessage, Link } from "gatsby-plugin-intl";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "reactstrap";

import directorOfDayStyles from "./directorOfDay.module.less";

// const director = {
//   name: "Evklid Seventeen",
//   birth: "30 january",
//   death: "23 june",
//   img: "ddas",
//   description:
//     "loves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and music",
//   link: "thisway",
//   videoId: 'u1QF-LWNUdY'
// }

const DirectorOfDay = ({ director }) => (
  <Col className={directorOfDayStyles.directorOfDay_container}>
    <Row className={directorOfDayStyles.directorOfDay_title_container}>
      <h2>Director of the day</h2>
    </Row>

    <Row className={directorOfDayStyles.directorOfDay_content_container}>
      <Col md={7} xs={{ size: 12, order: 1 }}>
        <h3>{director.name}</h3>
        <p>{`${director.birth} - ${
          director.death ? director.death : "Alive"
        }`}</p>
      </Col>

      <Col md={7} xs={{ size: 12, order: 3 }}>
        <h4>{director.description}</h4>
        <Link to="/" className={directorOfDayStyles.contentButton}>
          <Button type="button" class="btn btn-secondary btn-block">More about</Button>
        </Link>
      </Col>

      <Col md={5} xs={{ size: 12, order: 2 }}>
        <div
          className={directorOfDayStyles.directorOfDay_container_content_img_resize}
        >
          <img src={director.img} alt="director_avatar" />
        </div>
      </Col>
    </Row>
  </Col>
)

export default DirectorOfDay;
