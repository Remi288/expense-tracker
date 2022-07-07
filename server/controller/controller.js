const model = require("../models/model");

// post categories

async function create_Categories(req, res) {
  const Create = model.Categories({
    type: "Savings",
    color: "#FCBE44",
  });

  await Create.save(function (err) {
    if (!err) return res.json(Create);
    return res.status(400).json({ message: `Error creating category ${err}` });
  });
}

async function get_Categories(req, res) {
  const data = await model.Categories.find();

  const filter = await data.map((v) =>
    Object.assign({}, { type: v.type, color: v.color })
  );

  return res.json(filter);
}

async function create_Transaction(req, res) {
  if (!req.body) {
    return res.status(400).json({ message: "Data not provided" });
  }
  let { name, amount, type } = req.body;

  const create = model.Transactions({
    name,
    amount,
    type,
    date: Date.now(),
  });

  await create.save(function (err) {
    if (!err) return res.json(create);
    return res
      .status(400)
      .json({ message: `Error creating transaction ${err}` });
  });
}

async function get_Transactions(req, res) {
  const data = await model.Transactions.find();

  return res.json(data);
}

async function del_Transactions(req, res) {
  if (!req.body) {
    return res.status(400).json({ message: "ID not provided" });
  }

  await model.Transactions.deleteOne(req.body, function (err) {
    if (!err) return res.json({ message: "Transaction deleted" });
  })
    .clone()
    .catch(function (err) {
      res.json({ message: `Error deleting transaction ${err}` });
    });
}

function get_labels(req, res) {
  model.Transactions.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "type",
        foreignField: "type",
        as: "categories_info",
      },
    },
    {
      $unwind: "$categories_info",
    },
  ])
    .then((result) => {
        const labels = result.map((v) =>
            Object.assign({}, { _id: v._id, name: v.name, type: v.type, amount: v.amount, color: v.categories_info.color })
        );
        return res.json(labels);
    })
    .catch((err) => {
      res.status(400).json({ message: `Error getting labels ${err}` });
    });
}

module.exports = {
  create_Categories,
  get_Categories,
  create_Transaction,
  get_Transactions,
  del_Transactions,
  get_labels,
};
