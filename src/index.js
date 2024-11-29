import 'express-async-errors';
import express from "express";
import schoolRoutes from "./routes/schoolRoutes.js";

const app = express();
app.use(express.json());

app.use('/api/v1', schoolRoutes);

const port = 7000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
