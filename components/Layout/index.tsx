import Link from "next/link";
import CenteredTabs from "../tabs/CenteredTabs";
import TopMenu from "../topMenu";
import { Grid } from "@mui/material";
import Trending from "../trending/Trending";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <TopMenu />
      <Grid container sx={{ bgcolor: "gray.100", minHeight: "100vh" }}>
        <Grid item xs={8}>
          <div className="bg-white rounded-lg p-4">
            {children}
          </div>
        </Grid>
        <Grid item xs={4}>
          <Trending/>
        </Grid>
      </Grid>
    </>
  );
}
