import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import NewPrintForm from './NewPrintForm';

function ArtistDetail({addNewPrint, onDeletePrint, updatePrint}) {

	const [selectedArtist, setSelectedArtist] = useState([]);
	const [artistPrints, setArtistPrints] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const [showCategoryForm, setShowCategoryForm] = useState(false);
	const [category, setCategory] = useState({category: ''});

	let {id} = useParams();

	useEffect(() => {
		fetch(`http://localhost:9292/artists/${id}`)
			.then((r) => r.json())
			.then((artist) => {
				setSelectedArtist(artist);
				setIsLoaded(true);
			});

		fetch(`http://localhost:9292/artists/${id}/prints`)
			.then((r) => r.json())
			.then(setArtistPrints);
	}, [id]);

	const {name, location, bio, website_url, artist_photo, instagram} = selectedArtist;

	function handleDelete(eachPrint) {
		fetch(`http://localhost:9292/prints/${eachPrint.id}`, {method: 'DELETE'})
		.then(() => onDeletePrint(eachPrint))
      window.location.reload(false)
	}

	function handleUpdateSubmit(e,eachPrint) {
		e.preventDefault();

		updatePrint(category, eachPrint.id);

  	setCategory ({
      category: ''
    })
	}

	function handleChange(e) {
		const key = e.target.name;
		const value = e.target.value;

		setCategory({
			[key]: value,
		});
	}

	function handleToggleForm() {
		setShowForm((showForm) => !showForm);
	}

	function handleToggleUpdate() {
		setShowCategoryForm((showCategoryForm) => !showCategoryForm);
	}

	const printArray = artistPrints.map((eachPrint,i) => {
		return (
			<div id='artist-detail-print-card' key={i}>
				<img id="artist-detail-print-image" src={eachPrint.image_url} alt={`${eachPrint.title}`} />
				<div>
					<h2>{eachPrint.title}</h2>
					<p>Year: {eachPrint.year}</p>
					<p>Edition Size: {eachPrint.edition_size}</p>
					<p>Category Tags: {eachPrint.category}</p>
					<button id="button-update-print" onClick={handleToggleUpdate}>{showCategoryForm ? 'HIDE FORM' : 'UPDATE CATEGORIES'}</button>
          <button id="button-delete-print" onClick={() => handleDelete(eachPrint)}>DELETE PRINT</button>
					{showCategoryForm ? (
						<form id="form-category" className='form-container' onSubmit={(e)=>handleUpdateSubmit(e,eachPrint)}>
							<label className='form-labels'>
								Categories:
								<input
									className='form-inputs'
									type='text'
									name='category'
									value={category.category}
									onChange={handleChange}
								/>
							</label>
							<br />
							<input id='button-submit-print-form' type='submit' value='SUBMIT' />
						</form>
					) : null}
				</div>
			</div>
		);
	});

	return (
		<>
			{!isLoaded ? <h2>Loading...</h2> :
			<div id="artist-detail">
				<div id="artist-detail-info">
					<h1>{name.toUpperCase()}</h1>
					<h3>{location}</h3>
					<img id="artist-detail-photo" src={artist_photo} alt={`artist ${name}`} />
					<h3>{bio}</h3>
			    <h3>IG: {instagram}</h3>
					<h3>
						<a href={website_url}><i>See more of {name}'s work here!</i></a>
					</h3>
				</div>
				{printArray}
				<div id="center-artist-button">
					<button id="button-add-new-print" onClick={handleToggleForm}>{showForm ? 'HIDE FORM' : 'ADD PRINT'}</button>
				</div>
        {showForm ? <NewPrintForm addNewPrint={addNewPrint} artistId={id} /> : null}
			</div>}
		</>
	);
}

export default ArtistDetail;