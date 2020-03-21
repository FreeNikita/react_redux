import React from 'react';
import { routing } from 'constants/route';
import { Switch, Route as ReactRoute } from 'react-router-dom';

const Route = () => (
  <Switch>
    {routing.map(({ url, component, exact }) => (
      <ReactRoute path={url} component={component} exact={exact} key={url} />
    ))}
  </Switch>
);

export default Route;
