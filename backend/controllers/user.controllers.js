import ApiError from "../apiErrors.js";
import { asyncHandler } from "../asyncHandler.js"
import {
    User
} from "../models/user.models.js";
import {ApiResponse} from '../apiResponse.js'
const registerUser = asyncHandler(async (req, res) => {
    const { username, fullName, email, password } = req.body;

    if ([username, fullName, email, password].some((field) => field?.trim() === ""))
        throw new ApiError(400, "All fields are required");
    const ExistingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (ExistingUser) throw new ApiError(409, "User already exists");
    const user = await User.create({
        username: username.toLowerCase(), email, fullName, password
    })
    // const createdUser = await User.findById(user._id).select(
    //     "-password -refreshToken",
    // );
    // if (!createdUser) throw new ApiError(500, "User not created properly");
    return res
        .status(201)
        .json(new ApiResponse(200, createdUser, "User created successfully"));

})
export { registerUser };