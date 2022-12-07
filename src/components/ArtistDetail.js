import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import NewPrintForm from './NewPrintForm';

function ArtistDetail({addNewPrint, onDeletePrint, updatePrint}) {
	const [selectedArtist, setSelectedArtist] = useState([]);
	const [artistPrints, setArtistPrints] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const [showCategoryForm, setShowCategoryForm] = useState(false);
	const [subCategory, setSubCategory] = useState({sub_category: ''});

	let {id} = useParams();

	// console.log(id);

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
	// console.log(selectedArtist)

	// const test = artistPrints.map((onePrint) => console.log(onePrint))

	// const artistPrint = {title, year, edition_size, category, sub_category, image_url, artist_id}
	// console.log(eachPrints)

	function handleDelete(eachPrint) {
		fetch(`http://localhost:9292/prints/${eachPrint.id}`, {method: 'DELETE'})
		.then(() => onDeletePrint(eachPrint))
	}

	function handleUpdateSubmit(e,eachPrint) {
		e.preventDefault();

		updatePrint(subCategory, eachPrint.id);
	}

	function handleChange(e) {
		const key = e.target.name;
		const value = e.target.value;

		setSubCategory({
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
			<div id='' key={i}>
				<img src={eachPrint.image_url} alt={`${eachPrint.title}`} />
				<div>
					<h2>Title: "{eachPrint.title}"</h2>
					<p>Year: {eachPrint.year}</p>
					<p>Edition Size: {eachPrint.edition_size}</p>
					<p>
						Art Category: {eachPrint.category}
						{eachPrint.sub_category === '' ? null : `, ${eachPrint.sub_category}`}
					</p>
					<button onClick={() => handleDelete(eachPrint)}>Delete Print</button>
					<button onClick={handleToggleUpdate}>Add Another Category</button>

					{showCategoryForm ? (
						<form className='form-container' onSubmit={(e)=>handleUpdateSubmit(e,eachPrint)}>
							<label className='form-labels'>
								{' '}
								Additional Category:
								<input
									className='form-inputs'
									type='text'
									name='sub_category'
									value={subCategory.sub_category}
									onChange={handleChange}
								/>
							</label>
							<br />
							<input id='submit-form' type='submit' value='SUBMIT' />
						</form>
					) : null}
				</div>
			</div>
		);
	});

	return (
		<>
			{!isLoaded ? <h2>Loading...</h2> :
			<div>
				<div>
					<h1>{name}</h1>
					<h3>{location}</h3>
					<img src={artist_photo} alt={`artist ${name}`} />
					<h3>{bio}</h3>
					<h4>Instagram: {instagram}</h4>
					<a href={website_url}>See more of {name}'s work here!</a>
				</div>
				{printArray}
				<div>
					<button onClick={handleToggleForm}>{showForm ? 'Hide Print Form' : 'Add New Print!'}</button>
					{showForm ? <NewPrintForm addNewPrint={addNewPrint} artistId={id} /> : null}
				</div>
			</div>}
		</>
	);
}

export default ArtistDetail;
