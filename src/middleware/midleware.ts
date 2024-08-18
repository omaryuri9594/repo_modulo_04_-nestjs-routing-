//*Los middlewares son injectable por lo tanto devemos aprender a ejecutarlo.

import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
@Injectable()
export class MiMidleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      `Esta ejecutando un metodo ${req.method} en la ruta ${req.url}`,
    );
    next();
  }
}
export function LoggerGlobal(req: Request, res: Response, next: NextFunction) {
  console.log(
    `Esta ejecutando  midlewware global en en un metodo ${req.method} en la ruta ${req.url}`,
  );
  next();
}
