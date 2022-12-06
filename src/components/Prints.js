import React from 'react';
import PrintCard from './PrintCard';

function Prints ({prints}) {

    const printsArray = prints.map((eachPrint) => {
        return <PrintCard key={eachPrint.id} {...eachPrint} />;
    });

    return (
        <div>
            {printsArray}
        </div>
    )
}


export default Prints;