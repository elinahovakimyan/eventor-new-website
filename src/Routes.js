import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import NotFound from './containers/NotFound';
import Homepage from './containers/Homepage';
import PackagesList from './containers/PackagesList';
import Package from './containers/Package';


function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/packages" component={PackagesList} />
      <Route path="/package/:id" component={Package} />
      <Route component={NotFound} />
    </Switch>
  );
}

const mapStateToProps = (state) => ({
  accessToken: state.app.accessToken,
});

export default connect(mapStateToProps)(Routes);
