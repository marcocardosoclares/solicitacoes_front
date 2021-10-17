export function FETCH_IC(apiRoute, body) {
  return {
    url: `/api/${apiRoute}`,
    options: body
  }
}

export function FETCH_RUD(apiRoute, id,body) {
  return {
    url: `/api/${apiRoute}/${id}`,
    options: body
  }
}

export function FETCH_EDIT(apiRoute, id) {
  return {
    url: `/api/${apiRoute}/${id}/edit`
  }
}

export function FETCH_SEARCH(apiRoute,body) {
  return {
    url: `/api/${apiRoute}/search`,
    options: body
  }
}

export function FETCH_TOKEN() {
  return {
    url: "/sanctum/csrf-cookie",
  }
}