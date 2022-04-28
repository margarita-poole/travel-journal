import pin from '../../assets/mapIcon.png'

const Card = ({ item }) => {
  return (
    <div className='sm:mx-auto md:mx-32 my-10 md:my-24'>
      <div className='sm:justify-center md:flex md:basis-1/4 md:h-44'>
        <img src={item.image} alt='cardImage' className='mx-auto' />
        <div className='flex flex-col p-4 md:ml-4 md:p-2'>
          <div className='flex justify-between'>
            <div className='flex gap-2'>
              <img src={pin} alt='map pin' className='h-3 flex my-auto' />
              <span className='tracking-widest'>{item.location}</span>
            </div>
            <a
              href={item.googleMapsUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='ml-3 text-stone-400 underline text-sm md:text-md '
            >
              View on Google Maps
            </a>
          </div>
          <p className='mx-auto md:ml-0 text-lg md:text-xl lg:text-3xl font-bold'>{item.title}</p>
          <div className='md:mt-6'>
            <p className='md:font-bold text-xs'>
              {item.startDate} - {item.endDate}
            </p>
            <p className='mt-2 md:mt-4 text-xs lg:max-w-xl'>
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
