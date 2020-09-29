import React, { useEffect } from 'react';

const List = (props) => {
    const gardens =  props.gardens

    console.log(gardens)
    const gardenMap = gardens.map((garden,index) => {
        console.log(garden.name)
        return(
            <li key={index}>
                {garden.name}
            </li>
        )
    })
    return(
        <ul>
            {gardenMap}
        </ul>
    )
}

export default List;