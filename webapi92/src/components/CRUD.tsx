import React, { useState, useEffect } from 'react';

interface User {
  pkUsuario: number;
  nombre: string;
  user: string;
  password: string;
  fkRol: number;
}

const CRUD = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [nombre, setNombre] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [fkRol, setFkRol] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://localhost:7290/Usuarios/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUsers(data.result);
      });
  }, []);

  const handleUpdate = (pkUsuario: number) => {
    // Aquí puedes manejar la actualización
    // Por ejemplo, puedes abrir un formulario de actualización o redirigir a una página de actualización
  };

  const handleDelete = (pkUsuario: number) => {
    fetch(`https://localhost:7290/Usuarios/${pkUsuario}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          setUsers(users.filter(user => user.pkUsuario !== pkUsuario));
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
      setIsModalOpen(false);
  };

  const openModal = () => {
    const modal = document.querySelector("#modal") as HTMLDialogElement;
    if(modal) {
      modal.showModal();
    }
  }

  return (
    <>
    <button className='btn btn-outline btn-info' onClick={() => openModal()}>Agregar Usuario</button>
    {isModalOpen && (
        <dialog id="modal" className="modal">
          <form className='modal-box' onSubmit={handleSubmit}>
              <label className='input input-bordered input-accent flex items-center gap-2'>
                Nombre:
                <input className='grow' type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
              </label>

              <label className='input input-bordered flex items-center gap-2'>
                Usuario:
                <input type="text" value={user} onChange={e => setUser(e.target.value)} />
              </label>

              <label className='input input-bordered flex items-center gap-2'>
                Contraseña:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
              </label>

              <label className='input input-bordered flex items-center gap-2'>
                Rol:
                <input type="text" value={fkRol} onChange={e => setFkRol(e.target.value)} />
              </label>

              <button type="submit" className='btn btn-outline btn-success'>Crear usuario</button>
            </form>
        </dialog>
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
          <tr key={user.pkUsuario}>
            <td>{user.nombre}</td>
            <td>{user.user}</td>
            <td>{user.password}</td>
            <td>{user.fkRol}</td>
            <td>
              <button onClick={() => handleUpdate(user.pkUsuario)} className='btn btn-outline btn-warning'>Actualizar</button>
              <button onClick={() => handleDelete(user.pkUsuario)} className='btn btn-outline btn-error'>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  );
};

export default CRUD;