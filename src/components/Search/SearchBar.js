import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import searchStyles from './search.module.less';

const SearchBar = ({ sortFunc }) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        sortFunc({value})
    };
    return (
        <Row className={searchStyles.search_row}>
            <Col lg={12}>
                <Form className={searchStyles.search_form} onSubmit={handleSubmit}>
                    <FormGroup className={searchStyles.search_form_group}>
                        <Input onChange={e => setValue(e.target.value)} type='text' name='search' id='exampleEmail' placeholder='Search a director'/>
                    </FormGroup>
                    <Button id={searchStyles.search_form_button} onClick={() => sortFunc({value})}>Submit</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default SearchBar;
