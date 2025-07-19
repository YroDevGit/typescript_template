export const code = {
    success : parseInt(process.env.SUCCESS_CODE||"200"),
    error : parseInt(process.env.ERROR_CODE || "500"),
    failed: parseInt(process.env.VALIDATION_FAILD || "250"),
    notfound: parseInt(process.env.NOT_FOUND_CODE || "404"),
    valfailed: parseInt(process.env.VALIDATION_FAILED || "250"),
    dupfailed: parseInt(process.env.DUPLICATE_ERROR || "11")
}