import React from 'react';
import ProfessionalExperience from './ProfessionalExperience';
import Profile from './Profile';
import Projects from './Projects';
import Summarizations from "@/app/Summarizations";

export default function Portfolio() {
    return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 pattern-cross pattern-blue-100 pattern-bg-white
  pattern-size-8 pattern-opacity-100"
        >
            <div
                className="max-w-9xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden animate-fadeIn"

            >
                <div className="p-8">
                    <div className="flex flex-col-reverse xl:flex-row gap-8 mb-12">
                        <div className="w-full xl:w-2/3">
                            <ProfessionalExperience/>
                        </div>
                        <div className="w-full xl:w-1/3">
                            <Profile/>
                        </div>
                    </div>
                    <Projects/>
                    <Summarizations/>
                </div>
            </div>
    </div>
    );
}
