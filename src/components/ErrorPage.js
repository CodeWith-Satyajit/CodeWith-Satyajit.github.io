import React from 'react';
import { useRouteError } from 'react-router-dom';
import { useIntl } from 'react-intl';

function ErrorPage() {
  const error = useRouteError();
  const intl = useIntl();
  console.error(error);

  return (
    <div>
      <h1>{intl.formatMessage({id: 'Error.MSG001'})}</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}

export default ErrorPage;