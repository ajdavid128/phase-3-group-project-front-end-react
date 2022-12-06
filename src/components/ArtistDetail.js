import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import NewPrintForm from './NewPrintForm';

function ArtistDetail({addNewPrint}) {

    const [selectedArtist, setSelectedArtist] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/artists/${id}`)
        .then(r => r.json())
        .then((artist) => {
            setSelectedArtist(artist)
            setIsLoaded(true)
        });
    },[id]);

    if(!isLoaded) return <h2>Loading...</h2>

    const {name, location, bio, website_url, artist_photo, instagram} = selectedArtist

    // build method in ruby for fetch request in to get specific artist's prints
    // Probably add state for this and map over images for use

    return (
        <div>
            <NewPrintForm addNewPrint={addNewPrint} />
        </div>
    )
};

export default ArtistDetail;