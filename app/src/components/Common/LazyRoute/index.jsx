import React, {PureComponent} from "react";
import { Route } from 'react-router';
import { Loader } from 'semantic-ui-react';

const PageLoader = PageComponent => () => (
  <React.Suspense fallback={<Loader />}>
    <PageComponent/>
  </React.Suspense>
);

/**
 * @param {Object} props
 * @returns {Route}
 */
export default class LazyRoute extends PureComponent {
  /**
   * @returns {ReactElement}
   */
  render() {
    const { path, component } = this.props;

    return (
      <Route
        path={path}
        render={PageLoader(component)}
      />
    );
  }
}
