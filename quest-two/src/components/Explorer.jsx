import React from 'react'
import { useState } from 'react'
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";


const Explorer = ({data}) => {
    const [expand, isExpand] = useState(false);
    return (
      <div>
        <p
          onClick={() => isExpand((prevState) => !prevState)}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          {data.isFolder ? (
            expand ? (
              <AiOutlineCaretDown />
            ) : (
              <AiOutlineCaretRight />
            )
          ) : null}
          {data.name}
        </p>
        <div style={expand ? { display: "block" } : { display: "none" }}>
          {data.isFolder && (
            <div style={{ marginLeft: 15 }}>
              {data.items.map((item) => (
                <Explorer key={item.name} data={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
}

export default Explorer
