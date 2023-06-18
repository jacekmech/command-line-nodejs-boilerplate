const createDefaultLogger = require('../src/createDefaultLogger');
const createDbConnSpec = require('../src/createDbConnSpec');
const createDbSession = require('../src/libs/createDbSession');

const logger = createDefaultLogger();

['unhandledRejection', 'uncaughtException'].forEach((event) => {
    process.on(event, (error) => {
        logger.error('Uncaught exception');
        logger.error(error);
        if (error.stack) {
            logger.error(error.stack);
        }
    });
});

const beforeAction = async () => {
    const dbConnSpec = createDbConnSpec();
    try {
        const dbSession = await createDbSession(dbConnSpec);
        return dbSession;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const afterAction = async (dbSession) => {
    await dbSession.stop();
};

module.exports = { beforeAction, afterAction };
