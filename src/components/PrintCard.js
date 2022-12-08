// import {useState} from 'react'


function PrintCard ({title, year, edition_size, category, sub_category, image_url, artists}) {

  console.log(artists)

  const artistArray = artists.map((eachArtist) => {
    return (
      {eachArtist.id === artists.id}
    )
  })

    return (
        <div className="print-container">
          <img className="print-container-images" src={image_url} alt="screen printed poster" />
          <div className="overlay">
            <div className="text-block">
              <h4>{title}</h4>

              {/* <h5>{}</h5> */}
              <p>{year}</p>
            </div>
          </div>
        </div>
    )
}

export default PrintCard