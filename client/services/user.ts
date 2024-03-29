import { UserType } from "@/types/mongoTypes";
import { RegisterFormData, SignInFormData } from "@/types/typings";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`;

export const registerService = async (
  formData: RegisterFormData
): Promise<UserType> => {
  const response = await fetch(`${API_BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
  return responseBody;
};

export const signInService = async (formData: SignInFormData): Promise<UserType> => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(responseBody.message);
  }
  return responseBody;
};


export const signOutService = async () => {
  const response = await fetch(`${API_BASE_URL}/auth/logout`, {
    credentials: "include",
  });

  const responseBody = await response.json()

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};
