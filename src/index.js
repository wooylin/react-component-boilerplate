import React from 'react';
import Intl from './i18n';
import SayHello from './sayhello';

import './static/theme/index.css';

export default function Index() {
  return (
    <Intl>
      <SayHello />
    </Intl>
  );
}
