import './Review.scss';

const Review = ({name, review}) => {
  return (
    <div className='Review'>
      <p>{review}</p>
      <h4>{name}</h4>
    </div>
  )
}

export default Review
