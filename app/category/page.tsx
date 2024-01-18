"use client"
import React, { useState } from 'react'
import Filter from '../../components/Filter/Filter'
import Image from 'next/image'
import images from '@/constants/images'

const page = () => {

  let text = "ABCDEFGHIJ"
  return (
    <>
    <section className="filter_Section">
    <Filter />
    <div className='max-w-[1480px] grid grid-cols-4 gap-10 p-5'>
      <div className='border border-solid min-h-[529px] col-span-2 border-[#d0d0cc] rounded-[10px]'>
        <div>
          <Image src="" alt="" />
        </div>
      </div>
      {
        Array.from("ABCDEFGHIJ").map((item,i) => (
          <>
          <div className="border border-solid min-h-[529px] border-[#d0d0cc] rounded-[10px] flex flex-col justify-around items-center p-5" key={i}>
          <Image src={images.Shirt} alt="" className='h-[60%]'/>
          <div className="content">
             <p className='w-[265px] h-[55px] text-center text-[18px] font-[500]'>Zama Flannel Plaid Button Down Shirt - Unisex</p>
             <span className='inline-block w-full h-[18px] text-[14px] tracking-[0.14px] text-center'>as low as $60.00</span>
          </div>
          </div>
          </>
))
}
     
    </div>
    </section>
    </>
  )
}

export default page