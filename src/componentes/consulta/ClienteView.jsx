import React from "react";
import "./ClienteStyles.css"; // Importa o arquivo de estilos

const ClienteView = ({ clientes }) => {
  return (
    <div className="cliente-view">
      <h3>Lista de Clientes</h3>
      {clientes.length > 0 ? (
        <table className="cliente-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.endereco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum cliente encontrado</p>
      )}
    </div>
  );
};

export default ClienteView;
