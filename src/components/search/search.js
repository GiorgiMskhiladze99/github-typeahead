import React from 'react';
import './search.scss'

function Search({onChangeHandler}) {

    const changeHandler = (text) => {
        onChangeHandler(text)
    }

    // const keyPressHandler = (e) => {
    //     if(e.key === 'Enter'){
    //         console.log("keyPressHandler");
    //     }
    // }
    //
    // const clickHandler = (e) => {
    //     e.preventDefault();
    //     console.log("clickHandler");
    // }

    return (
        <div className="input">
            <input type="text" className={"search__input"} maxLength={20} placeholder={"Search Github User"} onChange={ e => changeHandler(e.target.value)} />
            {/*<input type="text" className={"search__input"} maxLength={20} onChange={ e => changeHandler(e.target.value)} onKeyPress={keyPressHandler}/>*/}
            {/*<button className={"search__button"} onClick={clickHandler}>Search</button>*/}
        </div>
    );
}

export default Search;