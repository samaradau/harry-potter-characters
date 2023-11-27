"use client";

import { Characters } from "./components/characters";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Page() {
  return (
    <>
      <h1>Harry Potter Characters</h1>
      <QueryClientProvider client={queryClient}>
        <Characters />
      </QueryClientProvider>
    </>
  );
}
