import Layout from '@/components/Layout'
import Highlight from '@/components/highlights'

export default function highlights({ allPosts }: Posts) {

    return(
        <>
        <Layout>
        <h1 className='heading-2'>Team Hihghlights</h1>
        <Highlight highlights={allPosts}></Highlight>
        </Layout>
        </>
    )
    
};
//Can't use local API data on build because local data is not available
/* export const getServerSideProps = async () => {
    const response = await fetch('http://localhost:3000/api/highlights');
    const data = await response.json();
    return { props: { data } };
  }; */

/*   import {data} from '../data/highlightsData.js'

export const getStaticProps = async () => {
  return { props: { data } };
}; */


export async function getServerSideProps() {
  let res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allPosts = await res.json();

  return {
    props: { allPosts },
  };
}
