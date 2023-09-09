export const getRequest = (url: string) => ({
  url,
});

export const POST = (url: string, body: any) => ({
  url,
  method: "POST",
  body,
});
