import React, { useState } from 'react';

const CreateFoldersAndFileStructure = ({ folderData }) => {
  const [expand, setExpand] = useState(false);

  const { isFolder, name } = folderData;

  return isFolder ? (
    <>
      <div style={{ marginLeft: 30, marginTop: 5 }}>
        <span onClick={() => setExpand(!expand)}>{name}</span>
        <br />
      </div>
      <div style={{ display: expand ? 'block' : 'none', marginLeft: 33, marginTop: 2 }}>
        {folderData.item &&
          folderData.item?.map((folderinfo) => (
            <CreateFoldersAndFileStructure folderData={folderinfo} />
          ))}
      </div>
    </>
  ) : (
    <div style={{ marginLeft: 30, marginTop: 5 }}>
      <span>{name}</span>
      <br />
    </div>
  );
};

export default CreateFoldersAndFileStructure;
