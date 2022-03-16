import './images.css'
import Image from './image/image';
const Images = (props) => {
  return (
    <div className='images-container'>
      {props.images.map(img => {
        return <Image key={img.id} src={img.urls.small} />
      })}
    </div>
  );

}
export default Images;