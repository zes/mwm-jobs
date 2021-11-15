import { ReactElement } from 'react';
import { useQuery } from 'react-query';

import './Jobs.scss';
import Section from './components/Section';
import { fetchData } from '../../utils/api';

function Jobs(): ReactElement {
  const {
    data: sections,
    isError,
    isLoading,
  } = useQuery<Section[], Error>('jobs', () =>
    fetchData(
      'https://api.lever.co/v0/postings/musicworldmedia?mode=json&group=team',
    ),
  );

  return (
    <div className="jobs-wrapper">
      <header className="jobs-header">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error fetching jobs</p>}
        {sections && <p>Jobs</p>}
      </header>
      <div className="sections-wrapper">
        {sections &&
          sections.map((section, index) => (
            <Section key={index} section={section} />
          ))}
      </div>
    </div>
  );
}

export default Jobs;
