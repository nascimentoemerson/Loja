const CadastroContext = {
  cadastroEndPoint: () => `${Api.baseUrl}/api`,
  cadastroLista: () => `${CadastroContext.cadastroEndPoint()}/all-cadastros`,
  cadastroById: (id) =>
    `${CadastroContext.cadastroEndPoint()}/one-cadastro/${id}`,
  createcadastro: () => `${CadastroContext.cadastroEndPoint()}/create-cadastro`,
  updatecadastroById: (id) =>
    `${CadastroContext.cadastroEndPoint()}/update-cadastro/${id}`,
  deletecadastroById: (id) =>
    `${CadastroContext.cadastroEndPoint()}/delete-cadastro/${id}`,
};

export const Api = {
  baseUrl: "http://127.0.0.1:5173",
  ...CadastroContext,
};
