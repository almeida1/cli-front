import React from "react";
import "./ClienteStyles.css"; // Importa o arquivo de estilos

const ClienteView = ({ clientes }) => {
  return (
    <div className="cliente-view">
      <h5>Lista de Clientes</h5>
      {clientes.length > 0 ? (
        <table id="tabela_consulta" className="cliente-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>CPF</th>
              <th>Nome</th>
              <th>CEP</th>
              <th>Endereço</th>
              <th>Data de Cadastro</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.cep}</td>
                <td>{cliente.endereco}</td>
                <td>{cliente.dataCadastro}</td>
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
