import React from 'react'
export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Сторінка не знайдена</p>
      <a href="/" className="not-found-link">Повернутися на головну</a>
    </div>
  );
}
