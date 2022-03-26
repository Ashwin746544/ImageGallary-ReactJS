import { useState, useEffect, useCallback } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import Images from './components/images/images';

function App() {
  // hello this comment is for understanding git stash command
  console.log("App Rendered!");
  const [fetchedImages, setFetchedImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const storeFetchedImages = useCallback((imagesArray) => {
    setFetchedImages(imagesArray);
  }, [])

  const storeLoadingState = useCallback((loadingValue) => {
    setIsLoading(loadingValue);
  }, [])

  return (
    <div className="App">
      <h1>My Gallary</h1>
      <Searchbar storeFetchedImages={storeFetchedImages} storeLoadingState={storeLoadingState}></Searchbar>
      {isLoading ? <p>Loading...</p> : (fetchedImages.length == 0 ? <h1>No Result Found!</h1> : <Images images={fetchedImages} />)}
    </div>
  );
}

export default App;
