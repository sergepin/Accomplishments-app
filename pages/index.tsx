import Image from 'next/image'
import { Inter } from 'next/font/google'
import CenteredTabs from '@/components/tabs/CenteredTabs'
import handler from './api/hello'
import BasicButton from '@/components/buttons/BasicButton'
import SimpleCheckBox from '@/components/checkboxes/SimpleCheckBox'
import DeletableChip from '@/components/chips/DeletableChip'
import UserAvatar from '@/components/buttons/UserAvatar'
import EditableTable from '@/components/tables/EditableTable'
import Link from 'next/link'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })




export default function Home({ data }: Props) {
  return (
    <>
    <Layout>
      <main>
        <h1>Hello {data.name}! </h1>
        <h2>Welcome to the Homies App!</h2>
      </main>
      </Layout>
    </>
  );
}

//Can't use local data on build because local data is not available
/* export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/hello');
  const data = await response.json();
  return { props: { data } };
}; */


import {data} from '../data/helloData.js'

export const getStaticProps = async () => {
  return { props: { data } };
};