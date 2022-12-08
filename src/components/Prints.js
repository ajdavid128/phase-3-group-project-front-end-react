import React from 'react';
import PrintCard from './PrintCard';

function Prints ({prints, artists}) {

    const printsArray = prints.map((eachPrint) => {
        return <PrintCard key={eachPrint.id} {...eachPrint} artists={artists} />;
    });

    return (
        <div>
            {printsArray}
        </div>
    )
}

export default Prints;