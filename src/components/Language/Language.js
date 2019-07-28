import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
import "./Language.less";

const languageName = {
  en: "Eng",
  ru: "Рус",
  be: "Бел",
}

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button
              type="button"
              key={language}
              className="lang-button"
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `#d04925` : `#e9e5dd`,            
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
