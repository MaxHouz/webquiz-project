function generateId(obj) {
    var idArray = [];
    for (key in obj) {
        var exiId = key.match(/[0-9]{1,}/)[0];
        idArray.push(exiId);
    }
    var generateId = idArray.length ? arrayMax(idArray) + 1 : 1;
    return generateId;
}

function arrayMax(arr) {
    return Math.max.apply(null, arr);
}