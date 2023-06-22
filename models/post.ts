import { ObjectId } from "mongodb";

export default class Post {
    constructor(public name: string, public comment: string, public createdAt: Date  ,public id?: ObjectId, public date?: string, public avatar?: string) {}
  }