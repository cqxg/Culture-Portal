import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import searchStyles from './search.module.less';

const SearchBar = ({ term, data, update }) => {
  return (
    <Row className={searchStyles.search_row}>
      <Col lg={12}>
        <Form className={searchStyles.search_form}>
          <FormGroup className={searchStyles.search_form_group}>
            <Input type='text' name='search' id='exampleEmail' placeholder='Search a director' />
          </FormGroup>
          <Button id={searchStyles.search_form_button}>Submit</Button>
        </Form>
      </Col>
    </Row>
  )
}

export default SearchBar;
