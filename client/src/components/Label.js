import React from 'react'

const obj = [
  {
    type: "Saving",
    value: 45,
    color: "#f9c851",
  },
  {
    type: "Investment",
    value: 55,
    color: "#f9c851",
  },
  {
    type: "Loan",
    value: 25,
    color: "#f9c851",
  },
];

function Label() {
  return (
    <>
        {obj.map((item, index) => <LabelComponent key={index} data={item}></LabelComponent>)}
    </>
  )
}

function LabelComponent({ data }) {
  if (!data) return <></>;
  return (
    <div className="label flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ background: data.color?? 'orange' }}
        ></div>
        <h3 className="text-md">{data.type}</h3>
      </div>
      <h3 className='font-bold'>{data.value??0}%</h3>
    </div>
  );
}

export default Label