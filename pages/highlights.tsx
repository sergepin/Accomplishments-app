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

const apiUrl = process.env.NODE_ENV === 'production' ?  process.env.NEXT_PUBLIC_API_URL_PROD : process.env.NEXT_PUBLIC_API_URL_LOCAL;
const apicall = apiUrl+'/api/posts'
export async function getServerSideProps() {
  let res = await fetch(`${apicall}`, {
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
