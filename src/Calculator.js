// useCallback + useMemo
// Калькулятор возведения числа в квадрат

import React, { useState, useCallback, useMemo } from 'react';

export default function CalculatorComponent() {
  const [inputValue, setInputValue] = useState();

  const handleSquareClick = useCallback(() => {
    console.log('Вычисление квадрата числа!');
    return inputValue ** 2;
  }, [inputValue]);

  const squaredValue = useMemo(handleSquareClick, [handleSquareClick]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Калькулятор квадрата числа</h2>

      <label>
        Введите число:
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          style={{ marginLeft: '10px' }}
        />
      </label>

      <p>Введенное число: {inputValue}</p>

      <button
        onClick={handleSquareClick}
        style={{ padding: '10px', fontSize: '16px', margin: '10px', cursor: 'pointer' }}
      >
        Вычислить квадрат числа
      </button>

      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Квадрат числа: {squaredValue}</p>
    </div>
  );
};

