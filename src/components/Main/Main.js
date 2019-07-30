import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "reactstrap"
import FormattedMessage from "gatsby-plugin-intl"

import mainStyles from "./main.module.less"
import TopDirector from "./TopDirector/TopDirector"

const director = {
  name: "Evklid Seventeen",
  birth: "30 january",
  death: "23 june",
  img: "ddas",
  description:
    "loves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and music",
  link: "thisway",
}

const Main = () => (
  <Container className={mainStyles.main_container}>
    <Row>
      <Col col={12}>
        <h1 className={mainStyles.title}>
          Title
          {/* <FormattedMessage  id="main.siteTitle"/> */}
        </h1>
      </Col>
    </Row>
    <Row>
      <Col col={12}>
        <h3 className={mainStyles.description}>
          Описание портала Демонстрация фильмов в Белоруссии началась в конце
          XIX века. В начале XX века действовало уже 56 частных кинотеатров.
          Первый кинотеатр в Минске открыл в 1900 году предприниматель Рихард
          Штремер в доме Раковщика на Захарьевской улице. Первоначально в нём
          демонстрировались диапозитивы, потом немые фильмы. В 1908 году Рихард
          сам начинает снимать хроникально-документальные фильмы. В это же время
          снят хроникальный фильм «Польский храмовый праздник в Кальварии в
          Минске», а кинооператоры минского кинотеатра «Гигант» снимают в
          1910—1912 годах свои фильмы. 17 декабря 1924 года на основании
          постановления СНК БССР «Об урегулировании кинодела БССР» было создано
          Управление по делам кино при Народном Комиссариате просвещения БССР —
          «Белгоскино» (эта дата отмечается как День белорусского кино). Данный
          портал мы решили посвятить самым выдающимся, на наш взгляд, режиссёрам
          Беларуси.
          {/* <FormattedMessage  id="main.description"/> */}
        </h3>
      </Col>
    </Row>
    <Row>
      <TopDirector director={director} />
    </Row>
  </Container>
)

export default Main
