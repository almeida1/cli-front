import http from "k6/http";
import { check, sleep } from "k6";

function GetClientes() {
  const res = http.get(
    "https://cli-back-da94521f4063.herokuapp.com/api/v1/clientes/all"
  );
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
  sleep(1);
}
export default GetClientes;
