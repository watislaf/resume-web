import React from 'react';

const ProfessionalExperience: React.FC = () => {
    return (
        <section className="animate-slideInLeft">

            <h2 className="text-2xl font-bold mb-4 text-blue-600 inline-block transition-all duration-300 ease-in-out ">💻 Professional Experience</h2>
            <div className="space-y-6">
                <div className="animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                    <h3 className="text-xl font-semibold text-blue-800">Full-Stack [Spring-React-ReactNative] Developer</h3>
                    <p className="text-gray-600">
                        <a href="https://www.avsystem.com/" target="_blank" rel="noopener noreferrer" className="underline">AVSystem</a> | June 2022 - Present
                    </p>
                    <div className="mt-2 flex flex-col gap-2 text-gray-700">
                        <p>The work involved developing multiple IT products for a popular ice cream chain.</p>
                        <p className="mt-2">
                            Our system was supported by only nine people, which placed significant responsibility on
                            each team member and allowed us to work on all aspects of the end-to-end product.
                        </p>

                        <p className="font-semibold mt-2">🛠 Stack</p>
                        <p>
                            The stack was very diverse. The project included an <a href="https://goodlood.com/app/"
                                                                                   target="_blank"
                                                                                   rel="noopener noreferrer"
                                                                                   className="underline hover:text-blue-500">application</a> for
                            clients built with <strong>React Native</strong>, several <a
                            href="https://goodlood.com/delivery/en" target="_blank" rel="noopener noreferrer"
                            className="underline hover:text-blue-500">websites</a> built with React in multiple
                            frameworks, and various applications for internal use in ice cream production. We had several servers,
                            with the main one developed in <strong>Java Spring</strong> and a smaller one in <strong>Django</strong>.
                        </p>
                        <p className="font-semibold mt-2">📋️ My responsibilities</p>
                        <p>I began my career as a developer and naturally transitioned into the role of a feature
                            owner.</p>
                        <p>
                            As a feature owner, I was responsible for planning and implementing new functionalities.
                            This involved breaking down the work into tasks, assigning responsibilities, and ultimately
                            delivering the features to the clients. My specific features are:
                        </p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Implementing discounts and promo codes across the Client app, WebApp, POS and Backend.
                            </li>
                            <li>Integrating our services with Shopify for new eCommerce functionality.</li>
                        </ul>
                        <p className="mt-2">
                            Be <strong>agile</strong>. It&apos;s hard not to notice that our team was built on pure communication,
                            acceptance, mutual respect and attention for each team member. I also learned a lot from this.
                        </p>
                        <p className="font-semibold mt-2">Summary</p>
                        <p>
                            In this role, I distinguished myself by being highly dedicated to our team and product.
                            I believe my efforts in time and work management helped set a positive example and
                            contributed to our overall success.
                        </p>
                    </div>
                </div>
                <div className="animate-fadeInUp" style={{animationDelay: '0.9s'}}>
                    <h3 className="text-xl font-semibold text-blue-800">Nokia Junior C++ Software Engineer 5g</h3>
                    <p className="text-gray-600">Nokia | June 2021 - June 2022</p>
                    <div className="mt-2 text-gray-700">
                        <p>
                            I worked on the 📡 5G-QoS project, which involved developing new network functionalities using
                            C++. This role required a solid understanding of telecommunications and the ability to work
                            with a large legacy codebase.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProfessionalExperience;