import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import developerStyles from './developer.module.less';

const Developer = () => (
  <Container className={developerStyles.developers_content}>
    <Row>
      <Col lg={2} md={6} xs={12}>
        <div className={developerStyles.developer_block}>
          <div className={developerStyles.developer_photo} style={{ backgroundImage: "url('https://i.ytimg.com/vi/XjoFxyjSuVI/mqdefault.jpg')"}}>
          </div>
          <div className={developerStyles.developer_information}>
            <p className={developerStyles.developer_name}>Name Surname</p>
            <p className={developerStyles.developer_nickname}>github_nick</p>
            <a target="_blank" href="https://github.com">
             <img src="https://anart.ru/img/2014/04/octocat.png" />
            </a>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
)

export default Developer;
