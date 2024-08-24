import React from 'react';

export const RedBadge: React.FC<{ skill: string }> = ({ skill }) => (
    <span className="inline-flex bg-white items-center gap-x-1.5 rounded-md px-2 py-1 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-red-500">
            <circle r={3} cx={3} cy={3} />
        </svg>
        {skill}
    </span>
);

export const YellowBadge: React.FC<{ skill: string }> = ({ skill }) => (
    <span className="inline-flex bg-white items-center gap-x-1.5 rounded-md px-2 py-1 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-yellow-500">
            <circle r={3} cx={3} cy={3} />
        </svg>
        {skill}
    </span>
);

export const GreenBadge: React.FC<{ skill: string }> = ({ skill }) => (
    <span className="inline-flex bg-white items-center gap-x-1.5 rounded-md px-2 py-1 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-green-500">
            <circle r={3} cx={3} cy={3} />
        </svg>
        {skill}
    </span>
);

export const BlueBadge: React.FC<{ skill: string }> = ({ skill }) => (
    <span className="inline-flex bg-white items-center gap-x-1.5 rounded-md px-2 py-1 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-blue-500">
            <circle r={3} cx={3} cy={3} />
        </svg>
        {skill}
    </span>
);

export const IndigoBadge: React.FC<{ skill: string }> = ({ skill }) => (
    <span className="inline-flex bg-white items-center gap-x-1.5 rounded-md px-2 py-1 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-indigo-500">
            <circle r={3} cx={3} cy={3} />
        </svg>
        {skill}
    </span>
);

export const PurpleBadge: React.FC<{ skill: string }> = ({ skill }) => (
    <span className="inline-flex bg-white items-center gap-x-1.5 rounded-md px-2 py-1 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-purple-500">
            <circle r={3} cx={3} cy={3} />
        </svg>
        {skill}
    </span>
);

export const PinkBadge: React.FC<{ skill: string }> = ({ skill }) => (
    <span className="inline-flex bg-white items-center gap-x-1.5 rounded-md px-2 py-1 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
        <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-pink-500">
            <circle r={3} cx={3} cy={3} />
        </svg>
        {skill}
    </span>
);
