import { Shimmer } from "react-shimmer";

const ShimmerComponent = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((e) => {
          return <Shimmer width={200} height={200} />;
        })}
    </div>
  );
};

export default ShimmerComponent;
