export interface BlockProps {
  text: string;
}

const Block = (props: BlockProps) => {
  return (
    <div>
      <h3>{props.text}</h3>
    </div>
  );
};
export default Block;
