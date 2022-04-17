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
  return [await response.json(), response.status];
};

const put = async (url: string, body: any) => {
  const response = await fetch(base + url, {
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
  });
  return response.text();
};

const _delete = async (url: string, body?: any) => {
  const response = await fetch(base + url, {
    method: 'DELETE',
    headers,
    body: JSON.stringify(body),
  });
  return response.text();
};

const postImage = async (body: any) => {
  const formData = new FormData();
  formData.append('file', body);
  formData.append('upload_preset', 'wisest');
  const response = await fetch(
    'https://api.cloudinary.com/v1_1/wisest/image/upload',
    {
      method: 'POST',
      body: formData,
    },
  );
  return await response.json();
};

export const http = {
  get,
  post,
  put,
  delete: _delete,
  postImage,
};
