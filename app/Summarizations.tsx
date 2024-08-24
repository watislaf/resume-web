import React from 'react';

interface SummarizationItemProps {
    title: string;
    children: React.ReactNode;
}

const SummarizationItem: React.FC<SummarizationItemProps> = ({ title, children }) => {
    return (
        <div className="flex flex-col h-full group">
            <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
                <div className="text-gray-700">{children}</div>
            </div>
        </div>
    );
}

const Summarizations: React.FC = () => {
    return (
        <section className="mt-9 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <div className="relative mb-7">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"/>
                </div>
                <div className="relative flex justify-start">
                    <span className="bg-white pr-3 text-2xl font-bold leading-6 text-blue-600">🎓 Education</span>
                </div>
            </div>
            <div className="grid md:grid-cols-1 gap-8 mb-8">
                <SummarizationItem title="BSc in Computer Science">
                    <p className="pb-4">October 2021 - June 2025</p>
                    <p className="pb-2">Jagiellonian University at Krakow, Poland</p>
                    <p className="pb-2">I&apos;ve worked full-time since my first year of studies. I considered dropping out
                        because I believe real knowledge comes from experience, but the student privileges 😎 convinced
                        me to stay. University only takes about 2 hours a week, so it barely affects my life.</p>
                </SummarizationItem>
            </div>

                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"/>
                </div>

            <div className="grid md:grid-cols-1 gap-8 mb-8">
                <SummarizationItem title="Childhood">
                    <p >I started programming when I was 14 years old. I graduated from one of the best
                        lyceums in Belarus and won a silver medal in the Republic Olympiad in Belarus when I was 17. My
                        parents are half Polish, and I moved back to Poland when I was 18.</p>
                </SummarizationItem>
            </div>

            <div className="grid md:grid-cols-1 gap-8 mb-8">
                <SummarizationItem title="Expectancies">
                    <p className="pb-4">I have always been a dedicated worker. I&apos;m looking for a high-demanding job with
                        growth potential.</p>
                </SummarizationItem>
            </div>
        </section>
    );
}

export default Summarizations;
