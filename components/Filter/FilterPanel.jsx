import Image from 'next/image'
import React from 'react'
import images from '../../constants/images'
import { LIST, PRODUCT_TYPE_LIST } from '@/constants/data'

const FilterPanel = () => {
  return (
    <>
      <div className="filterPanel">
        <div className="filterPanel_top">
          <h4 className='filterPanel_title'>Clear All</h4>
        </div>
        <div className='horizontal'>

        </div>
        <div className="filterPanel_Product_Section">
            <h4 className="product_heading">Product Type</h4>
            <Image src={images.Select_icon} width={20} height={20} alt='down_arrow' />
        </div>
        <ul className='filterPanel_list'>
          {
            PRODUCT_TYPE_LIST.map((item) => (
                <>
                  <li key={item.id} className='filterPanel_list_item'>
                    <span className='filterPanel_list_icon'></span>
                    <span>{item.label}</span>
                  </li>
                </>
            ))
          }
        </ul>
        <div className='horizontal'></div>
        <div className="filterPanel_Product_Section">
            <h4 className="product_heading">Price</h4>
            <Image src={images.Select_icon} width={20} height={20} alt='down_arrow' />
        </div>
        <div className='filterPanel_label'>
        <label htmlFor="range" className='inputRange'>
        <input type="range" className='inputRange' id='range' />
        </label>
        </div>
        <div className="filterPanel_minRange">
            <div className='minRange_content'>
                <span className='minRange_text'>Min</span>
                <span><Image src={images.Select_icon} width={20} height={20} alt='down-arrow' /></span>
            </div>
            <div className='minRange_content'>
            <span className='minRange_value'>$ 1000</span>
            <span><Image src={images.Select_icon} width={20} height={20} alt='down-arrow' /></span>
            </div>
        </div>
        <div className='filterPanel_ProductCollection_list'>

        {
            LIST.map((item) => (
                <>
             <div className='horizontal'></div>
              <div className='filterPanel__ProductCollection_list_flex'>
                <span>{item.label}</span>
                <span><Image src={images.Select_icon} width={20} height={20} alt='down-arrow' /></span>
              </div>
                </>
            ))
        }
        </div>
      </div>
    </>
  )
}

export default FilterPanel