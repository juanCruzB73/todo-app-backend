const { Router } = require("express");
const { getBacklogTask, addTaskBacklog } = require("../controllers/backlogController");

const router=Router();

router.get("/",getBacklogTask)
router.post("/",addTaskBacklog)


module.exports=router;