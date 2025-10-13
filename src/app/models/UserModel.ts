import mongoose, { Schema } from "mongoose";
export interface IUser{
    name: string;
    email: string;
    image?: string;
    createdAt: Date;
};

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
   
    image: {
        type: String, // from googleOAuth
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
} , {timestamps: true})

const UserModel = (mongoose.models.User as mongoose.Model<IUser>) || (mongoose.model<IUser>('User' , userSchema));

export default UserModel;

