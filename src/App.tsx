import React, { useState, useEffect } from 'react';
import { Neo4jProvider } from './components/Neo4jContext';
import KnowledgeGraph from './components/KnowledgeGraph';
import FileUpload from './components/FileUpload';
import { Database, Upload } from 'lucide-react';

function App() {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });

  useEffect(() => {
    // Fetch initial graph data here
  }, []);

  const handleFileUpload = async (file: File) => {
    // Implement file upload and graph update logic here
    console.log('File uploaded:', file.name);
  };

  return (
    <Neo4jProvider
      uri={import.meta.env.VITE_NEO4J_URI}
      user={import.meta.env.VITE_NEO4J_USERNAME}
      password={import.meta.env.VITE_NEO4J_PASSWORD}
    >
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold flex items-center">
            <Database className="mr-2" /> Neo4j Knowledge Graph Viewer
          </h1>
        </header>
        <main className="flex-grow flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 p-4">
            <KnowledgeGraph data={graphData} />
          </div>
          <div className="w-full md:w-1/4 p-4 bg-white shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Upload className="mr-2" /> Upload File
            </h2>
            <FileUpload onUpload={handleFileUpload} />
          </div>
        </main>
      </div>
    </Neo4jProvider>
  );
}

export default App;