import { Api } from "/src/helpers/Api";

const parseResponse = (response) => response.json();

export const cadastroService = {
  getLista: () =>
    fetch(Api.cadastroLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.cadastroById(id), { method: "GET" }).then(parseResponse),
  create: () =>
    fetch(Api.createcadastro(), { method: "POST" }).then(parseResponse),
  updateById: (id) =>
    fetch(Api.updatecadastroById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deletecadastroById(id), { method: "DELETE" }).then(parseResponse),
};
