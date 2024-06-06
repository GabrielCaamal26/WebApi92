import React, { useState, useEffect } from 'react';

interface User {
  PkUsuario: number;
  Nombre: string;
  User: string;
  Password: string;
  FkRol: number;
}

const CRUD = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [nombre, setNombre] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [fkRol, setFkRol] = useState('');
  const [isFormVisible, setFormVisible] = useState(false);

  useEffect(() => {
    fetch('https://localhost:7290/Usuarios/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUsers(data.result);
      });
  }, []);

  const handleUpdate = (PkUsuario: number) => {
    // Aquí puedes manejar la actualización
    // Por ejemplo, puedes abrir un formulario de actualización o redirigir a una página de actualización
  };

  const handleDelete = (PkUsuario: number) => {
    fetch(`https://localhost:7290/Usuarios/${PkUsuario}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          setUsers(users.filter(user => user.PkUsuario !== PkUsuario));
        } else {
          console.error('Error:', response.status);
        }
      });
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch('https://localhost:7290/Usuarios/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Nombre: nombre,
        User: user,
        Password: password,
        FkRol: fkRol,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setUsers(prevUsers => [...prevUsers, data]);
      });
  };

  return (
    <div>
    <button onClick={()=> setFormVisible(true)} className='btn btn-outline btn-info'>Agregar Usuario</button>
    {isFormVisible && ( // Solo muestra el formulario si isFormVisible es true
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
          </label>
          <label>
            Usuario:
            <input type="text" value={user} onChange={e => setUser(e.target.value)} />
          </label>
          <label>
            Contraseña:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <label>
            Rol:
            <input type="text" value={fkRol} onChange={e => setFkRol(e.target.value)} />
          </label>
          <button type="submit" className='btn btn-outline btn-success'>Crear usuario</button>
        </form>
      )}
    <div className='overflow-x-auto'>
    <table className='table'>
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
              <button onClick={() => handleUpdate(user.PkUsuario)} className='btn btn-outline btn-warning'>Actualizar</button>
              <button onClick={() => handleDelete(user.PkUsuario)} className='btn btn-outline btn-error'>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
  );
};

export default CRUD;