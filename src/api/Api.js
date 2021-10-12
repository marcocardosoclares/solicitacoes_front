export function ESPECIALIDADES() {
  return {
    url: "/api/especialidades",
  }
}

export function SOLICITACOES() {
  return {
    url: "/api/solicitacoes",
  }
}

export function SOLICITACOES_STORE(body) {
  return {
    url: "/api/solicitacoes",
    options: body
  }
}

export function SOLICITACOES_EDIT(id) {
  return {
    url: `/api/solicitacoes/${id}/edit`
  }
}

export function SOLICITACOES_SEARCH(body) {
  return {
    url: "/api/solicitacoes/search",
    options: body
  }
}

export function GET_ROLES() {
  return {
    url: "/api/perfis",
  }
}

export function GET_USER() {
  return {
    url: "/api/user",
  }
}

export function PASSWORD_LOST(body) {
  return {
    url: "/api/forgot-password",
    options: body,
  }
}

export function PASSWORD_RESET(body) {
  return {
    url: "/api/reset-password",
    options: body
  }
}

export function QUESTIONARIO_FORM(body) {
  return {
    url: "/api/questionario-form",
    options: body
  }
}

export function QUESTIONARIO_RESPOSTAS() {
  return {
    url: "/api/questionario-respostas",
  }
}

export function QUESTIONARIO_RESPOSTAS_STORE(body) {
  return {
    url: "/api/questionario-respostas",
    options: body
  }
}

export function RESPOSTAS(body) {
  return {
    url: `/api/respostas`,
    options: body
  }
}

export function RESPOSTAS_STORE(body) {
  return {
    url: "/api/respostas",
    options: body
  }
}

export function SUB_QUESTOES(body) {
  return {
    url: "/api/sub-questoes",
    options: body
  }
}

export function TOKEN_POST() {
  return {
    url: "/sanctum/csrf-cookie",
  }
}

export function USER_LOGIN(body) {
  return {
    url: "/api/login",
    options: body
  }
}

export function USER_LOGOUT() {
  return {
    url: "/api/logout",
  }
}