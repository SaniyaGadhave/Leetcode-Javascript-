/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const [pv1, pv2] = await Promise.all([promise1, promise2]);
    return pv1 + pv2;
};
