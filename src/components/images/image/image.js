import "./image.css";
const Image = (props) => {
  return (
    <div className="image-container">
      <img src={props.src}></img>
    </div>
  );
}

export default Image;