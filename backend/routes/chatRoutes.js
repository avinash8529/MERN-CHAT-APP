const express = require("express");
const {
    accessChat,
    fetchChats,
    createGroupChat,
    renameGroup,
    removeFromGroup,
    addToGroup
} = require("../controller/chatController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();


router.route("/").post(protect, accessChat);
router.route("/group").post(protect, createGroupChat);
router.route("/").get(protect, fetchChats);
router.route("/rename").put(protect, renameGroup);
router.route("/groupadd").put(protect, addToGroup);
router.route("/groupremove").put(protect, removeFromGroup);

module.exports = router;