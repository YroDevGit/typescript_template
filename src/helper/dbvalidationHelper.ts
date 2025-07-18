import { ValidationError } from "sequelize"

export const duplicateError = (err: any): any => {
    if (
        err instanceof ValidationError &&
        err.errors &&
        err.errors[0]?.type === "unique violation"
    ) {
        return err.errors[0];
    } else { return false; }
}