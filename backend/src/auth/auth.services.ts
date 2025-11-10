import { registerUser, loginUser } from "./auth.repository";

export const registerUserServices = async (
  name: string,
  email: string,
  password: string
) => {
  const user = await registerUser(name, email, password);
  return user;
};

export const loginUserServices = async (email: string, password: string) => {
  const data = await loginUser(email, password);
  return data;
};
