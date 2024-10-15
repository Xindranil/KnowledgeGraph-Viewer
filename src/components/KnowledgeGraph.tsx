import React, { useCallback } from 'react';
import { ForceGraph2D } from 'react-force-graph';

interface Node {
  id: string;
  label: string;
}

interface Link {
  source: string;
  target: string;
  label: string;
}

interface KnowledgeGraphProps {
  data: {
    nodes: Node[];
    links: Link[];
  };
}

const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ data }) => {
  const handleNodeClick = useCallback((node: Node) => {
    // Implement node click behavior (e.g., show details)
    console.log('Clicked node:', node);
  }, []);

  return (
    <div className="w-full h-[calc(100vh-6rem)]">
      <ForceGraph2D
        graphData={data}
        nodeLabel="label"
        linkLabel="label"
        nodeAutoColorBy="label"
        linkAutoColorBy="label"
        onNodeClick={handleNodeClick}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.label as string;
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = 'black';
          ctx.fillText(label, node.x as number, node.y as number);
        }}
      />
    </div>
  );
};

export default KnowledgeGraph;