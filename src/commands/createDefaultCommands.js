const DisplayCurrentDbTimeCommand = require('./DisplayCurrentDbTimeCommand');

const createCommands = ({ currentDbTimeRepository }) => {
    return [new DisplayCurrentDbTimeCommand(currentDbTimeRepository)];
};

module.exports = createCommands;
