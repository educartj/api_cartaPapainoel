import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (host = 'database_cartanoel'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  // pelo host
  // return createConnection(
  //   Object.assign(defaultOptions, {
  //     database:
  //       process.env.NODE_ENV === 'test'
  //         ? 'api_test'
  //         : defaultOptions.database,
  //   }),
  // );
  // pelo docker
  return createConnection(
    Object.assign(defaultOptions, {
      host: process.env.NODE_ENV === 'test' ? 'localhost' : host,

      database:
        process.env.NODE_ENV === 'test' ? 'api_test' : defaultOptions.database,
    }),
  );
};
