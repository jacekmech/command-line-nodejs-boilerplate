require('dotenv').config();

const executeCommand = require('command-runner');

const createDefaultLogger = require('./createDefaultLogger');
const createContextInfra = require('./createContextInfra');
const createCommands = require('./createCommands');

const logger = createDefaultLogger();

['unhandledRejection', 'uncaughtException'].forEach((event) => {
    process.on(event, (error) => {
        logger.error('Uncaught exception');
        logger.error(error);
        if (error.stack) {
            logger.error(error.stack);
        }
        process.exit(1);
    });
});

const start = async () => {
    logger.info(`Command launched with the following args: ${process.argv.join(', ')}`);
    const infraCtx = await createContextInfra();
    const commands = await createCommands(infraCtx);
    const executed = await executeCommand(commands, process.argv);
    if (executed) {
        logger.info('Command finished successfully');
        process.exit(0);
    } else {
        logger.error('Command did not execute. See the errors above');
        process.exit(1);
    }
};
start();
