import React from "react";

const List = ({
  items,
  onClick,
}: {
  items: string[];
  onClick: (item: string) => void;
}) => {
  return (
    <div>
      {/* mapping  */}
      {items.map((item, index) => {
        <li key={index} onClick={() => onClick(item)}>
          {item}
        </li>;
      })}
    </div>
  );
};

export default List;
