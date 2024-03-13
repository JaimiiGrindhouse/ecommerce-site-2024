import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc    Auth user & token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc    Register user & token
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc    Logout User / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc    Get users
// @route   GET /api/users
// @access  Private/admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// @desc    Delete users
// @route   DELETE /api/users/:id
// @access  Private/admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

// @desc  Update user
// @route   PUT /api/users/:id
// @access  Private/admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUser,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
