// ClienteCadastrar.jsx is a function that sends a POST request to the API to create a new client.
//It returns an object with a success property that indicates whether the request was successful and
//a data property that contains the response data or an error property with the error message if the request fails.
import React, { useState } from "react";
import ClienteCadastrar from "./ClienteCadastrar";
import "./ClienteCadastrarStyles.css"; // Importando o CSS

const ClienteCadastrarView = () => {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cliente = { cpf, nome, cep };

    const result = await ClienteCadastrar(cliente);

    if (result.success) {
      setMensagem("Cliente cadastrado com sucesso!");
    } else {
      setMensagem(`Erro: ${result.error}`);
    }
  };

  return (
    <div className="cliente-cadastrar-view">
      <h3>Cadastrar Cliente</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input
            id="cpf"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cep">CEP:</label>
          <input
            id="cep"
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default ClienteCadastrarView;
