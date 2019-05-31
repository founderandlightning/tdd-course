const sum = (value1, value2) => {
    return value1 + value2;
};
const trimString = (text) => {
    return text.replace(/\s+/g, ' ').trim();
}

const getSqlQuery = (table, columns = [], where = []) => {
    const selectColumns = columns.length > 0 ? columns.join(', ') : '*';
    const whereConditions = where.reduce((acc, data, index) => {
        const key = Object.keys(data)[0];
        const dynamicCondition = `${Object.keys(data)[0]}=${data[key]} `;
        const clause = index == 0 ? ` where ` : ` and `;
        return acc += clause + dynamicCondition;
    }, '');
    return trimString(`select ${selectColumns} from ${table} ${whereConditions}`);
}
module.exports = {
    getSqlQuery,
    sum,
    trimString
}