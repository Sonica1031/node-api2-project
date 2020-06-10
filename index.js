const express = require("express")
const server = express();
const postRoutes = require("./data/Routes/postRouter")
const commentRoutes = require("./data/Routes/commentRouter");
server.use(express.json());
server.use('/post', postRoutes);
server.use('/post/:id', commentRoutes);
server.listen(5000, () => console.log('API running on port 5000'));