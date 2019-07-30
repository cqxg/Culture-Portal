import React from 'react';
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl';
import Layout from '../components/Layouts/Layout';
import Image from '../components/image';
import SEO from '../components/seo';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import mainStyles from '../mainStyles/main.module.less';

const IndexPage = ({ intl }) => {
  return (
    <Layout>
			<Container className={mainStyles.main_container}>
				<Row>
					<Col lg={6} md={6} xs={12} className={mainStyles.main_description}>
						<p>
						<h2>Описание портала</h2>
						Демонстрация фильмов в Белоруссии началась в конце XIX века. В начале XX века действовало уже 56 частных кинотеатров. Первый кинотеатр в Минске открыл в 1900 году предприниматель Рихард Штремер в доме Раковщика на Захарьевской улице. Первоначально в нём демонстрировались диапозитивы, потом немые фильмы. В 1908 году Рихард сам начинает снимать хроникально-документальные фильмы. В это же время снят хроникальный фильм «Польский храмовый праздник в Кальварии в Минске», а кинооператоры минского кинотеатра «Гигант» снимают в 1910—1912 годах свои фильмы.
						17 декабря 1924 года на основании постановления СНК БССР «Об урегулировании кинодела БССР» было создано Управление по делам кино при Народном Комиссариате просвещения БССР — «Белгоскино» (эта дата отмечается как День белорусского кино).
						Данный портал мы решили посвятить самым выдающимся, на наш взгляд, режиссёрам Беларуси.
						</p>
					</Col>
					<Col lg={6} md={6} xs={12}>
						<SEO
							lang={intl.locale}
							title={intl.formatMessage({ id: "header.siteTitle" })}
							keywords={[`gatsby`, `application`, `react`]}
						/>
						<h1>
							<FormattedMessage id="index.hello" />
						</h1>
						<p>
							<FormattedMessage id="index.welcome" />
						</p>
						<p>
							<FormattedMessage id="index.build" />
						</p>
						<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
							<Image />
						</div>
					</Col>
				</Row>
			</Container>
		</Layout>
	)
}


export default injectIntl(IndexPage);
