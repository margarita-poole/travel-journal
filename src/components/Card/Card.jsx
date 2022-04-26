import pin from '../../assets/mapIcon.png'

const Card = ({ item }) => {
  return (
    <div className='border-slate-900 border-2'>
      <div>
        <img src={item.image} alt='cardImage' />
        <div>
          <div>
            <img src={pin} alt='map pin' />
            <span>{item.location}</span>
          </div>
          <span>View on Google Maps link</span>
        </div>
        <p>{item.title}</p>
        <div>
          <p>
            {item.startDate} - {item.endDate}
          </p>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
