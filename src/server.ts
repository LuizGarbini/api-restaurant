import express from "express";

import { errorHandling } from "./middleware/error-handling";
import { routes } from "./routes";

const PORT = 3333;
const app = express();

app.use(express.json());
app.use(routes);

app.use(errorHandling);

app.listen(PORT, () => console.log(`Server ir running on port ${PORT}`));
