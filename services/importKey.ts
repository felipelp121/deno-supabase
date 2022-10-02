export const importKey = async (encodedJWK: string) => {
  const jwk = JSON.parse(atob(encodedJWK));
  const key = await crypto.subtle.importKey(
    "jwk",
    jwk,
    {
      name: "HMAC",
      hash: "SHA-512",
    },
    true,
    ["sign", "verify"],
  );

  return key;
};
