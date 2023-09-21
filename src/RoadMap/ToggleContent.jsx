import React, { useState } from 'react';

function ToggleContent() {
  const [isOpen, setIsOpen] = useState(false);

  // 토글 버튼을 클릭할 때 상태를 업데이트하여 접힘/열림 상태를 변경합니다.
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <h1>프로젝트</h1>
      </div>
      <div>
        <button onClick={toggle}>토글</button>
        {isOpen && <div>접힌 컨텐츠가 열립니다.</div>}
      </div>
    </>
  );
}

export default ToggleContent;