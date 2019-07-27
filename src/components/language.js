import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

const languageName = {
  en: "English",
  ru: "Русский",
  be: "Беларускі",
}

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button
              type="buton"
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `#FFAF1E` : `rebeccapurple`,
                backgroundColor: `white`,
                margin: 5,
                textDecoration: `none`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </button>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language;
