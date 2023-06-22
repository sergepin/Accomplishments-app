// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type mention = {
  id: number,
  name: string,
  comment: string,
  date: string,
  avatar: string,

}

type Data = {
  mentions: Array<mention>
}

let mentions: Array<Object> = [
{id:5,name: 'John Doe', comment:'Great Job Rafael', date:'2022-05-03',avatar: '/public/HAHLogo.jpg'},
{id:1,name: 'Jane Doe', comment:'Great Job Uvash', date:'2022-05-03', avatar: '/public/HAHLogo.jpg'},
{id:2,name: 'John Doe', comment:'Great Job Trish', date:'2022-05-03', avatar: '/public/HAHLogo.jpg'},
{id:3,name: 'John Doe', comment:'Great Job Amee', date:'2022-05-03', avatar: '/public/HAHLogo.jpg'},
{id:4,name: 'John Doe', comment:'Great Job Janet', date:'2022-05-03', avatar: '/public/HAHLogo.jpg'}]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(JSON.parse(JSON.stringify(mentions)))
}
