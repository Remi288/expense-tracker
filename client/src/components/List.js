import React from 'react'
import 'boxicons';
import { useDeleteTransactionMutation, useGetLabelsQuery } from "../store/expenseApi";



function List() {
  const { data, isError, isFetching, isSuccess } = useGetLabelsQuery();
  let Transactions;
  const [deleteTransaction] = useDeleteTransactionMutation();

  
  const handlerClick = (e) => {
    const id = e.target.dataset.id;
    if(!id) return 0;
    deleteTransaction({_id: id});
  }

  if (isFetching) {
  Transactions = <div>Loading...</div>;
  } else if (isSuccess) {
  Transactions = data.map((item, index) => (
    <Transaction key={index} category={item} handler={handlerClick}></Transaction>
  ));
  } else if (isError) {
  Transactions = <div>Error</div>;
  }

  
  return (
    <div className='flex flex-col py-6 gap-3'>
      <h1 className='py-4 font-bold text-xl'> History</h1>
      {Transactions}
    </div>
  )
}

function Transaction({ category, handler }) {
  if(!category) return null
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? "#A45EE5"}` }}
    >
      <button className="px-3" onClick={handler}>
        <box-icon  data-id ={category._id} size='sm' name="trash" color={category.color ?? "#A45EE5"}></box-icon>
      </button>
      <span className="block w-full">{category.name}</span>
    </div>
  );
}

export default List