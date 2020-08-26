import React from "react";

interface FeedProps {
  onClick: any;
}

export default function Feed({ onClick }: FeedProps) {
  return (
    <div className="home">
      <h1>This is home</h1>
      <button
        onClick={() => {
          onClick();
        }}
      >
        click
      </button>
    </div>
  );
}
