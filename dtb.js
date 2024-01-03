const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'telega_bot_Bersat',
    'root',
    'root',
    {
        host: 'master.6ebf1bba-0171-4034-9459-01b8cdee0e00.c.dbaas.selcloud.ru',
        port: '5432',
        dialect: 'postgres'
    }
)