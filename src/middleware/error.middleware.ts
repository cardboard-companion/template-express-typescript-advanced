import { NextFunction, Request, Response } from 'express';

import { HttpException } from '../common';

export const errorHandler = (
  error: HttpException,
  _: Request,
  response: Response,
  __: NextFunction
) => {
  const status = error.statusCode || error.status || 500;

  response.status(status).send(error);
};
