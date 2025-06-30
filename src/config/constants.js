const constants = {};

constants.error_code =   process.env.ERROR_CODE || 500;
constants.success_code =   process.env.SUCCESS_CODE || 500;

module.exports = constants;