import { createContext, useContext, useState, type ReactNode } from "react";

interface CRTContextValue {
  crtEnabled: boolean;
  toggleCRT: () => void;
}

const CRTContext = createContext<CRTContextValue>({
  crtEnabled: false,
  toggleCRT: () => {},
});

export function CRTProvider({ children }: { children: ReactNode }) {
  const [crtEnabled, setCrtEnabled] = useState(
    () => localStorage.getItem("crt-enabled") === "true"
  );

  const toggleCRT = () => {
    setCrtEnabled((prev) => {
      const next = !prev;
      localStorage.setItem("crt-enabled", String(next));
      return next;
    });
  };

  return (
    <CRTContext.Provider value={{ crtEnabled, toggleCRT }}>
      {children}
    </CRTContext.Provider>
  );
}

export function useCRT() {
  return useContext(CRTContext);
}
