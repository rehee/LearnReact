import * as React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


class Home extends React.Component {
  render() {
    return (

      <h1>Home</h1>
    );
  }
}
class About extends React.Component {
  render() {
    return (

      <h1>About</h1>
    );
  }
}

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });
const store = configureStore(history);

export class Base extends React.Component {
  constructor(props) {
    super(props);
    console.log(history);
    let logPush = (e) => {
      console.log(e);
      let path = e['arguments']['2'].replace(window.location.origin, '');
      if (!e['arguments']['0']) {
        console.log('pathname', history.location.pathname);
        console.log('change', path);

        history.push(path);
      }
    }
    (window as any)['addEventListener']('pushState', e => logPush(e));
  }
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <React.Fragment>
            <div>

              <h1>
                router
              </h1>

              <Container>
                <ul>
                  <li>
                    <NavLink tag={Link} className="text-dark" to="./about">About</NavLink>

                    {/*<a href="./about" onClick={e => console.log(e)}> About</a>*/}
                  </li>
                  <li>
                    <NavLink tag={Link} className="text-dark" to="./home">Home</NavLink>
                    {/*<a href="./home" onClick={e => console.log(e)}> Home</a>*/}

                  </li>
                </ul>
              </Container>



              <div>
                <p>-----------</p>
                <Container>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/home' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/LearnReact' component={Home} />
                  <Route exact path='/LearnReact/home' component={Home} />
                  <Route exact path='/LearnReact/about' component={About} />
                </Container>


              </div>

            </div>
          </React.Fragment>
        </ConnectedRouter>
      </Provider >);
  }
}
