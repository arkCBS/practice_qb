const {QBOFactory} = require('qbo');
const QBO = new QBOFactory();
require('dotenv').config();

QBO.application_url = process.env.QBO_SCHOOLS_URL;
QBO.apptoken = process.env.QBO_APP_TOKEN;
QBO.usertoken = process.env.QBO_USER_TOKEN;

module.exports = QBO; 