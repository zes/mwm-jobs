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
    hostedUrl,
  },
}: PostingProps): ReactElement {
  return (
    <div className="posting-card">
      <div className="info">
        <span className="title">{text}</span>
        <span className="subtitle">{`${location} - ${department}`}</span>
      </div>
      <a
        href={hostedUrl}
        target="_blank"
        rel="noreferrer"
        className="card-link"
      >
        hidden card link
      </a>
      <a
        href={applyUrl}
        target="_blank"
        rel="noreferrer"
        className="apply-button"
      >
        APPLY
      </a>
    </div>
  );
}

export default Posting;
