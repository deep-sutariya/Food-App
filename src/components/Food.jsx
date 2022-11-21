import React from 'react'
import { useState } from 'react'
import {categories, data} from '../data/data'

const Food = () => {

    const [foods,setfoods]=useState(data);

    // Filter Type
    const filterType=(category)=>{
        setfoods(
            data.filter((item)=>{
                return item.category === category;
            })
        );
    };

    // Filter Price
    const filterPrice=(price)=>{
        setfoods(
            data.filter((item)=>{
                return item.price === price;
            })
        );
    };


  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=>setfoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={()=>filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={()=>filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={()=>filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={()=>filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>
            {/* Filter Price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full flex-wrap'>
                    <button onClick={()=>filterPrice('10$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>10$</button>
                    <button onClick={()=>filterPrice('100$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>100$</button>
                    <button onClick={()=>filterPrice('1000$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>1000$</button>
                    <button onClick={()=>filterPrice('10000$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>10000$</button>
                </div>
            </div>
        </div>

        {/* Display Foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
            {foods.map((item,index) => (
                <div key={index} className='border rounded-lg shadow-lg hover:scale-105 duration-300 cursor-pointer'>
                    <img className='object-cover w-full h-[200px] rounded-t-lg' src={item.image} alt={item.name} />
                    <div className='flex justify-between px-2 py-4 '>
                        <p className='font-bold'>{item.name}</p>
                        <p><span className='bg-orange-500 text-white p-1 rounded-lg'>{item.price}</span></p>
                    </div>
                </div>
            ) )}
        </div>

    </div>
  )
}

export default Food