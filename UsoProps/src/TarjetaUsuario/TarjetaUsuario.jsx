// src/components/TarjetaUsuario.jsx
function TarjetaUsuario({ nombre, profesion, edad }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', margin: '10px', width: '250px' }}>
      <h3>{nombre}</h3>
      <p><strong>Profesión:</strong> {profesion}</p>
      <p><strong>Edad:</strong> {edad} años</p>
    </div>
  );
}

export default TarjetaUsuario;
