import React from "react";
import { Table as BootstrapTable } from "react-bootstrap";
import { FormattedMessage } from 'gatsby-plugin-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import tableStyles from './table.module.less';

const FilmographyTable = (props) => {
  const films = props.films.map((film, i) => {
    return (
      <tr key={i} className={tableStyles.table_row}>
        <td>{film.filmName}</td>
        <td>{film.filmYear}</td>
      </tr>
    )
  })
  return ( <BootstrapTable striped borderless className={tableStyles.table}>
    <thead className={tableStyles.tableTitle_row}>
      <tr className={tableStyles.table_row}>
        <th>
          <FormattedMessage id='directorPage.filmName' />
        </th>
        <th>
          <FormattedMessage id='directorPage.filmYear' />
        </th>
      </tr>
    </thead>
    <tbody>
      {films}
    </tbody>
  </BootstrapTable>)
}

export default FilmographyTable;

// For director page  <Row>
// <Col size={12}>
// {directorData[intl.locale].films && directorData[intl.locale].films.length && <FilmographyTable films={directorData[intl.locale].films}/>}
// </Col>
// </Row>