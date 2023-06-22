import Layout from '@/components/Layout';
import Link from 'next/link';

export default function feed() {
    return (
        <>
        <Layout>
        <h1>The Homies Feed!</h1>
        <Link href="/"> Homepage Link </Link>
        </Layout>
        </>
    )
};
