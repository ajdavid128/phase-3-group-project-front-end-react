import React, {useState, useEffect} from 'react';

function Slideshow() {

    const [images, setImages] = useState([]);
    const [nextIndex, setNextIndex] = useState(0);

    // console.log(images)

    useEffect(() => {
        fetch('http://localhost:9292/prints/images/all')
        .then(r => r.json())
        .then(setImages)
    },[])

    const arrayLength = images.length;

    setTimeout(() => {
        if (nextIndex < arrayLength - 1) {
            setNextIndex(nextIndex + 1);
        } else {
            setNextIndex(0);
        }
      }, 4000);


    return (
        <div id="slideshow-container">
            <div id="slideshow-image">
                <img style={{width: 500}} src={images[nextIndex]} alt="print" ></img>
            </div>
        </div>
    )
};

export default Slideshow;