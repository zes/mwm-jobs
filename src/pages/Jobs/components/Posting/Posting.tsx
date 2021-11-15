import { ReactElement } from 'react';
import './Posting.scss';

interface PostingProps {
  posting: Posting;
}

function Posting({
  posting: {
    text,
    categories: { location, department },
  },
}: PostingProps): ReactElement {
  return (
    <div className="posting-card">
      <div className="posting-info">
        <span className="posting-title">{text}</span>
        <span className="posting-subtitle">{`${location} - ${department}`}</span>
      </div>
      <button className="apply-button">APPLY</button>
    </div>
  );
}

export default Posting;
