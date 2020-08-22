import React from "react";

type FeedProps = {
  onClick: any;
  sbState: boolean;
};

export default function Feed({ onClick, sbState }: FeedProps) {
  return (
    <div className="home">
      <h1>This is home</h1>
      <button
        onClick={() => {
          onClick(!sbState);
        }}
      >
        click
      </button>
    </div>
  );
}
