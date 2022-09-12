type FindQueryParams<T> = {
  [P in keyof T]?: T[P];
};

export type FindOne<T = unknown> = {
  where?: FindQueryParams<T>;
};
