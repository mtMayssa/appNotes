import React, { useState } from "react";
import Block, { BlockProps } from "./Block";

const BlockList = () => {
  const [blocks, setBlocks] = useState<BlockProps[]>([]);

  const addBlock = () => {
    const newBlock = { text: `Block ${blocks.length + 1}` };
    setBlocks([...blocks, newBlock]);
  };

  return (
    <div>
      <button onClick={addBlock}>Click to Add Block Div</button>
      {blocks.map((block, index) => (
        <Block key={index} text={block.text} />
      ))}
    </div>
  );
};

export default BlockList;
