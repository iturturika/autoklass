import './Advantage.scss'
import Image from 'next/image'


const Advantage = ({img, advantage, description}) => {
  return (
    <div className='Advantage'>
        <div className='advantage__image'>
          <Image
              src={img}
              quality={100}
              alt="icon"
          />
          <h4>{advantage}</h4>
        </div>
        <p>{description}</p>
    </div>
  )
}

export default Advantage
