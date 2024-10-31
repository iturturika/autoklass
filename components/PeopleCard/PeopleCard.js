import './PeopleCard.scss';
import Image from 'next/image';


const PeopleCard = ({name, img}) => {
  return (
    <div className='people-card'>
        <Image
            src={img}
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
