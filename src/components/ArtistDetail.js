import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import NewPrintForm from './NewPrintForm';

function ArtistDetail({addNewPrint, onDeletePrint}) {

    const [selectedArtist, setSelectedArtist] = useState([])
    const [artistPrints, setArtistPrints] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/artists/${id}`)
        .then(r => r.json())
        .then((artist) => {
            setSelectedArtist(artist)
            setIsLoaded(true)
        });

        fetch(`http://localhost:9292/artists/${id}/prints`)
        .then(r => r.json())
        .then(setArtistPrints);
    },[id]);

    if(!isLoaded) return <h2>Loading...</h2>

    const {name, location, bio, website_url, artist_photo, instagram} = selectedArtist

    function handleDelete() {
        fetch(`http://localhost:9292/prints/${id}`, {method: 'DELETE'})
        .then(() => onDeletePrint(print))
    }


    const printArray = artistPrints.map((eachPrint) => {
        return (
            <div key={eachPrint.id}> 
                <img src={eachPrint.image_url} alt={`${eachPrint.title}`}/>
                <div>
                <h2>Title: "{eachPrint.title}"</h2>
                <p>Year: {eachPrint.year}</p>
                <p>Edition Size: {eachPrint.edition_size}</p>
                <p>Art Category: {eachPrint.category} {eachPrint.sub_category === ""? null : `, ${eachPrint.sub_category}`}</p>
                <button onClick={handleDelete}>Delete</button>
            </div>
            </div>
        )
    })
    // const {title, year, edition_size, category, sub_category, image_url, artist_id} = artistPrints
    // console.log(artistPrints)
    
    function handleToggleForm() {
        setShowForm((showForm) => !showForm);
    }

    return (
        <div>
            <div>
                <h1>{name}</h1>
                <h3>{location}</h3>
                <img src={artist_photo} alt={`artist ${name}`}/>
                <h3>{bio}</h3>
                <h4>Instagram: {instagram}</h4>
                <a href ={website_url}>See more of {name}'s work here!</a> 
            </div>
            {printArray}
            <div>
                <button onClick={handleToggleForm}>{showForm ? "Hide Print Form" : "Add New Print!"}</button>
                {showForm ? <NewPrintForm addNewPrint={addNewPrint} artistId={id}/>: null}
            </div>
            
        </div>
    )
};

export default ArtistDetail;