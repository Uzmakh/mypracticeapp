import React from 'react'

const Bio = () => {
  return (
    <section className=' w-screen flex flex-col justify-center items-center pt-10'>
          <h1 className='text-4xl font-extrabold'>Activities</h1>
          <h3 className='text-2xl uppercase font-light'>EduHub Institute of Technology</h3>
          <p className="text-2xl w-2/3 py-10
           font-semibold spacing font-paraFont">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quibusdam voluptas recusandae amet eius, doloremque nobis cumque id necessitatibus, vitae laudantium nulla vel sit consequatur obcaecati, quia nesciunt eligendi quisquam reiciendis dolore architecto! Sed, expedita.</p>
          <div className='flex gap-6 justify-center items-center xs:flex-col md:flex-row'>
              <img src="https://cdn.pixabay.com/photo/2014/03/12/18/45/boys-286245_1280.jpg" alt="Img1" className='md:w-1/4 xs:w-2/4 shadow-lg hover:shadow-2xl'/>
              <img src="https://cdn.pixabay.com/photo/2017/03/27/13/17/notebook-2178656_1280.jpg" alt="Img2" className='md:w-1/4 xs:w-2/4 shadow-lg hover:shadow-2xl'/>
              <img src="https://cdn.pixabay.com/photo/2020/09/24/16/50/board-5599231_1280.png" alt="Img3" className='md:w-1/4 xs:w-2/4 shadow-lg hover:shadow-2xl'/>
          </div>
          <button className=' p-2 border-4 border-red-500 rounded-md my-10 hover:text-red-500 hover:border-none hover:text-2xl'>View More</button>
    </section>
  )
}

export default Bio
