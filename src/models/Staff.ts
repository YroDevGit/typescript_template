import DataTypes from "sequelize";
import sequelize from "../config/sequelize";

const Staff = sequelize.define("Staff",{
    fullname: DataTypes.STRING,
    contact: DataTypes.STRING,
    address: DataTypes.STRING,
},{
    tableName: "staff",
    timestamps:false
});


export default Staff;