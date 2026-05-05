import { prisma } from "../lib/prisma.js"; 

export async function uploadFile(req, res) {
  const folders = await prisma.folder.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  res.render("uploadFile", {
    folders
  });

};


export async function uploadFilePost(req, res) {
  

  res.render("files", {
    
  });

};