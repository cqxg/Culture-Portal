import React from 'react';
import { Link, injectIntl } from "gatsby-plugin-intl";
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import directorsStyles from '../../mainStyles/directors.module.less';


const DirectorListItem = ({ directorData, locale }) => {
    return (
        <Row>
            <Col lg={12} className={directorsStyles.mainTitle}>
                <Link
                    to={`/${directorData.id}`}
                    state={{ directorData: directorData }}
                >
                    {`${directorData[locale].name}, ${directorData[locale].location}`}
                </Link>
            </Col>
        </Row>
    )
};

export default DirectorListItem;


DirectorListItem.propTypes = {
    directorData: PropTypes.instanceOf(Object).isRequired
};
