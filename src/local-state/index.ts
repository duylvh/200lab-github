import { makeVar } from "@apollo/client";

export type Repository = {
  name: string;
  owner: string;
  id: string;
};

export const repoState = makeVar<Repository | null>(null);
