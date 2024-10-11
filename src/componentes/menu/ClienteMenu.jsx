import React, { useState } from "react";
import ClienteConsulta from "../consulta/ClienteConsulta";
import ClienteCadastrarView from "../cadastrar_cliente/ClienteCadastrarView";

const ClienteMenu = () => {
  const [mostrarConsulta, setMostrarConsulta] = useState(false);
  const [mostrarCadastro, setMostrarCadastro] = useState(false); // Estado para exibir o cadastro
  const [atualizarConsulta, setAtualizarConsulta] = useState(0);

  const handleCadastrar = () => {
    setMostrarCadastro(true); // Exibe o formulário de cadastro
    setMostrarConsulta(false); // Oculta a consulta (opcional)
    console.log("Cadastrar");
  };

  const handleConsultar = () => {
    console.log("Consultar");
    setMostrarCadastro(false); // Oculta o formulário de cadastro
    setMostrarConsulta(true); // Exibe a consulta
    setAtualizarConsulta((prev) => prev + 1);
  };

  const handleAlterar = () => {
    // Lógica para alterar
    console.log("Alterar");
  };

  return (
    <div>
      <button id="cadastrar" onClick={handleCadastrar}>
        Cadastrar
      </button>
      <button id="consultar" onClick={handleConsultar}>
        Consultar
      </button>
      <button id="alterar" onClick={handleAlterar}>
        Alterar
      </button>
      {/* Exibe o formulário de cadastro se 'mostrarCadastro' for true */}
      {mostrarCadastro && <ClienteCadastrarView />}
      {mostrarConsulta && (
        <ClienteConsulta atualizarConsulta={atualizarConsulta} />
      )}
    </div>
  );
};

export default ClienteMenu;
