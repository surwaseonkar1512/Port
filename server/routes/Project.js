const express = require("express")
const router = express.Router()
const { addProject ,getAllProjects } = require("../controllers/Project")


router.post("/addproject", addProject);

router.get("/getAllProjects", getAllProjects)

module.exports = router