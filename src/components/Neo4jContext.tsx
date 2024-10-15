import React, { createContext, useContext, ReactNode } from 'react';
import neo4j, { Driver } from 'neo4j-driver';

interface Neo4jContextType {
  driver: Driver | null;
}

const Neo4jContext = createContext<Neo4jContextType>({ driver: null });

export const useNeo4j = () => useContext(Neo4jContext);

interface Neo4jProviderProps {
  children: ReactNode;
  uri: string;
  user: string;
  password: string;
}

export const Neo4jProvider: React.FC<Neo4jProviderProps> = ({ children, uri, user, password }) => {
  const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

  return (
    <Neo4jContext.Provider value={{ driver }}>
      {children}
    </Neo4jContext.Provider>
  );
};