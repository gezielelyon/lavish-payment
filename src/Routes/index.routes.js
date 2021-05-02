import {Switch, Route} from 'react-router-dom';

import {Home} from '../pages/Home/index';
import {Services} from '../pages/Services/index';
import {Products} from '../pages/Products/index';
import {SignUp} from '../pages/SignUp/index';

export function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/services" exact component={Services} />
      <Route path="/products" exact component={Products} />
      <Route path="/sign-up" exact component={SignUp} />
    </Switch>
  );
}