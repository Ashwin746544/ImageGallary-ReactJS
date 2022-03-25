import './Searchbar.css';
import React, { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js';


const unsplash = createApi({
  accessKey: "q57dhCGtqh0GwXvKvRdcCQas8KXlTHMKmPfrm_0ehkI"
});

const Searchbar = (props) => {

  const [searchedText, setSearchedText] = useState('');
  console.log("SearchBar Rendered!");

  useEffect(() => {
    const id = setTimeout(() => {
      // setIsLoading(true);
      props.storeLoadingState(true);
      console.log('fetching images...  ' + searchedText);
      unsplash.search.getPhotos({ query: searchedText == '' ? 'user' : searchedText, page: 1, perPage: 15 })
        .then(res => {
          console.log(res);
          // setFetchedImages(res.response.results);
          // setIsLoading(false);
          props.storeFetchedImages(res.response.results);
          props.storeLoadingState(false);
        }
        );
    }, searchedText == '' ? 0 : 500);
    return () => { clearTimeout(id) };
  }, [searchedText]);

  const updateSearchTextHandler = (text) => {
    setSearchedText(text);
  }

  return <div className="Searchbar">
    <input type="text" name="name" id="name" placeholder="search..." onChange={(event) => updateSearchTextHandler(event.target.value)} />
  </div>
}

export default React.memo(Searchbar);