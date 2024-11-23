import React from 'react';
import { bodyText1Regular, heading1Bold } from '../designSystem/typo/typo';

interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center text-center mb-8">
      <h1 style={heading1Bold}>{title}</h1>
      {description && <p style={bodyText1Regular} className="mt-2">{description}</p>}
    </div>
  );
};

export default SectionHeader;
