import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useRouter } from 'next/router';


export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { pathname } = useRouter();

  const activeLink = "Mui-selected";
  const inactiveLink = "";

  return (
    <Box sx={{ width: '100%'}}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Homepage" href="/" className={pathname === "/" ? activeLink : inactiveLink}/>
        <Tab label="Feed" href="/feed" className={pathname === "/feed" ? activeLink : inactiveLink}/>
        <Tab label="Team Highlights" href="/highlights" />
        <Tab label="My Week" href="/myweek" />
        <Tab label="My Mentions" href="/mentions" />
        <Tab label="My Accomplishments" href="/accomplishments" />
      </Tabs>
    </Box>
  );
}