import { durableWritable } from "./durable-store";

export const sum = durableWritable<number>('sum', 0);
