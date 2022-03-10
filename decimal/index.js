function getDecimal(value, precision) {
    precision = precision || 0;
    if (isNaN(value) || value === null || value === undefined || Array.isArray(value)) {
        return '';
    }
    if (typeof precision !== 'object' && isNaN(precision) ) {
        return '';
    }
    const decimal = value % 1;
    return decimal === 0 ? Number.prototype.toFixed.call(0, precision).split('.')[1] : decimal.toFixed(precision).split('.')[1]
}

module.exports = getDecimal;