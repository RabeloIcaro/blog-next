export const fetchJson = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(`${url}`);
  console.log(url);
  const jsonData = await rawData.json();
  return jsonData;
};
