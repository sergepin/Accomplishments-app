import { Avatar, Box, Stack, Typography } from "@mui/material"

type mention = {
    id: number,
    name: string,
    comment: string,
    date: string,
    avatar: string,
  
  }

  

const Mention: any = ({ mention }: any) => {
    const authorNode = () => {
        return(
            <Stack>
                <Avatar src={mention.avatar} alt="HaH Homie"/>
            <Stack>
                <Typography>{mention.name}</Typography>
            </Stack>
            </Stack>
        )
    }
    const bodyNode = () => {
        return(
            <Typography>{mention.comment}</Typography>
        )
    }
    return(
        <Box>
            <Stack>
                {authorNode()}
                {bodyNode()}
            </Stack>
        </Box>
    )
}


export default Mention;