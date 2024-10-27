import http from "k6/http";
import { check } from "k6";

export const options = {
  thresholds: {
    http_req_duration: ["p(95)<8"], // 95% das requisições devem ser menores que 8ms
  },
  stages: [
    { duration: "10s", target: 5 }, // Rampa até 50 usuários em 1 minuto
    { duration: "20s", target: 5 }, // Mantém 50 usuários por 2 minutos
    { duration: "10s", target: 0 }, // Reduz para 0 usuários
  ],
};

export default function () {
  const res = http.get("http://localhost:8080/api/v1/clientes/all");

  check(res, {
    "http_req_duration menor que 8ms": (r) => r.timings.duration < 8,
  });
}
