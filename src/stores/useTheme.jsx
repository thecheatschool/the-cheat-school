import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTheme = create(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () => set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        
        // Apply the class to document element
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        
        return { theme: newTheme };
      }),
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        // Apply theme on page load/rehydrate
        if (state?.theme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      },
    }
  )
);