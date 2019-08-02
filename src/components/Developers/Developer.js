import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import developerStyles from './developer.module.less';

const teamData = [
  {
    url: "https://www.meme-arsenal.com/memes/4808db7e65492b7233abf5fb753ab0a4.jpg",
    name: "Ihar Ivaniuk",
    git: "cqxg",
    href: "https://github.com/cqxg"
  },
  {
    url: "https://www.meme-arsenal.com/memes/4808db7e65492b7233abf5fb753ab0a4.jpg",
    name: "Erika Shochalevich",
    git: "EriKuroi",
    href: "https://github.com/EriKuroi"
  },
  {
    url: "https://www.meme-arsenal.com/memes/4808db7e65492b7233abf5fb753ab0a4.jpg",
    name: "Grigory Sidorin",
    git: "GreRin",
    href: "https://github.com/GreRin"
  },
  {
    url: "https://www.meme-arsenal.com/memes/4808db7e65492b7233abf5fb753ab0a4.jpg",
    name: "Alina Tylets",
    git: "helpthewalrus",
    href: "https://github.com/helpthewalrus"
  },
  {
    url: "https://www.meme-arsenal.com/memes/4808db7e65492b7233abf5fb753ab0a4.jpg",
    name: "Tatsiana Shulha",
    git: "tanyashulha",
    href: "https://github.com/tanyashulha"
  },
  {
    url: "https://www.meme-arsenal.com/memes/4808db7e65492b7233abf5fb753ab0a4.jpg",
    name: "Stanislav Barinov",
    git: "Stassras",
    href: "https://github.com/Stassras"
  }
];

const Developer = (props) => ( 
  <Col lg={2} md={4} xs={12}>
    <div className={developerStyles.developer_block}>
      <img className={developerStyles.developer_photo} src={props.url}/>
      <div className={developerStyles.developer_information}>
        <p className={developerStyles.developer_name}>{props.name}</p>
        <p className={developerStyles.developer_nickname}>{props.git}</p>
        <a target="_blank" href={props.href}>
          <img className={developerStyles.git_photo} src="https://anart.ru/img/2014/04/octocat.png" />
        </a>
      </div>
    </div>
  </Col> 
)

const DevelopersTeam = (props) => {
  const developers = teamData.map((developer, i) => {
    return <Developer key={i} url={developer.url} name={developer.name} git={developer.git} href={developer.href} />
  });
  
  return <Container className={developerStyles.developers_content}>
            <Row>
              {developers}
            </Row>
          </Container>
              
}

export default DevelopersTeam;
