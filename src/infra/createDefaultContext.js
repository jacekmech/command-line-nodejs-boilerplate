const CurrentDbTimeRepository = require('./CurrentDbTimeRepository');

const createRepositories = (dbSession) => {

    const { db } = dbSession;

    return { currentDbTimeRepository: new CurrentDbTimeRepository(db) };
};

module.exports = createRepositories;
