import React from 'react';

const List = (props) => {
    //Set props.gardens to a new variable
    const gardens =  props.gardens

    //Map filtered gardens array to a list
    const gardenMap = gardens.map((garden,index) => {
        console.log(garden)
        // Capitalize first letter of garden type
        const gardenName = garden.name.charAt(0).toUpperCase() + garden.name.slice(1);

        return(
            <div key={index} className="item">
                <div className="content">
                    <div className="header">{gardenName}</div>
                    <div className="description">
                        <ul>
                            <li>Grow Height: {garden.grow_height}</li>
                            <li>Pods: {garden.pods}</li>
                            <li>Wattage: {garden.wattage}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    })
    if(!gardens.length){
        return(
            <div className="ui active centered inline loader"></div>
        )
    } else {
        return(
            <ul className="ui relaxed divided list">
                {gardenMap}
            </ul>
        )    
    }
}

export default List;