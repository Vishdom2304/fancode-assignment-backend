const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async params => {
    const statement = `SELECT * FROM matches m WHERE m.tourId = (SELECT t.id FROM tours t WHERE t.name = ?) limit ? offset ?`;
    const parameters = [ params.name, parseInt(params.page_size), parseInt(params.page_number) * parseInt(params.page_size) ];
    return await mysql.query(statement, parameters);
}

const getSportId = async tourId => {
    const statement = 'select sportId from tours where tours.id = ?;';
    const parameters = [tourId];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName,
    getSportId: getSportId
}