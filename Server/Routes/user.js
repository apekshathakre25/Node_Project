const express = require("express");
const router = express.Router();
const { getUSers, createUsers } = require("../Controller/user");

router.route("/")
    .get(getUSers)
    .post(createUsers);

module.exports = router;
