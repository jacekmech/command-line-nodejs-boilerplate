const logger = require('winston');

const createDefaultCommands = require('./commands/createDefaultCommands');

const createCommands = async (infraCtx) => {
    const commands = createDefaultCommands(infraCtx);
    logger.debug('Command objects created');
    return commands;
};

module.exports = createCommands;
