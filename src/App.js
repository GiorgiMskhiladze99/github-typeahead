import React, {useEffect, useState} from 'react';

import './App.scss';

import Search from "./components/search/search";
import getUsers from "./helper/getUsers";
import Users from "./components/users/users";

import loadingImage from './assets/icons/loading.svg'

function App() {

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
    setSearchValue(inputValue);
  };

  return (
      <div className="App">

        <Search onChangeHandler={onChangeHandler}/>
        { searchValue && userData !== null && <Users data={userData}/>}

        {/*it can be another component or maybe ported above the root element*/}
        { isLoading && userData === null ? <div className={"loading__container"}>
          <img className={"loading"} src={loadingImage} alt="loading"/>
        </div> : ""}

      </div>
  );
}

export default App;