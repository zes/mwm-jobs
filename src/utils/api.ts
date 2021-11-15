export async function fetchData(url: string): Promise<any> {
  const response = await fetch(url);
  if (response.status >= 200 && response.status <= 299) {
    return await response.json();
  } else {
    throw new Error(`An error has occured: ${response.status}`);
  }
}
