import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import App from "./App";
import Menu from "./componentes/menu/ClienteMenu";

test("ct01-verifica o comportamento do sistema na renderizacao da tela menu", () => {
  render(<App />);
  const textElement = screen.getByText(/gestão de clientes/i);
  expect(textElement).toBeInTheDocument();
});

test("ct02- verifica o envio da msg de erro quando CPF está em branco ao submeter o formulário", async () => {
  render(<Menu />);

  // Localiza o botão "Cadastrar"
  const submitButton = screen.getByText("Cadastrar");

  // Clica no botão de cadastrar sem preencher o campo CPF
  fireEvent.click(submitButton);

  // Verifica se a entrada esta invalida
  const cpfInput = screen.getByLabelText("CPF:");
  expect(cpfInput).toBeInvalid(); // Verifica se o campo está inválido
});
test("ct03 - cadastrar cliente com sucesso", async () => {
  // dado que o cliente nao esta cadastrado
  render(<Menu />);
  // Localiza o botão "Cadastrar"
  const submitButton1 = screen.getByText("Cadastrar");
  fireEvent.click(submitButton1);
  // quando entro com os dados e confirmo a operacao
  // simula a entrada de dados nos campos de CPF, nome e CEP
  fireEvent.change(screen.getByLabelText("CPF:"), {
    target: { value: "08159711093" },
  });
  fireEvent.change(screen.getByLabelText("Nome:"), {
    target: { value: "Jose da Silva" },
  });
  fireEvent.change(screen.getByLabelText("CEP:"), {
    target: { value: "01310-930" },
  });

  // Localiza e clica no botão "Confirmar"
  const submitButton2 = screen.getByText("Confirmar");

  fireEvent.click(submitButton2);

  // Entao retorna mensagem de cliente cadastrado com sucesso
  const successMessage = await waitFor(() =>
    screen.getByText(/Cliente cadastrado com sucesso/)
  );

  // Verifica se a mensagem está presente no documento
  expect(successMessage).toBeInTheDocument();
});

test("ct04 - cadastrar cliente sem conexao com o backend", async () => {
  // dado que o backend nao esta conectado
  render(<Menu />);
  // Localiza o botão "Cadastrar"
  const submitButton1 = screen.getByText("Cadastrar");
  fireEvent.click(submitButton1);
  // quando entro com os dados e confirmo a operacao
  // simula a entrada de dados nos campos de CPF, nome e CEP
  fireEvent.change(screen.getByLabelText("CPF:"), {
    target: { value: "08159711093" },
  });
  fireEvent.change(screen.getByLabelText("Nome:"), {
    target: { value: "Jose da Silva" },
  });
  fireEvent.change(screen.getByLabelText("CEP:"), {
    target: { value: "01310-930" },
  });

  // Localiza e clica no botão "Confirmar"
  const submitButton2 = screen.getByText("Confirmar");

  fireEvent.click(submitButton2);

  // Entao retorna mensagem de falha na renderização assíncrona
  //const successMessage = await waitFor(() =>
  // screen.getByText(/Erro: falha no cadastro/)
  //);

  // Verifica se a mensagem está presente no documento
  //expect(successMessage).toBeInTheDocument();
});
