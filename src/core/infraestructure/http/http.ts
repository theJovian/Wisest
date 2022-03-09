// /src/infrastructure/http/http.ts
const headers = {
  'Content-Type': 'application/json',
};

const base = 'http://ec2-13-38-81-126.eu-west-3.compute.amazonaws.com/api/';

const get = async <T>(url: string) => {
  const response = await fetch(base + url, {
    method: 'GET',
    headers,
  });
  return (await response.json()) as T;
};

const post = async <T>(url: string, body: any) => {
  const response = await fetch(base + url, {
    method: 'POST',
    headers,
    body,
  });
  return (await response.json()) as T;
};

const put = async <T>(url: string, body: any) => {
  const response = await fetch(base + url, {
    method: 'PUT',
    headers,
    body,
  });
  return (await response.json()) as T;
};

const _delete = async <T>(url: string) => {
  const response = await fetch(base + url, {
    method: 'DELETE',
    headers,
  });
  return (await response.json()) as T;
};

export const http = {
  get,
  post,
  put,
  delete: _delete,
};
