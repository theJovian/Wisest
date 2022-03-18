import {QueryClient, QueryClientProvider} from 'react-query';
import React from 'react';

const queryClient = new QueryClient();

export const Cache = ({children}: any) => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
