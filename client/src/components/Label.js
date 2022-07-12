import React from 'react'
import { useGetCategoriesQuery, useGetLabelsQuery } from '../store/expenseApi';
import { getLabels } from '../utility/helper';


function Label() {
  const { data, isError, isFetching, isSuccess } = useGetLabelsQuery();
  let Transaction;

  if (isFetching) {
    Transaction = <div>Loading...</div>;
  } else if(isSuccess){
    console.log(getLabels(data, 'type'));
    Transaction = getLabels(data, 'type').map((item, index) => (
      <LabelComponent key={index} data={item}></LabelComponent>
    ));
  } else if(isError){
    Transaction = <div>Error</div>
  }

  console.log(isFetching)
  return (
    <>
        {Transaction}
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
      <h3 className='font-bold'>{Math.round(data.percent)??0}%</h3>
    </div>
  );
}

export default Label