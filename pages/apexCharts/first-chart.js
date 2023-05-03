import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';
import dynamic from 'next/dynamic';

const CandleStick = dynamic(() =>
	import("../../components/ApexCharts/CandleStick")
);

const Line = dynamic(() =>
	import("../../components/ApexCharts/Line")
);




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
			
			<div className="container mt-5"> //Insertion des charts
				<div className="row">
					<div className="col-md-12 text-center">
          <h1>Apex Chart</h1>
          <hr />
					</div>
					<div className="col-md-9">
          <CandleStick />
          <hr />
          <Line />
					</div>
				</div>
			</div>
			
    </Layout>
	);
}