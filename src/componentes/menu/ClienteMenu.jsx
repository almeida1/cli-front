import React, { useState } from "react";
import ClienteConsulta from "../consulta/ClienteConsulta";

const ClienteMenu = () => {
  const [mostrarConsulta, setMostrarConsulta] = useState(false);
  const [atualizarConsulta, setAtualizarConsulta] = useState(0);

  const handleCadastrar = () => {
    // Lógica para cadastrar
    console.log("Cadastrar");
  };

  const handleConsultar = () => {
    // Lógica para consultar
    console.log("Consultar");
    setMostrarConsulta(true);
    // Atualiza o estado 'atualizarConsulta' para forçar a consulta
    setAtualizarConsulta((prev) => prev + 1);
  };

  const handleAlterar = () => {
    // Lógica para alterar
    console.log("Alterar");
  };

  return (
    <div>
      <button onClick={handleCadastrar}>Cadastrar</button>
      <button onClick={handleConsultar}>Consultar</button>
      <button onClick={handleAlterar}>Alterar</button>
      {mostrarConsulta && (
        <ClienteConsulta atualizarConsulta={atualizarConsulta} />
      )}
    </div>
  );
};

export default ClienteMenu;
