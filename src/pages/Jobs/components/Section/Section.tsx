import { ReactElement } from 'react';
import Posting from '../Posting';
import './Section.scss';

interface SectionProps {
  section: Section;
}

function Section({ section: { title, postings } }: SectionProps): ReactElement {
  return (
    <>
      <p className="section-title">{title}</p>
      {postings.map((posting) => (
        <Posting key={posting.id} posting={posting} />
      ))}
      <hr />
    </>
  );
}

export default Section;
