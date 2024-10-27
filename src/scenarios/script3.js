import http from "k6/http";
import { check } from "k6";

export const options = {
  thresholds: {
    http_req_duration: ["avg<1200"], // criterio de sucesso tempo médio <1.20s (1200ms)
  },
  stages: [
    { duration: "10s", target: 5 }, // Rampa aumenta gradualmente ate atingir 5 usuários
    { duration: "20s", target: 5 }, // Durante os proximos 20s mantém 5 usuários
    { duration: "10s", target: 0 }, // Reduz gradualmente para 0 usuários
  ],
};

export default function () {
  const res = http.get("http://localhost:8080/api/v1/clientes/all");

  check(res, {
    "http_req_duration menor que 1.20s": (r) => r.timings.duration < 1200,
  });
}
