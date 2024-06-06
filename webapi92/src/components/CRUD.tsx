import React, { useEffect, useState } from 'react';

const CRUD = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7290/Usuarios/')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleUpdate = (PkUsuario) => {
    // Aquí puedes manejar la actualización
    // Por ejemplo, puedes abrir un formulario de actualización o redirigir a una página de actualización
  };

  const handleDelete = (PkUsuario) => {
    fetch(`https://localhost:7290/Usuarios/${PkUsuario}`, { method: 'DELETE' })
      .then(() => setUsers(users.filter(user => user.PkUsuario !== PkUsuario))); //ario.id))); //ario))); //
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Contraseña</th>
          <th>Rol</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.PkUsuario}>
            <td>{user.Nombre}</td>
            <td>{user.User}</td>
            <td>{user.Password}</td>
            <td>{user.FkRol}</td>
            <td>
              <button onClick={() => handleUpdate(user.PkUsuario)}>Actualizar</button>
              <button onClick={() => handleDelete(user.PkUsuario)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CRUD;