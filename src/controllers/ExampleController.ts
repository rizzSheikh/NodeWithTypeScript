import {Request, Response} from "express";
import {success} from "../utils/base_response";

const serverConnectionCheck = (req: Request, res: Response) => {
    return res.status(200).json(success('Welcome to Node'));
}

export default {
    serverConnectionCheck
}
