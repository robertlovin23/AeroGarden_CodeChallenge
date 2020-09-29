import React, { useState } from 'react';

const Search = (props) => {
    const [seedKit, setSeedState] = useState("");

    const handleSeedKitChange = (e) => {
        setSeedState(e.target.value)
    }

    const submitSeedKit = (e) => {
        e.preventDefault();
        props.submitSeedKit(
            seedKit
        )
    }

    return(
        <div className="segment">
            <form className="search-form" onSubmit={submitSeedKit}>
                <label htmlFor="seed_kits">What do you want to grow?</label>
                <select name="seed_kits" onChange={handleSeedKitChange} value={seedKit}>
                    <option value="">Select Option</option>
                    <option value="gourmet_herbs">Gourmet Herbs</option>
                    <option value="cherry_tomatoes">Cherry Tomatoes</option>
                    <option value="salad_greens">Salad Greens</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Search;