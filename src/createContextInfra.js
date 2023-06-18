const createDbConnSpec = require('./createDbConnSpec');

const createDbSession = require('./libs/createDbSession');
const createDefaultContext = require('./infra/createDefaultContext');

const createContextInfra = async () => {

    const dbConnSpec = createDbConnSpec();
    const dbSession = await createDbSession(dbConnSpec);
    const infraContext = createDefaultContext(dbSession);
    return { dbSession, ...infraContext };
};

module.exports = createContextInfra;
