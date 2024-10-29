import './Category.scss';
import Image from 'next/image';


const Category = ({category, img, style}) => {
  return (
    <div className='Category' style={style}>
        <p>{category}</p>
        <Image
            src={img}
            quality={100}
            alt="car"
        />
        <h3>Права категории "{category}"</h3>
    </div>
  )
}

export default Category
