/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    }

    var result = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && Boolean(obj[key])) {
            result[key] = compactObject(obj[key]);
        }
    }

    return result;
};
