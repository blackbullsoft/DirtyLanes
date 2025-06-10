// context/FilterContext.tsx
import React, {createContext, useContext, useState, ReactNode} from 'react';

interface FilterContextType {
  visible: boolean;
  toggle: () => void;
  show: () => void;
  hide: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({children}) => {
  const [visible, setVisible] = useState(false);

  return (
    <FilterContext.Provider
      value={{
        visible,
        toggle: () => setVisible(v => !v),
        show: () => setVisible(true),
        hide: () => setVisible(false),
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error('useFilter must be used within a FilterProvider');
  return context;
};
