import React, {useEffect, useState} from 'react';

import './App.scss';

import Search from "./components/search/search";
import getUsers from "./helper/getUsers";
import Users from "./components/users/users";

import loadingImage from './assets/icons/loading.svg'

function App() {

  let timer;

  const [searchValue, setSearchValue] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(undefined);

  useEffect(() => {

    setIsLoading(false);

    if (searchValue.length > 0){

      setIsLoading(true);
      setUserData(null);

      //define data parameters
      getUsers(searchValue, "best_match", "desc", 10, 1).then(res => setUserData(res));
    }
  }, [searchValue]);

  const onChangeHandler = (inputValue) => {
    clearTimeout(timer);
    timer = setTimeout( ()=>{
      setSearchValue(inputValue);
    }, 800)
  };

  return (
      <div className="App">

        <h1>Github Typeahead</h1>

        <Search onChangeHandler={onChangeHandler}/>
        { searchValue && userData !== null && userData.total_count !== 0 ? <Users data={userData}/> :
            searchValue && userData !== null && userData.total_count === 0 ? <span>User not found</span> : ""}

        {/*it can be another component or maybe ported above the root element*/}
        { isLoading && userData === null ? <div className={"loading__container"}>
          <img className={"loading"} src={loadingImage} alt="loading"/>
        </div> : ""}

      </div>
  );
}

export default App;