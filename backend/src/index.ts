import app from "./server";
import { PORT } from "./config/process";

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
