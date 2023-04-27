import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstChart() {
  return (
    <Layout>
			<Head>
        <title>First Chart by Ash</title>
      </Head>
			<h1>First Chart</h1>
				<Image
					src="/images/profile.jpg" // Route of the image file
						height={400} // Desired size with correct aspect ratio
						width={400} // Desired size with correct aspect ratio
						alt="Your Name"
				/>
			<h2>
				<Link href="/">Back to home</Link>
			</h2>
    </Layout>
  );
}