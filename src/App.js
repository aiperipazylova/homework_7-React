// useMemo 
// Здесь простой список с использованием useMemo для оптимизации производительности. Кнопка позволяет добавлять новые элементы в список.

import React, { useState, useMemo } from 'react';

export default function ListComponent() {
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  const listElements = useMemo(() => {
    console.log('Построение списка!');
    return list.map((item, index) => <li key={index}>{item}</li>);
  }, [list]); 

  return (
    <div>
      <ul>{listElements}</ul>
      <button onClick={() => setList([...list, list.length + 1])}>
        Добавить элемент
      </button>
    </div>
  );
};


