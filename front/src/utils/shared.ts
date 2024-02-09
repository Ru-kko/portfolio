export class EnviromentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EnviromentError";
  }
}

export function getEnv(env: string): string {
  if (!import.meta.env[env]) {
    throw new EnviromentError(
      "Cannot find " + env + " variable, please set it in ~/.env"
    );
  }
  return import.meta.env[env] as string;
}

export class UnmacheableEmail extends Error {
  constructor(public email: string) {
    super("Cant mach that email");
    this.name = "UnmacheableEmail";
  }
}

export const emailExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
