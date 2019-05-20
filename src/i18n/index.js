import React from 'react';
import PropTypes from 'prop-types';
import { addLocaleData, IntlProvider } from 'react-intl';
import locales from './locale';
import reactIntl from './intl';

Object.values(reactIntl).map(item => addLocaleData(item));
addLocaleData({ locale: 'zh-CN', parentLocale: 'zh' });

export default function Intl({ locale, children }) {
  return (
    <IntlProvider locale={locale} key={locale} messages={locales[locale]}>
      {children}
    </IntlProvider>
  );
}

Intl.propTypes = {
  locale: PropTypes.string,
  children: PropTypes.object
};

Intl.defaultProps = {
  locale: 'zh-CN',
  children: null
};
