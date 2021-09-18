import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const gear = [
  {
    title: "Bateria RMV Road",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias pariatur commodi iste. Tempore numquam sed soluta delectus deleniti quibusdam perferendis.",
    price: 900,
    tags: ["audio", "instrumentos", "bateria"],
  },
  {
    title: "Par de Microfone Behringer C2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias pariatur commodi iste. Tempore numquam sed soluta delectus deleniti quibusdam perferendis.",
    price: 600,
    tags: ["audio", "microfone"],
  },
  {
    title: "Par de Microfone Behringer C2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias pariatur commodi iste. Tempore numquam sed soluta delectus deleniti quibusdam perferendis.",
    price: 600,
    tags: ["audio", "microfone"],
  },
];

export default function DataProvider({ children }) {
  const [data, setData] = useState(gear[0]);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}

// HOOK
export function useData() {
  const context = useContext(DataContext);

  if (!context) throw new Error("useData must be used within a provider");

  const data = context;

  return data;
}
