const fetchApi = async (
  path: string,
  requestData: RequestInit,
  onUnauthorized: () => any
) => {
  const data = await fetch(path, requestData);
  const json = await data.json();

  if ("error" in json) {
    if (json.error == "Unauthorized.") onUnauthorized();
    throw new Error(json.error);
  }

  return json;
};

export default fetchApi;
