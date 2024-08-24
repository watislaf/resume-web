import React from 'react';
import Image from 'next/image';
import Link from "next/link";

interface ProjectItemProps {
    title: string;
    link?: string;
    children: React.ReactNode;
}

const ProjectItem: React.FC<ProjectItemProps> = ({  title, children, link }) => {
    return (
        <div className="flex flex-col h-full group">

            <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{title} {link && (
                    <a
                        href={link}
                        className="text-blue-600 underline mt-2 inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        [Github]
                    </a>
                )}</h3>
                <div className="text-gray-700">{children}</div>

            </div>
        </div>
    );
}

const Projects: React.FC = () => {
    return (
        <section className="animate-fadeInUp" style={{animationDelay: '1.9s'}}>
            <div className="relative mb-7">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"/>
                </div>
                <div className="relative flex justify-start">
                    <span
                        className="bg-white pr-3 text-2xl  font-bold leading-6 text-blue-600">🚀️ Recent Projects</span>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <ProjectItem
                    title="E-learning Platform"
                >
                    <p className="pb-4">I implemented an online learning platform, that included the
                        following applications:</p>
                    <p className="pb-2">1) A search-engine-friendly Knowledge Base built in <strong>Remix</strong>. The
                        project generated
                        static pages (with a 5-minute cache) based on a markdown template that could be publicly
                        modified. It used Algolia as the search engine.</p>
                    <p className="pb-2">2) An e-learning fullstack <strong>Next.js</strong> app
                        (using <strong>tRPC</strong>) with Clerk authentication
                        utilizing v0.dev for designs. Users can be assigned to teachers for lessons and homework
                        tasks.</p>
                    <p className="pb-2">
                        I handed off the project, and it’s currently not in production as it still requires content to
                        be added by someone else.</p>
                </ProjectItem>
                <ProjectItem
                    title="Crypto Arbitrage Trading Bot"
                >
                    I implemented a self-hosted bot, written in ts, that uses crypto api library CCTX (<Link
                    href={'https://github.com/ccxt/ccxt/pull/23461'}>[my contribution]</Link>) to handle websocket API
                    requests to different markets.
                    It executes trades based on the differences between exchanges in order to make profits. I have also
                    experience writing my own smart contracts on <strong>Solidity</strong> for other strategies.
                </ProjectItem>
            </div>

            <div className="relative mb-7">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"/>
                </div>
                <div className="relative flex justify-start">
                    <span
                        className="bg-white pr-3 text-2xl  font-bold leading-6 text-blue-600">    🏗️ Non-profit Projects</span>
                </div>
            </div>


            <div className="grid md:grid-cols-2 gap-8">
                <ProjectItem
                    title="Chess Bot"
                    link="https://github.com/watislaf/chessbot"
                >
                    This is a bot that I created in Python to play chess for me on <Link
                    className='text-blue-600 underline' href='https://www.chess.com/member/watislaf2'>[chess.com
                    profile]</Link>. The bot utilizes a <strong>self-written</strong> Chess Engine in C++ and using
                    Python scans the board. However, it was soo good (and bad at the same time) that after it reached
                    2100, it got banned :(

                </ProjectItem>
                <ProjectItem
                    title="Aws Terraform training"
                    link="https://github.com/watislaf/dcms/tree/master/infra"
                >
                    This project involves creating an infrastructure that includes an S3 bucket, a VPC with public and private subnets, a NAT Gateway for internet access from private subnets, and a Bastion host in the public subnet. Within the VPC, a MongoDB cluster is deployed in private subnets. Additionally, the project includes automatically building and containerizing server and web applications using Docker, which are then deployed and distributed across AWS Fargate.
                </ProjectItem>
                <ProjectItem
                    title="Tower Defense Game"
                    link="https://github.com/PGSStas/techvscats"
                >This is a 2D Tower Defence game written in C++. The game is designed for both PC and Android phones.
                </ProjectItem>
            </div>
            <div className="pt-6">
                <a
                    href={'https://github.com/watislaf'}
                    className="text-blue-600 underline mt-2 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    You find all my projects here...
                </a>
            </div>
        </section>
    );
}

export default Projects;
