import React from "react";
import { Table as BootstrapTable } from "react-bootstrap";
import { FormattedMessage } from 'gatsby-plugin-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import tableStyles from './table.module.less';

const FilmographyTable = ({filmsIncome}) => {
  // console.log(filmsIncome)
  const films = filmsIncome.map((film, i) => {
    return (
      <tr key={i} className={tableStyles.table_row}>
        <td>{film.filmName}</td>
        <td>{film.filmYear}</td>
      </tr>
    )
  })
  return (
  <>
    <h1><FormattedMessage id='directorPage.films'/></h1>
    <BootstrapTable striped borderless className={tableStyles.table}>
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
    </BootstrapTable>
  </>)
};

export default FilmographyTable;
