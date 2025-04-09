"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";
import Hr from "@/components/Hr";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// Import the JSON data
import ProjectsData from "@/json/data.json";

// Import the hero image
import ProjectAll from "@/public/image/setup.jpg";

// Project Card Component
const ProjectCard = ({ project, index }) => {
    // Determine if this is an even or odd index for layout variations
    const isEven = index % 2 === 0;

    return (
        <div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-20">
            {/* Image gallery section - always on the left for mobile, alternates in desktop */}
            <div className={`flex justify-center items-start flex-col mb-5 ${!isEven && "md:order-2"}`}>
                <div className="images relative w-full aspect-square">
                    {project.images && project.images.length >= 3 ? (
                        <>
                            {/* First image */}
                            <div className="absolute top-28 left-10 h-[40%] aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, x: 100 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    className="w-full h-full shadow-lg"
                                >
                                    <Image
                                        src={project.images[0]}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                                        className="rat"
                                    />
                                </motion.div>
                            </div>

                            {/* Second image */}
                            <div className="absolute top-16 right-28 h-[30%] aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, x: -100 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="w-full h-full shadow-lg"
                                >
                                    <Image
                                        src={project.images[1]}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                                        objectPosition="0% 0%"
                                    />
                                </motion.div>
                            </div>

                            {/* Third image */}
                            <div className="absolute bottom-16 right-20 h-[35%] aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, x: -100 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="w-full h-full shadow-lg"
                                >
                                    <Image
                                        src={project.images[2]}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                                    />
                                </motion.div>
                            </div>
                        </>
                    ) : (
                        // Fallback if not enough images
                        <div className="h-full w-full flex items-center justify-center">
                            <Image
                                src={project.thumbnail || "/image/placeholder.jpg"}
                                alt={project.title}
                                width={400}
                                height={300}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Project details section - always on the right for mobile, alternates in desktop */}
            <motion.div
                className={`flex justify-center items-start flex-col mb-5 md:px-10 ${!isEven && "md:order-1"}`}
                initial={{ opacity: 0, x: isEven ? 200 : -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
            >
                <h2 className="text-2xl font-bold tracking-wider mb-3">
                    {project.title}
                </h2>
                <p className="text-gray-600 text-justify title text-lg">
                    {project.desc[0]}
                </p>
                <div className="mt-3 flex gap-2">
                    <Button variation="primary">
                        <Link href={`/projects/${project.slug}`}>More</Link>
                    </Button>
                    {project.preview && (
                        <Button variation="secondary">
                            <a
                                href={project.preview}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Preview
                            </a>
                        </Button>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default function Page() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Filter projects to only show the ones with show: true
    const filteredProjects = ProjectsData.Projects.filter(project => project.show);

    return (
        <>
            <main className="overflow-hidden">
                <FixedButon href="/#projects">
                    <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
                </FixedButon>

                {/* Hero Section */}
                <div className="relative h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
                    <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
                        <motion.div
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.2 }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw]"
                        >
                            <Image
                                src={ProjectAll}
                                alt="Projects Overview"
                                layout="fill"
                                objectFit="cover"
                                placeholder="blur"
                            />
                        </motion.div>
                    </div>
                    <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none md:backdrop-filter-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
                        <h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
                            My Projects
                        </h1>
                        <Hr />
                        <p className="title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
                            List of my projects that I have done and{" "}
                            <span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
                                {" "}
                                currently working on.
                            </span>
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "circOut" }}
                            onClick={() => {
                                window.scrollTo({
                                    top: 1000,
                                    behavior: "smooth",
                                });
                            }}
                            className="mb-3"
                        >
                            <Button variation="primary">Scroll Down</Button>
                        </motion.div>
                    </div>
                </div>

                {/* Projects Section */}
                <div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
                    <div className="flex justify-center items-center flex-col my-5 self-start">
                        <Hr variant="long"></Hr>
                        <h1 className="text-3xl font-bold mt-3">Highlight</h1>
                    </div>
                </div>

                {/* Dynamically render project cards */}
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.slug} project={project} index={index} />
                ))}
            </main>
        </>
    );
}