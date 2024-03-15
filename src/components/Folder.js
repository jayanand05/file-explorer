import React, { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <div>
        <div
          className="m-5 cursor-pointer w-1/4 bg-zinc-300"
          onClick={() => setExpand(!expand)}
        >
          <span>📁{explorer.name}</span>
          <div>
            {/* <button className="text-15px bg-white border-2 border-gray-300">
              Folder +
            </button>
            <button className="text-15px bg-white border-2 border-gray-300">
              File +
            </button> */}
          </div>
        </div>

        <div className="ml-5 " style={{ display: expand ? "block" : "none" }}>
          {explorer.items.map((expo) => {
            return <Folder explorer={expo} key={expo.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file ml-5 flex flex-col">📄 {explorer.name}</span>;
  }
}

export default Folder;
