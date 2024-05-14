import { motion } from 'framer-motion'
import React from 'react'

const Data = () => {
  return (
    <div className='w-full py-32 overflow-hidden  bg-[#FFFFFF] text-black'>
      <div className='w-1/2 mx-auto'>
      <motion.div  initial={{ x: "150%",  opacity: 0.5 }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}   whileInView={{ x: "-30%",  opacity: 1 }}  className="div h-96 w-96 bg-red-800"></motion.div>
      {['Data', 'Informs', 'Emotion', 'Converts'].map((i, index) => {
        return <div key={index} className='masker overflow-hidden'>
      <motion.h1 
       initial={{ y: "100%", rotate: "7deg", opacity: 0 }}
       whileInView={{ y: "0", rotate: "0deg", opacity: 1 }} 
       transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} 
       className='text-[10.1vw] leading-[9vw]  flex items-center'>

      {i}
      </motion.h1>
      </div>
      })}
      
      
      </div>
    </div>
  )
}

export default Data