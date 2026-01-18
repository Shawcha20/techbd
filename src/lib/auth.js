// Mock authentication credentials
const VALID_EMAIL = "demouser@example.com";
const VALID_PASSWORD = "password123";

export const validateCredentials = (email, password) => {
  return email === VALID_EMAIL && password === VALID_PASSWORD;
};

export const setAuthCookie = (email) => {
  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 24);
  
  document.cookie = `auth_user=${encodeURIComponent(email)}; path=/; expires=${expirationDate.toUTCString()}`;
  document.cookie = `auth_token=authenticated; path=/; expires=${expirationDate.toUTCString()}`;
};

export const getAuthCookie = () => {
  if (typeof document === "undefined") return null;
  
  const cookies = document.cookie.split(";");
  const authCookie = cookies.find((cookie) =>
    cookie.trim().startsWith("auth_token=")
  );
  
  return authCookie ? true : false;
};

export const getAuthUser = () => {
  if (typeof document === "undefined") return null;
  
  const cookies = document.cookie.split(";");
  const userCookie = cookies.find((cookie) =>
    cookie.trim().startsWith("auth_user=")
  );
  
  if (userCookie) {
    return decodeURIComponent(userCookie.split("=")[1]);
  }
  
  return null;
};

export const clearAuthCookie = () => {
  document.cookie = "auth_user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
};
