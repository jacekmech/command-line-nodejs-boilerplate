const DisplayCurrentDbTimeCommand = require('../../src/commands/DisplayCurrentDbTimeCommand');
const CurrentDbTimeRepository = require('../../src/infra/CurrentDbTimeRepository');

const {
    beforeAction,
    afterAction,
} = require('../setup');

let dbSession;

beforeAll(async () => {
    dbSession = await beforeAction();
});

afterAll(async () => {
    await afterAction(dbSession);
});

test('Display current db time command', async () => {

    const { db } = dbSession;
    const currentDbTimeRepository = new CurrentDbTimeRepository(db);
    const command = new DisplayCurrentDbTimeCommand(currentDbTimeRepository);
    await command.execute({});
});
