const ClienteCadastrar = async (cliente) => {
  try {
    const response = await fetch(
      //"http://localhost:8080/api/v1/clientes",
      "https://cli-back-da94521f4063.herokuapp.com/api/v1/clientes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
      }
    );

    if (!response.ok) {
      throw new Error("Falha ao cadastrar cliente");
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
export default ClienteCadastrar;
