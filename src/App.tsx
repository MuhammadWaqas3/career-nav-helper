
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Universities from "./pages/Universities";
import EntryTest from "./pages/EntryTest";
import PastPapers from "./pages/PastPapers";
import CSQuiz from "./pages/CSQuiz";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/entry-test" element={<EntryTest />} />
          <Route path="/past-papers" element={<PastPapers />} />
          <Route path="/cs-quiz" element={<CSQuiz />} />
          <Route path="/doubts" element={<NotFound />} />
          <Route path="/fields" element={<NotFound />} />
          <Route path="/login" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
