import React, { useState } from "react";
import ClienteConsulta from "../consulta/ClienteConsulta";
import ClienteCadastrarView from "../cadastrar_cliente/ClienteCadastrarView";

const ClienteMenu = () => {
  const [view, setView] = useState(null); // Estado para controlar a tela atual
  const [atualizarConsulta, setAtualizarConsulta] = useState(0);

  const handleCadastrar = () => {
    setView("cadastrar"); // Exibe o formulário de cadastro
  };

  const handleConsultar = () => {
    setView("consultar"); // Exibe a tela de consulta
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

      {/* Exibe a view de acordo com o estado */}
      {view === "cadastrar" && <ClienteCadastrarView />}
      {view === "consultar" && (
        <ClienteConsulta atualizarConsulta={atualizarConsulta} />
      )}
    </div>
  );
};

export default ClienteMenu;
