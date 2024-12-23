const ClienteCadastrar = async (cliente) => {
  try {
    const response = await fetch("http://localhost:8081/api/v1/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cliente),
    });

    if (!response.ok) {
      console.log("erro detectado no fetch =>", response);
      throw new Error("dados inválidos ");
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
export default ClienteCadastrar;
