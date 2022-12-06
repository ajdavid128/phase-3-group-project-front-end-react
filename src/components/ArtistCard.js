
function ArtistCard({name, location, bio, website_url, artist_photo, instagram}) {

    return (
        <div id="artistCard">
            <img id="artist-image" src={artist_photo} alt={`artist ${name}`} />
        </div>
    )
}

export default ArtistCard;