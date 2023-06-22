import { Box, Grid, Stack } from "@mui/material"
import Mention from "./mention"

const MentionPageComponent = ({ mentions }: any) => {
    return(
        <Stack>
            <Grid>
                {mentions?.map((mention:any) =>{
                    return(
                        <Box key={mention.id}>
                            <Mention mention={mention}></Mention>
                        </Box>
                    )
                })}
            </Grid>
        </Stack>
    )
}

export default MentionPageComponent