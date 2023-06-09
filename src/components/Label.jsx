import React from 'react'

const obj=[
    {
        type:'Savings',
        color:'rgb(255, 99, 132)',
        percent:45
    },
    {
        type:'Investment',
        color:'rgb(54, 162, 235)',
        percent:20
    },
    {
        type:'Expense',
        color:'rgb(255, 205, 86)',
        percent:10
    }
]

const Label = () => {
  return (
    <>
        {obj.map((data,i)=>(
            <LabelComponent key={i} data={data}></LabelComponent>
        ))}
    </>
  )
}

export default Label

function LabelComponent({data}) {
    if(!data) return <></>;

    return(
        <>
            <div className="labels flex justify-between">
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded py-3" style={{background:data.color?? '#f9c74f'}}></div>
                    <h3 className='text-md'>{data.type?? ''}</h3>
                </div>
                <h3 className='font-bold'>{data.percent?? ''}%</h3>
            </div>
        </>
    )
    
}