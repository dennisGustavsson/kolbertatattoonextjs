import React from "react";

const Care = () => (
	<section id='care' className='py-lg-5 px-lg-3 mt-5 care container'>
		<div className='container'>
			<h2 className='mb-3 care-title'>Skötselråd</h2>
			<div className='care-box border-rad-theme-1'>
				<ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
					<li className='mb-2'>
						Tvätta tatueringen försiktigt med ljummet vatten och mild tvål.
					</li>
					<li className='mb-2'>
						Använd en oparfymerad fuktkräm rekommenderad av din tatuerare.
					</li>
					<li className='mb-2'>
						Undvik direkt solljus och bad under läkningsperioden.
					</li>
					<li className='mb-2'>
						Klappa torrt med en ren handduk – gnugga inte.
					</li>
				</ul>
			</div>
		</div>
	</section>
);

export default Care;
