// /src/infrastructure/http/http.ts
const headers = {
  'Content-Type': 'application/json',
};

const base = 'https://www.wisest.rocks/api/';

const get = async <T>(url: string) => {
  const response = await fetch(base + url, {
    method: 'GET',
    headers,
  });
  return (await response.json()) as T;
};

const post = async (url: string, body: any) => {
  const response = await fetch(base + url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
  return response.text();
};

const put = async <T>(url: string, body: any) => {
  const response = await fetch(base + url, {
    method: 'PUT',
    headers,
    body,
  });
  return (await response.json()) as T;
};

const _delete = async (url: string, body?: any) => {
  const response = await fetch(base + url, {
    method: 'DELETE',
    headers,
    body: JSON.stringify(body),
  });
  return response.text();
};

export const http = {
  get,
  post,
  put,
  delete: _delete,
};
