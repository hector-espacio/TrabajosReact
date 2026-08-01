// src/App.jsx
import TarjetaUsuario from './components/TarjetaUsuario';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Lista de Usuarios (Ejemplo de Props)</h2>
      
      {/* Pasamos diferentes props a cada instancia del componente */}
      <TarjetaUsuario 
        nombre="Ana Pérez" 
        profesion="Desarrolladora Frontend" 
        edad={28} 
      />

      <TarjetaUsuario 
        nombre="Carlos Gómez" 
        profesion="Diseñador UX/UI" 
        edad={34} 
      />

      <TarjetaUsuario 
        nombre="Elena Rodríguez" 
        profesion="Project Manager" 
        edad={30} 
      />
    </div>
  );
}

export default App;
