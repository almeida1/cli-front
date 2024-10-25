import { check, sleep } from "k6";
import http from "k6/http";

export default function () {
  const res = http.get("http://localhost:8080/api/v1/clientes/all");
  check(res, {
    "is status 200": (r) => r.status === 200,
  });
  sleep(1);
}
