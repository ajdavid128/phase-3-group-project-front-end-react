import React from 'react';
import {Link} from 'react-router-dom';

function ArtistCard({id, name, location, bio, website_url, artist_photo, instagram}) {

    // console.log(id)

    return (
        <Link to={`/artists/${id}`}>
            <div id="artistCard">
                <img id="artist-image" src={artist_photo} alt={`artist ${name}`} />
                <h2>{name.toUpperCase()}</h2>
            </div>
        </Link>
    )
}

export default ArtistCard;