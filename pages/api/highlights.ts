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

let highlights: Array<Object> = [
{id:1,name: 'Trish', comment:"Shoutout to @Mario Gomez @Jabzeel Marmol @Divya @Rafael Quiroga @Sergio Pinzon @Emilio De Leon @Parth and @Uvash Seeraj for ensuring the St. Regis Vilebrequin collection launched on time today since there's a hard launch. Mario led the charge and did a great job rallying the Team and keeping everyone focused. Thank you ALL so much. Go Team! Happy Friday!", date:'2022-05-03',avatar: '/public/HAHLogo.jpg'},
{id:2,name: 'Mario Gomez', comment:'Hey everyone!! Big shout out and thanks to  @Trish you make our lives so easy, everything moves around smoothly and you are always willing to help with nice attitude!!', date:'2022-05-03', avatar: '/public/HAHLogo.jpg'},]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(JSON.parse(JSON.stringify(highlights)))
}
