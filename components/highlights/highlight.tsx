import { Avatar, Box, Divider, Stack, Typography } from "@mui/material"

type highlight = {
    name: string,
    comment: string,
    date: string,
    avatar: string,
  
  }

const Highlight: any = ({ highlight }: any) => {
    const authorNode = () => {
        return(
            <Stack component="div" spacing={1} className="flex items-center space-x-2">
                <Avatar src={highlight.avatar} alt={highlight.name}/>
                <Stack component="div">
                    <Typography>{highlight.name}</Typography>
                </Stack>
            </Stack>
        )
    }
    const bodyNode = () => {
        return(
            <Typography className="text-justify">{highlight.comment}</Typography>
        )
    }
    return(
        <Box key={highlight._id} component="div" my={3} className="my-2 bg-slate-50 rounded-md">
            <Stack component="div" className="flex flex-col space-y-2" spacing={1}>
                {authorNode()}
            </Stack>
            <Stack component="div" className="flex flex-col space-y-2" spacing={1}>
                {bodyNode()}
            </Stack>
            <Divider light />
        </Box>
    )
}


export default Highlight;