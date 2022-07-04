import React from 'react'
import 'boxicons';


const obj = [
  {
    name: "Saving",
    color: "#f9c851",
  },
  {
    name: "Investment",
    color: "#FCAB9E",
  },
  {
    name: "Loan",
  },
];

function List() {
  return (
    <div className='flex flex-col py-6 gap-3'>
      <h1 className='py-4 font-bold text-xl'> History</h1>
      {obj.map((item, index) => <Transaction key={index} category={item}></Transaction>)}
    </div>
  )
}

function Transaction({ category}) {
  if(!category) return null
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? "#A45EE5"}` }}
    >
      <button className="px-3">
        <box-icon  size='sm' name="trash" color={category.color ?? "#A45EE5"}></box-icon>
      </button>
      <span className="block w-full">{category.name}</span>
    </div>
  );
}

export default List