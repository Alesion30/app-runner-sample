import { PORT } from "@/config/env";
import app from "@/routes";

app.listen(PORT);
console.log(`Server running at ${PORT} > %o`, `http://localhost:${PORT}`);
