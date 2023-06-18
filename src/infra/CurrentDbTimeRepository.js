class CurrentDbTimeRepository {

    constructor(knex) {
        this.knex = knex;
    }

    async getDbNow() {
        const result = await this.knex.raw('SELECT CURRENT_TIMESTAMP AS now');
        const rows = result.rows || result;
        return rows[0];
    }
}

module.exports = CurrentDbTimeRepository;
