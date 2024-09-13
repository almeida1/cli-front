import React from "react";
import ConsultaCliente from "../consulta/ClienteConsulta";

class ClienteMenu extends React.Component {
  state = {
    mostrarConsulta: false,
  };

  handleCadastrar = () => {
    // Lógica para cadastrar
    console.log("Cadastrar");
  };

  handleConsultar = () => {
    // Lógica para consultar
    console.log("Consultar");
    this.setState({ mostrarConsulta: true });
  };

  handleAlterar = () => {
    // Lógica para alterar
    console.log("Alterar");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleCadastrar}>Cadastrar</button>
        <button onClick={this.handleConsultar}>Consultar</button>
        <button onClick={this.handleAlterar}>Alterar</button>
        {this.state.mostrarConsulta && <ConsultaCliente />}
      </div>
    );
  }
}

export default ClienteMenu;
