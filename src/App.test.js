import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ClienteMenu from "./componentes/menu/ClienteMenu"; // Supondo que ClienteMenu chama ClienteCadastrarView
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const textElement = screen.getByText(/gestão de clientes/i);
  expect(textElement).toBeInTheDocument();
});
test("Deve cadastrar um cliente com sucesso", async () => {
  // Renderizar o componente ClienteMenu
  render(<App />);

  // Simular o clique no botão "Cadastrar" para exibir o formulário de cadastro
  fireEvent.click(screen.getByText("Cadastrar"));

  // Preencher os campos do formulário com os valores de teste
  fireEvent.change(screen.getByLabelText(/CPF:/i), {
    target: { value: "86144226109" },
  });
  fireEvent.change(screen.getByLabelText(/Nome:/i), {
    target: { value: "Jose da Silva" },
  });
  fireEvent.change(screen.getByLabelText(/CEP:/i), {
    target: { value: "01310-930" },
  });

  // Submeter o formulário
  fireEvent.click(screen.getByText("Confirmar"));

  // Usar 'findByTestId' para esperar a mensagem de sucesso
  const mensagem = await screen.findByTestId("mensagem");

  // Verificar se a mensagem de sucesso foi exibida
  expect(mensagem).toHaveTextContent("Cliente cadastrado com sucesso");
});
