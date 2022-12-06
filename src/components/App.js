import React, {useState, useEffect} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import Artists from './Artists';
import Prints from './Prints';

function App() {

	const [artists, setArtists] = useState([]);
	const [prints, setPrints] = useState([]);

	const history = useHistory();

	

	return (
		<div className='App'>
			<NavBar />
			<Switch>
				<Route path='/artists'>
					<Artists />
				</Route>
				<Route path='/prints'>
					<Prints />
				</Route>
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
