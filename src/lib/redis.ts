import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://star-sole-58897.upstash.io",
  token: process.env.REDIS_KEY!,
  // 使用感叹号告诉编译器对象不是 null undefined
  // 便于阅读代码
});

