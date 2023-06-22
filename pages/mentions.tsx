import Layout from '@/components/Layout'
import Mention from '@/components/mention'
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack'



export default function mentions({ data }: Props) {
    return(
        <>
        <Layout>
        <h1 className='heading-3'>My Mentions</h1>
        <Mention mentions={data}></Mention>
        </Layout>
        </>
    )
};
//Can't use local data on build because local data is not available
/* export const getServerSideProps = async () => {
    const response = await fetch('http://localhost:3000/api/mentions');
    const data = await response.json();
    return { props: { data } };
  }; */

  import {data} from '../data/mentionsData';

export const getStaticProps = async () => {
  return { props: { data } };
};