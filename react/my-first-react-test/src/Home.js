import React, { useState } from 'react';
import Search from './Search';

function Home() {
    const [searchText, setSearchText] = useState('');

    const onChangeInput = (e) => {
        console.log(e.target.value);
        setSearchText(e.target.value);
    };

    return (
        <div>
            <h1>Este es el home</h1>
            <Search value={searchText} onChange={onChangeInput} titulo="Search:" />
        </div>
    )
}

export default Home;
