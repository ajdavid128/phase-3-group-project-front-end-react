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
            <div>{artistArray}</div>
            <button onClick={handleToggleForm}>{showForm ? "Hide Artist Form" : "Add New Artist!"}</button>
            {showForm ? <NewArtistForm addNewArtist={addNewArtist} /> : null}
            
        </div>
    )
}

export default Artists;