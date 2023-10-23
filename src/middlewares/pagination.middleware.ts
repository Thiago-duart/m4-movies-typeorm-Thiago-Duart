import { NextFunction, Request, Response } from "express";
import { PaginationType } from "../inteface/pagination";

export const pagination = (req: Request, res: Response, next: NextFunction) => {
  const queryPage: number = Number(req.query.page);
  const queryPerPage: number = Number(req.query.perPage);

  const page: number = queryPage && queryPage > 0 ? queryPage : 1;
  const perPage: number =
    queryPerPage && queryPerPage <= 5 && queryPerPage > 0 ? queryPerPage : 5;

  const baseUrl: string = "http://localhost:3000/movies";
  const prevPage: string = `${baseUrl}?page=${page - 1}&perPage=${perPage}`;
  const nextPage: string = `${baseUrl}?page=${page + 1}&perPage=${perPage}`;
  const queryOrder = req.params.order;
  const querySort = req.params.sort;

  const orderOpts: Array<string> = ["asc", "desc"];
  const sortOpts: Array<string> = ["price", "duration", "id"];

  let order: string = "";
  let sort: string = "";
  if (!(querySort && sortOpts.includes(querySort))) {
    sort = "id";
  } else {
    sort = querySort;
  }
  if (!(queryOrder && orderOpts.includes(queryOrder))) {
    order = "asc";
  } else {
    order = queryOrder;
  }
  const pagination: PaginationType = {
    page: perPage * (page - 1),
    perPage: perPage,
    order: order,
    sort: sort,
    prevPage: prevPage,
    nextPage: nextPage,
  };
  res.locals = { ...res.locals, pagination };
  return next();
};
