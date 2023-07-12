import React from 'react'
import ReactLoading from 'react-loading';

const Loader = () => {
  return (
    <div className='w-full h-full fixed bg-transparent text-white z-40 flex items-center justify-center'>

          <ReactLoading type="bars" color="cyan" className='md:w-28' />

    </div>
  )
}

export default Loader