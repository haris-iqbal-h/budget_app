import React from 'react'
import trash from '../assets/images/trash.png'

const obj=[
    {
        name:"Savings",
        color:"rgb(255, 99, 132)",
    },
    {
        name:"Investment",
        color:"rgb(54, 162, 235)",
    },
    {
        name:"Expense",
        color:"rgb(255, 205, 86)",
    }
]

const List = () => {
    

    return (
    <>
        <div className="flex flex-col py-5 gap-3">
            <h1 className='py-4 font-bold text-xl'>History</h1>
            {obj.map((category,i) => {
                return (
                    <Transaction key={i} category={category}/>
                )
            })}
        </div>
    </>
    )
}
export default List

function Transaction({category}) {
    if(!category) return null;
    return (
        <div className="item flex bg-gray-50 py-50 py-2 rounded-r" style={{borderRight:`8px solid ${category.color?? '#e5e5e5'}`}}>
            <img className='ml-5 mr-24' src={trash} alt="" width="25px"/>
            <i className="bi bi-trash"></i>
            <div className="flex justify-center">
                <span className='block-w-full mx-5'>{category.name?? ''}</span>
            </div>
            
        </div>
    )
}