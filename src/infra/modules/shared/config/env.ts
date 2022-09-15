export const configEnvironment = () => {
  const envs = {
    TIMEZONE: null,
    PORT: null,
    DB_HOST: null,
    DB_PORT: null,
    DB_USER: null,
    DB_PASS: null,
    DB_NAME: null,
    JWT_SECRET: null,
  };

  Object.keys(envs).forEach((env) => {
    if (!process.env[env]) {
      throw new Error(`Environment "${env}" not loaded`);
    }
    envs[env] = process.env[env];
  });

  return envs;
};
