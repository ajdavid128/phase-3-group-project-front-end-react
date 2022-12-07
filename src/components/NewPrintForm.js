import React, {useState} from 'react';

function NewPrintForm ({addNewPrint, artistId}) {

    const [newPrintObj, setNewPrintObj] = useState({
        title: "",
        year: 0,
        edition_size: "",
        category: "",
        image_url: "",
        artist_id: artistId
    })

    function handlePrintFormSubmit (e) {
        e.preventDefault()

        console.log(newPrintObj)

        addNewPrint(newPrintObj) 

        setNewPrintObj({
            title: "",
            year: 0,
            edition_size: "",
            category: "",
            image_url: "",
            artist_id: artistId
        });
    }

    function handleChange (e) {
        const key = e.target.name;
        const value = e.target.value;
        
        setNewPrintObj({
           ...newPrintObj,
            [key]: value
        })
    }



    return (
        <div className="new-print-form">
            <form className="form-container" onSubmit={handlePrintFormSubmit}>
            <label className="form-labels"> Title: 
                <input 
                    className="form-inputs" 
                    type="text" 
                    name="title"
                    value={newPrintObj.title}
                    onChange={handleChange} />
            </label>
            <br /> 
            <label className="form-labels"> Year: 
                <input 
                    className="form-inputs" 
                    type="text" 
                    name="year"
                    value={newPrintObj.year}
                    onChange={handleChange} />
            </label>
            <br /> 
            <label className="form-labels"> Edition Size: 
                <input 
                    className="form-inputs" 
                    type="text" 
                    name="edition_size"
                    value={newPrintObj.edition_size}
                    onChange={handleChange} />
            </label>
            <br /> 
            <label className="form-labels"> Category: 
                <input 
                    className="form-inputs" 
                    type="text" 
                    name="category"
                    value={newPrintObj.category}
                    onChange={handleChange} />
            </label>
            <br /> 
            {/* <label className="form-labels"> Sub-Category: 
                <input 
                    className="form-inputs" 
                    type="text" 
                    name="sub_category"
                    value={newPrintObj.sub_category}
                    onChange={handleChange} />
            </label>
            <br />  */}
            <label className="form-labels"> Image: 
                <input 
                    className="form-inputs" 
                    type="text" 
                    name="image_url"
                    value={newPrintObj.image_url}
                    onChange={handleChange} />
            </label>
            <br /> 
            <input id='submit-form'type="submit" value="SUBMIT" />
            </form>
        </div>
    )
}

export default NewPrintForm;