import React, { useState, useEffect } from "react";
import ClienteView from "./ClienteView";

const ClienteConsulta = () => {
  const [clientes, setClientes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const response = await fetch(
          "https://cli-back-998bc5582c3e.herokuapp.com/api/v1/clientes/all"
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

    fetchCliente();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return clientes ? (
    <ClienteView clientes={clientes} />
  ) : (
    <div>Nenhum cliente encontrado</div>
  );
};

export default ClienteConsulta;
