  import express from "express";
 import { Router } from "express";
  
  


const router = Router();


 

router.get("/upload-file", (req, res, next) => {
  res.render("uploadFile", {
    folders: []
  });
});
router.get("/view-folders", (req, res, next) => {
  res.render("folders", {
    folders: []
  });
});
router.get("/view-files", (req, res, next) => {
  res.render("files", {
    folders: []
  });
});
 
export default router;