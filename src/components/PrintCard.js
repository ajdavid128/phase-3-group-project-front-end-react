
function PrintCard ({title, year, edition_size, category, sub_category, image_url}) {

    const categoryToggle = sub_category === ""? null : `, ${sub_category}`

    return (
        <div id="printCard">
            <img id="poster-image" src={image_url} alt="screen printed poster" />
            {/* <div>
                <h2>Title: "{title}"</h2>
                <p>Year: {year}</p>
                <p>Edition Size: {edition_size}</p>
                <p>Art Category: {category} {categoryToggle}</p>
            </div> */}
        </div>
    )
}

export default PrintCard