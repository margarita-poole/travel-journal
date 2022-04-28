import pin from '../../assets/mapIcon.png'

const Card = ({ item }) => {
  return (
    <div className='sm:mx-auto md:mx-32 my-24'>
      <div className='flex basis-1/4 h-44'>
        <img src={item.image} alt='cardImage' />
        <div className='flex flex-col ml-4 p-2'>
          <div className='flex gap-2 my-auto'>
            <img src={pin} alt='map pin' className='h-3 flex my-auto' />
            <span className='tracking-widest'>{item.location}</span>
            <a
              href={item.googleMapsUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='ml-3 text-stone-400 underline'
            >
              View on Google Maps
            </a>
          </div>
          <p className='text-3xl font-bold'>{item.title}</p>
          <div className='mt-6'>
            <p className='font-bold text-xs'>
              {item.startDate} - {item.endDate}
            </p>
            <p className='mt-4 text-xs flex-wrap'>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
