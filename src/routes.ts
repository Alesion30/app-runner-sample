import app from "@/plugin/express";
import { Request, Response } from "@/typings/express";

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, App Runner!");
});

export default app;
