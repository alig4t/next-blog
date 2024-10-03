'use server';

import prismadb from '@/libs/prismadb';
import { hash } from 'bcrypt';

export const CreateUserAction = async (formData: FormData) => {
  console.log(formData);

  const { name, email, password } = Object.fromEntries(formData);
  const hashedPassword = await hash(password as string, 12);

  try {
    const user = await prismadb.user.create({
      data: {
        name: name as string,
        email: email as string,
        hashedPassword,
      },
    });
    if (!user) return { success: false };
    return { success: true };
  } catch (error) {
    console.log(CreateUserAction, error);
  }
};

export const CheckUserExist = async (formData: FormData) => {
  try {
    const { email } = Object.fromEntries(formData);
    const user = await prismadb.user.findUnique({
      where: {
        email: email as string,
      },
    });
    if (!user) return false;
    return true;
  } catch (error) {
    console.log(CheckUserExist, error);
  }
};
