import React, {useState, useEffect} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import Artists from './Artists';
import Prints from './Prints';
import ArtistDetail from './ArtistDetail';

function App() {

	const [artists, setArtists] = useState([]);
	const [prints, setPrints] = useState([]);

	const history = useHistory();

	useEffect(() => {
		fetch("http://localhost:9292/artists")
		.then(r => r.json())
		.then(setArtists);

		fetch("http://localhost:9292/prints")
		.then(r => r.json())
		.then(setPrints);
	},[])

	function addNewArtist (someNewArtistObj) {
		fetch (`http://localhost:9292/artists`, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(someNewArtistObj)
		  })
		  .then (response => response.json())
		  .then (newArtistData => {
			setArtists([...artists, newArtistData]);
			history.push("/artists");
		})
	}

	function addNewPrint (someNewPrintObj) {
		fetch (`http://localhost:9292/prints`, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(someNewPrintObj)
		  })
		  .then (response => response.json())
		  .then (newPrintData => {
			setPrints([...prints, newPrintData]);
			history.push("/prints");
		})
	}

	const onDeletePrint = (destroyedPrint) => {
		const updatedPrintList = prints.filter((print) => {
			return print.id !== destroyedPrint.id
		});
		setPrints(updatedPrintList);
	}

	
	// function handleDelete() {
    //     fetch(`http://localhost:9292/prints/${id}`, {method: 'DELETE'})
    //     // .then(() => onDeletePrint(print))
    // }


	return (
		<div className='App'>
			<NavBar />
			<Switch>
				<Route path="/artists/:id">
          			<ArtistDetail addNewPrint={addNewPrint} onDeletePrint={onDeletePrint} />
       			</Route>
				<Route path='/artists'>
					<Artists artists={artists} addNewArtist={addNewArtist} />
				</Route>
				<Route path='/prints'>
					<Prints prints={prints}/>
				</Route>
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
