  import express from "express";
 import { Router } from "express";
 import * as folderController from "../controllers/folderController.js";

  
  


const router = Router();


 

router.get("/upload-file", (req, res, next) => {
  res.render("uploadFile", {
    folders: []
  });
});


router.get("/view-folders", folderController.getFolders);
router.get("/view-folders/create", folderController.newFolderGet);


router.get("/view-files", (req, res, next) => {
  res.render("files", {
    folders: []
  });
});
 
export default router;