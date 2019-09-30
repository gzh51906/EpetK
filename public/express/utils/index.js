exports.formatData = function formData({
    code = 1,
    data = [],
    msg = 'success'
} = {}) {


    if (code === 0) {
        msg = 'fail';
    }
    console.log(data);
    return {
        code,
        data,
        msg
    }
}

// const {
//     create,
//     verify
// } = require('./token');

// exports.token = {
//     create,
//     verify
// }