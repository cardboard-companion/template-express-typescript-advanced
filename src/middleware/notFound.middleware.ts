import { NextFunction, Request, Response } from 'express';

export const notFoundHandler = (
  _: Request,
  response: Response,
  __: NextFunction
) => {
  const message = 'Resource not found';

  response.status(404).send(message);
};
