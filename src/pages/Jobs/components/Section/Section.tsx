import { ReactElement } from 'react';
import './Section.scss';

interface SectionProps {
  section: Section;
}

function Section({ section }: SectionProps): ReactElement {
  return (
    <>
      <p className="section-title">{section.title}</p>
      <hr />
    </>
  );
}

export default Section;
