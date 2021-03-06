import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from "gatsby-plugin-intl";
import Image from '../Image/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

import developerStyles from './developer.module.less';

const teamData = [
  {
    url: "developers/grig.jpg",
    name: "aboutUs.developers.gregory",
    git: "GreRin",
    href: "https://github.com/GreRin"
  },
  {
    url: "developers/erika.jpg",
    name: "aboutUs.developers.erika",
    git: "EriKuroi",
    href: "https://github.com/EriKuroi"
  },
  {
    url: "developers/ihor.jpg",
    name: "aboutUs.developers.igor",
    git: "cqxg",
    href: "https://github.com/cqxg"
  },
  {
    url: "developers/stas.jpg",
    name: "aboutUs.developers.stas",
    git: "Stassras",
    href: "https://github.com/Stassras"
  },
  {
    url: "developers/alina.jpg",
    name: "aboutUs.developers.alina",
    git: "helpthewalrus",
    href: "https://github.com/helpthewalrus"
  },
  {
    url: "developers/tanya.jpg",
    name: "aboutUs.developers.tanya",
    git: "tanyashulha",
    href: "https://github.com/tanyashulha"
  }
];

const Developer = (props) => {
  return (
    <Col lg={2} md={6} xs={12}>
        <div className={developerStyles.developer_block}>
        <Image src={props.url}></Image>
        <div className={developerStyles.developer_information}>
            <p className={developerStyles.developer_name}>
                <FormattedMessage id={`${props.name}`} />
            </p>
            <p className={developerStyles.developer_nickname}>{props.git}</p>
            <a target="_blank" href={props.href}>
                <img className={developerStyles.git_photo} src="https://anart.ru/img/2014/04/octocat.png" />
            </a>
        </div>
        </div>
    </Col>);
}

const DevelopersTeam = (props) => {
  const developers = teamData.map((developer, i) => {
    return <Developer key={i} url={developer.url} name={developer.name} git={developer.git} href={developer.href} />
  });

  return <Col className={developerStyles.developers_content}>
            <Row>
              {developers}
            </Row>
          </Col>

}

export default DevelopersTeam;
