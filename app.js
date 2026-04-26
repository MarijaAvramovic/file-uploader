import express from "express";
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));

const PORT = process.env.PORT || 4401;
app.listen(PORT, (error) => {
 
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}!`);
});
