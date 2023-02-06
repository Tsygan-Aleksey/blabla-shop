interface Config {
  params?: { [key: string]: any };
  prefix?: string;
  requestOptions?: { [key: string]: any };
}
export const request = (
  url: string,
  { params = {}, prefix = "/api", requestOptions }: Config = {}
) => {
  const urlParams = new URLSearchParams(params).toString();

  return fetch(`${prefix}/${url}?${urlParams}`, requestOptions).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("ERROR");
    }
  );
};


