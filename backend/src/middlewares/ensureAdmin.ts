import { NextFunction, Request, Response } from "express";
import database from "../database";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const {userId} = request;

  const admin = await database
  .clone()
  .select()
  .from("Administrador")
  .where({Usuario_idUsuario: userId})

  if (admin.length !== 0)
    return next()

  return response.status(401).end();
}