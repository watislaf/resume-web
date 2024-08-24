import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCheck } from 'react-icons/fa';

import {
    RedBadge, YellowBadge, GreenBadge, BlueBadge, IndigoBadge, PurpleBadge, PinkBadge
} from './Badges';

interface ContactItemProps {
    icon: React.ReactElement;
    text: string;
    href?: string;
    delay: number;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, href, delay }) => {
    const content = (
        <>
            {React.cloneElement(icon, { className: "h-5 w-5 mr-2 text-blue-300" })}
            <span>{text}</span>
        </>
    );

    return (
        <div className={`flex items-center animate-fadeInRight`} style={{ animationDelay: `${delay}s` }}>
            {href ? (
                <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center  transition-colors">
                    {content}
                </Link>
            ) : (
                content
            )}
        </div>
    );
}


const badges = [
    RedBadge,
    YellowBadge,
    GreenBadge,
    BlueBadge,
    IndigoBadge,
    PurpleBadge,
    PinkBadge,
];


const AboutMe: React.FC = () => {
    return (
        <div className="mb-6 animate-fadeInRight" style={{ animationDelay: `${1.4}s` }}   >
            <h2 className="text-xl font-semibold mb-2 inline-block transition-all duration-300 ease-in-out   cursor-default ">About Me 🌟</h2>
            <p className="text-blue-50">I’m a team player who loves getting things done. I’m always looking to improve myself and the team. I believe programmers sometimes focus too much on code and forget about the cost and profit, which can lead to overengineering.</p>
            <p className="text-blue-50">I aim to find a balanced approach, making the code better and the product more profitable.</p>
        </div>
    );
}


const categorizedSkills = {
    Backend: ["Backend: NextJs (TRPC) | Spring | NestJS | Node.js | Django (rarely)"],
    Frontend: ["Frontend: React | React Native | Tailwind (ShadCN) "],
    DevOps: ["DevOps: AWS | Terraform | Firebase | Vercel (Coolify)"],
    Databases: ["Databases: MongoDB | PSQL (Drizzle ORM)"],
};


const Experience: React.FC = () => {
    return (
        <div className="animate-fadeInRight" style={{ animationDelay: `1.8s` }}>

            <h2 className="text-xl font-semibold mb-2 inline-block transition-all duration-300 ease-in-out cursor-default ">Experience</h2>
            <p className="pb-4">I&apos;ve been a Full-Stack Developer for 3 years, working on a variety of projects from large
                products to startups.</p>

            <div className="flex flex-row gap-2 flex-wrap mb-2">
            {Object.entries(categorizedSkills).map(([category, skills], index) =>  skills.map((skill) => {
                            const BadgeComponent = badges[index];
                            return <BadgeComponent key={index} skill={skill}/>;
                        }
                ))}
            </div>


        </div>
    );
}

const Profile: React.FC = () => {
    return (
        <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6 rounded-lg animate-slideInRight">
            <div className="text-center flex mb-6  flex-wrap gap-5 animate-fadeInRight" style={{ animationDelay: `0.3s` }} >
                <div className="content-center gap-4 flex-1 flex-col flex">
                    <div>
                        <h1 className="text-2xl font-bold transition-transform duration-300 ease-in-out hover:scale-110">Vladislav
                            Kozulin</h1>

                        <Image
                            src="/me.jpeg"
                            alt="Vladislav Kozulin"
                            width={200}
                            height={200}
                            className="rounded-full  my-2 mx-auto border-4 border-white object-cover "
                        />
                        <p className="text-blue-200"> Kraków, Poland. 22 yo</p>
                        <p className="text-blue-200">Full-Stack Developer</p>
                    </div>

                    <div className='self-center gap-5  flex-wrap justify-center flex'>
                    <ContactItem icon={<FaEnvelope/>} text="watislaf@gmail.com" delay={1.2}/>
                    <ContactItem
                        icon={<FaLinkedin/>}
                        text="LinkedIn"
                        href="https://www.linkedin.com/in/watislaf"
                        delay={1.3}
                    />
                    <ContactItem
                        icon={<FaGithub/>}
                        text="GitHub"
                        href="https://github.com/watislaf"
                        delay={1.4}
                    />
                    </div>
                </div>
            </div>
            <AboutMe/>
            <Experience/>
        </section>
    );
}

export default Profile;
