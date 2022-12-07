import {useState} from 'react'


function PrintCard ({title, year, edition_size, category, sub_category, image_url}) {

    const [posterInfo, setPosterInfo] = useState(false);

    const handleMouseOver = () => {
        setPosterInfo(true);
      }
      
    const handleMouseOut = () => {
        setPosterInfo(false);
      }

    const FlippedCard = () => {
        return (
          <div>
            <h3><u>Title:</u> <br/>{title}</h3>
            <h3><u>Year:</u> <br/>{year}</h3>
            <h3><u>Artist:</u> <br/>{}</h3>
          </div>
        );
    }
    
    const cardSide = posterInfo ? <FlippedCard /> : <img id="poster-image" src={image_url} alt="screen printed poster"/>

    // const categoryToggle = sub_category === ""? null : `, ${sub_category}`

    return (
        <div 
            id="printCard"
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} 
            >
            {cardSide}
        </div>
    )
}

export default PrintCard