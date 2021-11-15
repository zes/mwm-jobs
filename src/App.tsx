import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Jobs from './pages/Jobs';

const queryClient = new QueryClient();

function App(): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Jobs />
    </QueryClientProvider>
  );
}

export default App;
