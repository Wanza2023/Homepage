import React from 'react';

function TableComponent() {
  // 반복되는 데이터 배열
  const data = [
    { id: 1, name: '아이템 1', price: 10 },
    { id: 2, name: '아이템 2', price: 20 },
    { id: 3, name: '아이템 3', price: 30 },
    // 더 많은 데이터 아이템을 추가할 수 있습니다.
  ];

  return (
    <div>
      <h1>반복되는 테이블</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;