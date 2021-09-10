import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  // pelo host
  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === 'test' ? 'api_test' : defaultOptions.database,
    }),
  );
};
