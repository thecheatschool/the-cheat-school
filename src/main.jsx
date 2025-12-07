import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // ADD THIS

// Initialize theme before rendering
const initializeTheme = () => {
  const savedTheme = localStorage.getItem("theme-storage");
  if (savedTheme) {
    const themeState = JSON.parse(savedTheme);
    if (themeState.state.theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }
};
initializeTheme();

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    {/* Only shows in development */}
    <ReactQueryDevtools 
      initialIsOpen={true}  // Force open
      position="bottom"     // Change position
      errorTypes={[]}       // Disable error catching
    />
  </QueryClientProvider>
);