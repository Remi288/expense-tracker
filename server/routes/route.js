const routes = require('express').Router();
const controller = require('../controller/controller');

routes.route('/api/categories').post(controller.create_Categories).get(controller.get_Categories);

routes.route('/api/transactions').post(controller.create_Transaction).get(controller.get_Transactions).delete(controller.del_Transactions);

routes.route('/api/labels').get(controller.get_labels);

module.exports = routes;