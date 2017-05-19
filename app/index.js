var React = require('react');
import ReactDOM from 'react-dom';
import Routes from './config/routes';
import NavBar from './containers/HomeContainer';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

ReactDOM.render(<Routes />, document.getElementById('app'));