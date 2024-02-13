export class EnviromentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EnviromentError";
  }
}

export function getEnv(env: string): string {
  const enviroment = import.meta.env[env] ?? process.env[env];
  if (!enviroment) {
    console.warn("Cannot find " + env + " variable, please set it in ./.env");
  }
  return enviroment as string;
}

export class UnmacheableEmail extends Error {
  constructor(public email: string) {
    super("Cant mach that email");
    this.name = "UnmacheableEmail";
  }
}

export const emailExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
