import Image from "next/image";
import carroAndLeon from "@/public/images/_DSC4153.jpg";
import carroPaints from "@/public/images/Carro-painting-kurbits.png";
import sivPortrait from "@/public/images/siv-portrait.jpg";
import nusnasLandscape from "@/public/images/Nusnas-landscape.jpg";

export default function AboutPage() {
	return (
		<section className='about container flex flex-col items-center'>
			<article className='grid grid-cols-1 gap-2 border-rad-theme-2 mt-10 px-10 py-7 w-full'>
				<div className='flex flex-col gap-3 lg:flex-row'>
					<div className='flex-1 w-full'>
						<h2 className='text-center font-bold'>Om mig</h2>
						<p className='text-lg'>
							Jag är en konstnärssjäl ut till fingerspetsarna och har alltid
							haft något hantverk i händerna. Därför passar tatueraryrket mig
							till 100%. Jag älskar att mitt arbete ger mig möjligheten att resa
							och gästjobba. Jag åker med jämna mellanrum till Dalarna och
							gästjobbar på Mora ink. Jag åker också på olika mässor, oftast
							inom Sverige. Jag bor i norra Örebro med min sambo, min hund, mina
							2 katter och ödlan Ulf. Jag gillar också att träna och jag har
							fallit för sporten brasiliansk jiujitsu (BJJ) som jag utövar
							ungefär 3-4 dagar i veckan.
						</p>
					</div>
					<Image
						src={carroAndLeon}
						alt='Tatueringsarbete av Caroline'
						className='portrait-img rounded-3xl mt-4 ml-2'
						height={250}
						width={300}
						priority
						fetchPriority='high'
						sizes='(min-width: 800px) 50vw, 100vw'
						quality={75}
					/>
				</div>
			</article>

			<article className='grid grid-cols-1 gap-4 border-rad-theme-1 mt-10 px-10 py-7 w-full overflow-hidden'>
				<div className='mt-4'>
					<div className='flex flex-col gap-6 lg:flex-row'>
						<Image
							src={carroPaints}
							alt='Tatueringsarbete av Caroline'
							className='portrait-img rounded-3xl mr-4'
							height={350}
							width={350}
							priority
							fetchPriority='high'
							quality={75}
						/>
						<div>
							<h2 className='text-start font-bold mb-3'>Min resa</h2>

							<p className='text-lg'>
								Jag kommer ifrån den lilla dalahästbyn Nusnäs som ligger i
								staden Mora. Innan jag flyttade till Örebro hade jag en egen
								tatueringsstudio i Orsa som hette The Northern Light tattoo.
								Trots att mitt hjärta slår hårt för Dalarna så har jag alltid
								haft ett sug för att se mig omkring i världen. Så jag bestämde
								mig för att jag skulle ut och resa igen och jobba utomlands.
								Livet blir inte alltid som man tänkt, pandemin kom och mina
								resor ställdes in. Då tänkte jag om och jag bestämde mig för att
								flytta till Örebro, jag hade bott där förr, där fanns en nära
								vän och det fanns många tatuerare att bekanta sig med.
							</p>
						</div>
					</div>
				</div>
				<div>
					<p className='text-lg'>
						De 4a första åren i Örebro jobbade jag på en studio som heter
						Everlasting tattoos med ett gäng fantastiska brudar. I mars 2024
						valde jag att flytta till Studio Svart Katt där jag nu jobbar med
						ett nytt fantastiskt gäng. Att börja på Studio Svart Katt var som
						att hitta hem, där är det alltid en varm miljö och alla känner sig
						välkomna.
					</p>
					<p className='text-lg mt-2'>
						{" "}
						Jag har alltid varit en kreativ person, innan jag blev tatuerare
						utbildade jag mig inom textil sömnad, skinn sömnad,
						mönsterkonstruktion och mode design. Efter studier i Italien
						flyttade jag till Norge för att jobba men halkade in i
						tatueringsbranchen då jag på vinst eller förlust frågade efter en
						lärlingsplats på tatueringsstudion Werken tattoo i Oslo. Där fick
						jag in en fot och började som lärling på slutet av år 2015. Sen dess
						har tatuerat, ända fram till idag. Jag hoppas vi ses på Studio Svart
						Katt och tveka inte att kontakta mig oavsett vad du har för fråga.
					</p>
				</div>
				<div className='flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:justify-between'>
					<Image
						src={sivPortrait}
						alt='Tatueringsarbete av Caroline'
						className='portrait-img rounded-3xl object-cover max-w-full h-auto aspect-[5/7]'
						height={250}
						width={350}
						priority
						fetchPriority='high'
						quality={75}
					/>
					<Image
						src={nusnasLandscape}
						alt='Tatueringsarbete av Caroline'
						className='portrait-img rounded-3xl object-cover max-w-full h-auto'
						height={250}
						width={560}
						priority
						fetchPriority='high'
						quality={75}
					/>
				</div>
			</article>
		</section>
	);
}
