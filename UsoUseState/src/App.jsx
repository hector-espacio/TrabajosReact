import React, { useState } from 'react';

// Componente Contador integrado
function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', fontFamily: 'Arial' }}>
      <h3>Contador interactivo</h3>
      <p style={{ fontSize: '22px', fontWeight: 'bold' }}>
        Valor actual: {contador}
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => setContador(contador - 1)}>Restar (-)</button>
        <button onClick={() => setContador(0)}>Reiniciar</button>
        <button onClick={() => setContador(contador + 1)}>Sumar (+)</button>
      </div>
    </div>
  );
}

// Componente principal App
function App() {
  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center', color: '#61dafb' }}>¡Hola, React!</h1>
      <p style={{ textAlign: 'center' }}>Este es tu proyecto funcionando al 100%.</p>
      <Contador />
    </div>
  );
}

export default App;
