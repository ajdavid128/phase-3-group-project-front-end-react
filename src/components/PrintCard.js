import React from 'react';

function PrintCard ({title, year, image_url, artist_id, artists}) {

  const artistArray = artists.map((eachArtist) => {
    if (eachArtist.id === artist_id) {
      return eachArtist.name }
  })
          

  const artistName = artistArray.filter ((eachName) => {
    return (
      eachName !== undefined
    )
  })

  return (
    <div className="print-container">
      <img className="print-container-images" src={image_url} alt="screen printed poster" />
        <div className="overlay">
          <div className="text-block">
            <h3>{title}</h3>
            <h4>{artistName[0]}</h4>
            <h4>{year}</h4>
          </div>
      </div>
    </div>
  )
}

export default PrintCard;