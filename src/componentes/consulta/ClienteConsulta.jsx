import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ClienteView from "./ClienteView";
import "./ClienteStyles.css";

const ClienteConsulta = ({ atualizarConsulta }) => {
  const [clientes, setClientes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCliente = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://cli-back-da94521f4063.herokuapp.com/api/v1/clientes/all"
          // Alterar a URL para a API de clientes - "http://localhost:8080/api/v1/clientes/all"
        );
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Realiza a consulta sempre que o valor de 'atualizarConsulta' mudar
    fetchCliente();
  }, [atualizarConsulta]);

  return (
    <div>
      {loading && <div>Carregando...</div>}
      {error && <div>Erro: {error}</div>}
      {clientes ? (
        <ClienteView clientes={clientes} />
      ) : (
        <div>Nenhum cliente encontrado</div>
      )}
    </div>
  );
};

// Validar a prop
ClienteConsulta.propTypes = {
  atualizarConsulta: PropTypes.number.isRequired,
};

export default ClienteConsulta;
