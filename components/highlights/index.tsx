import { Box, Grid, Stack } from "@mui/material"
import Highlight from "./highlight"

const HighlightPageComponent = ({ highlights }: any) => {
    return(
        <Stack>
            <Grid>
                {highlights?.map((highlight:any) =>{
                    return(
                        <Box key={highlight._id}>
                            <Highlight highlight={highlight}></Highlight>
                        </Box>
                    )
                })}
            </Grid>
        </Stack>
    )
}

export default HighlightPageComponent