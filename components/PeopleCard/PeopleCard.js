import './PeopleCard.scss';
import Image from 'next/image';
import image from '../../public/assets/images/image.png';

const PeopleCard = ({name}) => {
  return (
    <div className='people-card'>
        <Image
            src={image}
            quality={100}
            alt="people"
        />
        <div className='people-card__shadow-block'>
            <h4>{name}</h4>
        </div>
    </div>
  )
}

export default PeopleCard
