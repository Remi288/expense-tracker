import React from "react";
import { useForm } from "react-hook-form";
import List from "./List";
import { useAddTransactionMutation } from "../store/expenseApi";

function Form() {
  const { register, handleSubmit, resetField } = useForm();
  const [addTransaction] = useAddTransactionMutation();

  const onSubmit = async (data) => {
    if (!data) return {};
    await addTransaction(data);
    resetField("name");
    resetField("amount");
  };
  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              placeholder="Salary, Expense, Bills, House-Rent"
              {...register("name")}
              className="form-input"
            />
          </div>
          <select name="" id="" {...register("type")} className="form-input">
            <option value="investment" defaultValue>
              Investment
            </option>
            <option value="expenses">Expenses</option>
            <option value="savings" defaultValue>
              Saving
            </option>
          </select>
          <div className="input-group">
            <input
              type="text"
              placeholder="Amount"
              {...register("amount")}
              className="form-input"
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-slate-500 w-full">
              Make Transaction
            </button>
          </div>
        </div>
      </form>
      <List></List>
    </div>
  );
}

export default Form;
