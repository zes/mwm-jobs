import { ReactElement } from 'react';
import './Posting.scss';

interface PostingProps {
  posting: Posting;
}

function Posting({
  posting: {
    text,
    categories: { location, department },
    applyUrl,
  },
}: PostingProps): ReactElement {
  return (
    <div className="posting-card">
      <div className="posting-info">
        <span className="posting-title">{text}</span>
        <span className="posting-subtitle">{`${location} - ${department}`}</span>
      </div>
      <a
        className="apply-button"
        href={applyUrl}
        target="_blank"
        rel="noreferrer"
      >
        APPLY
      </a>
    </div>
  );
}

export default Posting;
