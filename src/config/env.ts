import 'dotenv/config';

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  baseUrl: required('BASE_URL'),
  username: required('ORANGEHRM_USERNAME'),
  password: required('ORANGEHRM_PASSWORD'),
};
