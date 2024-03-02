import { members, officials } from './accounts';

export type Officials = (typeof officials)[number];
export type Members = (typeof members)[number];
