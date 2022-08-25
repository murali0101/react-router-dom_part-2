import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Home = (props) => {
  const navigate = () => {
    props.history.push('/test');
  }
  return (
    <div>
      <p>
        Start editing to see some magic happen :)
        </p>
      <button onClick={navigate}>Go to Test</button>
    </div>
  )
}

const Test = (props) => {
  return (
    <div>
      Test
    </div>
  )
}

const Check = (props) => {
  console.log(props);
  return (
    <div>
      Check
    </div>
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  menu = [{ name: 'Home', path: '/' }, { name: 'Test', path: '/test' }, { name: 'Check', path: '/test/:123' }]

  render() {
    return (
      <BrowserRouter>
        <div>
          {this.menu.map((x, i) => <NavLink exact activeClass="active" to={x.path} key={i}>{x.name}</NavLink>)}
          <br />
          <br />
          <br />
          <br />
          <Switch>
            <Route exact path="/" children={Home} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/test/:id" component={Check} />
            <Route component={() => {
              return <div>Not found</div>
            }} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
