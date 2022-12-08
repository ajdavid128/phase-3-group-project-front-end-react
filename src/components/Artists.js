import React, {useState} from 'react';
import NewArtistForm from './NewArtistForm';
import ArtistCard from './ArtistCard';

function Artists ({artists, addNewArtist}) {
    
    const [showForm, setShowForm] = useState(false)

    const artistArray = artists.map((eachArtist) => {
        return <ArtistCard key={eachArtist.id} {...eachArtist} />
    })

    function handleToggleForm() {
        setShowForm((showForm) => !showForm);
    }

    return (
        <div className="artists">
            <div id="artist-grid">{artistArray}</div>
            <div id="center-artist-button">
                <button id="button-add-new-artist" onClick={handleToggleForm}>{showForm ? "HIDE FORM" : "ADD ARTIST"}</button>
            </div>    
                {showForm ? <NewArtistForm addNewArtist={addNewArtist} /> : null}
            
        </div>
    )
}

export default Artists;