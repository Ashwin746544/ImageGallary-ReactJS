import './Searchbar.css';
const Searchbar = (props) => {
  return <div className="Searchbar">
    <input type="text" name="name" id="name" placeholder="search..." onChange={(event) => props.textChanged(event.target.value)} />
  </div>
}

export default Searchbar;