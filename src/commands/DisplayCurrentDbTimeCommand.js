const logger = require('winston');
const moment = require('moment');

class DisplayCurrentDbTimeCommand {

    constructor(currentDbTimeRepository) {
        this.currentDbTimeRepository = currentDbTimeRepository;
    }

    getName() {
        return 'display-current-db-time';
    }

    getOptions() {
        return [{ name: 'timeFormat', type: String }];
    }

    async execute(options) {

        logger.debug(
            `Executing ${this.getName()} with the following options: ${JSON.stringify(options)}`,
        );

        const { timeFormat } = options;
        const currentTime = await this.currentDbTimeRepository.getDbNow();
        logger.info(moment(currentTime).format(timeFormat || 'YYYY-MM-DD HH:mm:ss'));
    }
}

module.exports = DisplayCurrentDbTimeCommand;
