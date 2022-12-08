import React, {useState} from 'react';

function NewArtistForm ({addNewArtist}) {
    
    const [newArtistObj, setNewArtistObj] = useState({
        name: "",
        location: "",
        bio: "",
        website_url: "",
        artist_photo: "",
        instagram: ""
    })

    function handleArtistFormSubmit (e) {
        e.preventDefault()

        // console.log(newArtistObj)
        addNewArtist(newArtistObj) 

        setNewArtistObj({
            name: "",
            location: "",
            bio: "",
            website_url: "",
            artist_photo: "",
            instagram: ""
        });
    }

    function handleChange (e) {
        const key = e.target.name;
        const value = e.target.value;
        
        setNewArtistObj({
           ...newArtistObj,
            [key]: value
        })
    }


    return (
        <div className="new-artist-form">
            <form className="form-container" onSubmit={handleArtistFormSubmit}>
                <label className="form-labels"> Name: 
                        <input 
                            className="form-inputs" 
                            type="text" 
                            name="name"
                            value={newArtistObj.name}
                            onChange={handleChange} />
                    </label>
                    <br /> 
                <label className="form-labels"> Location: 
                        <input 
                            className="form-inputs" 
                            type="text" 
                            name="location"
                            value={newArtistObj.location}
                            onChange={handleChange} />
                    </label>
                    <br /> 
                <label className="form-labels"> Bio: 
                        <textarea 
                            className="form-inputs" 
                            type="text" 
                            name="bio"
                            value={newArtistObj.bio}
                            onChange={handleChange} >
                        </textarea>
                    </label>
                    <br /> 
                <label className="form-labels"> Photo: 
                        <input 
                            className="form-inputs" 
                            type="text" 
                            name="artist_photo"
                            value={newArtistObj.artist_photo}
                            onChange={handleChange} />
                    </label>
                    <br /> 
                <label className="form-labels"> Website: 
                        <input 
                            className="form-inputs" 
                            type="text" 
                            name="website_url"
                            value={newArtistObj.website_url}
                            onChange={handleChange} />
                </label>
                    <br /> 
                <label className="form-labels"> Instagram: 
                        <input 
                            className="form-inputs" 
                            type="text" 
                            name="instagram"
                            value={newArtistObj.instagram}
                            onChange={handleChange} />
                </label>
                    <br /> 
                    <input id='button-artist-submit-form'type="submit" value="SUBMIT" />
            </form>
        </div>
    )
}

export default NewArtistForm;