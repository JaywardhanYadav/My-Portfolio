import React, { type ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    id: string;
    className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`w-full py-20 md:py-32 px-4 md:px-8 ${className}`}>
            <div className="max-w-7xl mx-auto w-full">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
