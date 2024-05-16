const {QBOFactory} = require('qbo');
const QBO = new QBOFactory();

//region SHOULD NOT NORMALLY BE MODIFIED

// process.env variables will be defined based on webpack/deployment settings

QBO.apptoken = process.env.QB_APP_TOKEN;

if (!process.env.QB_WEBPACK || process.env.QB_WEBPACK_MODE === 'development') {
    QBO.application_url = process.env.QB_APP_URL;
    QBO.usertoken = process.env.QB_USER_TOKEN;

    if (process.env.QB_WEBPACK_MODE === 'development') {
        QBO.proxy_url = "/proxy_qb_api";
    }
}

//endregion SHOULD NOT NORMALLY BE MODIFIED

module.exports = QBO;