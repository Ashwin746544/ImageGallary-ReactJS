import { useState, useEffect } from 'react';
import './App.css';
import { createApi } from 'unsplash-js';
import Searchbar from './components/Searchbar/Searchbar';
import Images from './components/images/images';

const unsplash = createApi({
  accessKey: "q57dhCGtqh0GwXvKvRdcCQas8KXlTHMKmPfrm_0ehkI"
});

function App() {
  console.log("App Rendered!");
  const [fetchedImages, setFetchedImages] = useState([]);
  const [searchedText, setSearchedText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => {
      setIsLoading(true);
      console.log('fetching images...  ' + searchedText);
      unsplash.search.getPhotos({ query: searchedText == '' ? 'user' : searchedText, page: 1, perPage: 15 })
        .then(res => {
          console.log(res);
          setFetchedImages(res.response.results);
          setIsLoading(false);
        }
        );
    }, searchedText == '' ? 0 : 500);
    return () => { clearTimeout(id) };
  }, [searchedText]);
  const updateSearchTextHandler = (text) => {
    setSearchedText(text);
  }
  return (
    <div className="App">
      <h1>My Gallary</h1>
      <Searchbar textChanged={updateSearchTextHandler}></Searchbar>
      {isLoading ? <p>Loading...</p> : (fetchedImages.length == 0 ? <h1>No Result Found!</h1> : <Images images={fetchedImages} />)}
    </div>
  );
}

export default App;
