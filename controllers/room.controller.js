const Model = require("../db/models").room;

// Own variables
const nameModel = "Room";


//  Endpoint: findAll
const findAll = async (req, res) => {
  const result = await Model.findAll();
  if (!result)
    return res
      .status(404)
      .send({ success: false, msg: `No ${nameModel} found` });
  res
    .status(200)
    .send({ success: true, result, msg: `All ${nameModel}s were found` });
};

//Endpoint: findOne
const findOne = async (req, res) => {
  const { id } = req.params;
  const result = await Model.findAll({
    where: {
      id,
    },
  });
  if (!result)
    return res
    .status(404)
    .send({ success: false, msg: `${nameModel} not found` });
    res
    .status(200)
    .send({ success: true, result, msg: `${nameModel} found with id ${id}` });
};

//  Endpoint: create
const create = async (req, res) => {
  try {
    const result = await Model.create({ ...req.body });
    res.status(201).send({
      success: true,
      result,
      msg: `${nameModel} was successfully created`,
    });
  } catch (error) {
    res
      .status(400)
      .send({ success: false, msg: `${nameModel} was not created` }, error);
  }
};

// Endpoint: update
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Model.update({ ...req.body }, { where: { id } });
    res.status(200).send({
      success: true,
      result,
      msg: `${nameModel} was successfully updated`,
    });
  } catch (error) {
    res
      .status(404)
      .send({ success: false, msg: `${nameModel} was not updated` });
  }
};

// Endpoint: delete
const deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Model.destroy({ where: { id } });
    res.status(200).send({
      success: true,
      result,
      msg: `${nameModel} was successfully deleted`,
    });
  } catch (error) {
    res.status(404).send({ success: false, msg: `${nameModel} was not deleted` });
  }
};

module.exports = {
  findAll,
  findOne,
  create,
  update,
  deleteOne,
};
