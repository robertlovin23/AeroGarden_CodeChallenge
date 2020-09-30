import React, { useState } from 'react';

const Search = (props) => {
    //Initialize state for the dropdown menu
    const [seedKit, setSeedState] = useState("");

    //Handle the change of the seed kit
    const handleSeedKitChange = (e) => {
        setSeedState(e.target.value);
    }

    //Submit the selected seed kit
    const submitSeedKit = (e) => {
        e.preventDefault();
        props.submitSeedKit(
            seedKit
        );
    }

    //Create the form to check which seed kits should be used
    return(
        <div className="ui segment">
            <form className="field" onSubmit={submitSeedKit}>
                <label htmlFor="seed_kits">What do you want to grow?</label>
                <select name="seed_kits" className="ui fluid dropdown" onChange={handleSeedKitChange} value={seedKit}>
                    <option value="">Select Option</option>
                    <option value="gourmet_herbs">Gourmet Herbs</option>
                    <option value="cherry_tomatoes">Cherry Tomatoes</option>
                    <option value="salad_greens">Salad Greens</option>
                </select>
                <input className="ui primary button" style={{marginTop:"5px"}} type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Search;