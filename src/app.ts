import Express, { Application, Request, Response } from "express";
import rangeRandom from "./helpers/rangeRandom";
import response from "./helpers/response";

const app: Application = Express();

app.get("/", (req: Request, res: Response) => {
  res.json(response(200, "OK"));
});

app.get("/ping", (req: Request, res: Response) => {
  res.json(response(200, 'pong!'))
});

app.get('/dice', (req: Request, res: Response) => {
  res.json(response(200, 'pong!', rangeRandom(1, 6)));
});

app.get('/cards', (req: Request, res: Response) => {
  res.json(response(200, 'pong!', rangeRandom(1, 52)));
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server listening at http://localhost:3000')
});
