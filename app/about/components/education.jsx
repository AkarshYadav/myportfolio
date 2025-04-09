import Hr from "@/components/Hr";
import { motion } from "framer-motion";

function Title() {
	return (
		<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<motion.h1
					className="text-3xl font-bold mt-3"
					initial={{
						opacity: 0,
						x: -200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.7,

						type: "spring",
					}}>
					Education
				</motion.h1>
			</div>
		</div>
	);
}

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
			<motion.div
				className="flex justify-center items-start flex-col mb-5 "
				initial={{
					opacity: 0,
					x: -200,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				transition={{
					delay: 0.5,

					type: "spring",
				}}>
				<section className="grid gap-8 md:gap-12">
					<div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-gray-700 after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">
						{children}
					</div>
				</section>
			</motion.div>
		</div>
	);
}

export default function Education() {
	return (
		<>
			<Title />
			<Wrapper>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2022 - Present</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							Indian Institute of Information Technology,Vadodara
						</h3>
						<h4 className=" font-light text-md mb-4">
							Gandhinagar | Gurjarat
						</h4>
						<p className="text-justify">
						Bachelor of Technology (B.Tech) in <span className="font-bold"> Information Technology</span>
						</p>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								CGPA: <span className="font-bold">7.39</span> out of 10
							</div>
						</div>
					</div>
				</div>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2020 - 2021</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
						Mahatma Hansraj Modern School

						</h3>
						<h4 className=" font-light text-md mb-4">
							Jhansi | Uttar-Pradesh
						</h4>
						<p className="text-justify">
						CBSE class 	<span className="font-semibold">XII</span>
						</p>

						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Percantage - <span className="font-bold">92 %</span>
							</div>
						
						</div>
					</div>
				</div>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2018 - 2019</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							Jai Academy
						</h3>
						<h4 className=" font-light text-md mb-4">
						Jhansi | Uttar-Pradesh
						</h4>
						<p className="text-justify">
						CBSE class 	<span className="font-semibold">X</span>
						</p>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
							Percantage - <span className="font-bold">92 %</span>
							</div>
							
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
}
