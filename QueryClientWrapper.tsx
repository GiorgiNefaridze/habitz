import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

type QueryClientWrapperType = (prop: { children: ReactNode }) => ReactNode;

export const client = new QueryClient();

const QueryClientWrapper: QueryClientWrapperType = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryClientWrapper;
