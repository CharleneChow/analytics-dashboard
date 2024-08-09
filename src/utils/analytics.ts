// api design use class is better
import { redis } from "@/lib/redis";

type AnalyticsArgs = {
  retention?: number;
};
export class Analytics {
  static track(
    arg0: string,
    arg1: { page: string; country: string | undefined }
  ) {
    throw new Error("Method not implemented.");
  }
  private retention: number = 60 * 60 * 24 * 7;
  // default internal expired time: 1 week

  constructor(opts?: AnalyticsArgs) {
    if (opts?.retention) {
      this.retention = opts.retention;
    }
  }
  async track(namespace: string, event: object = {}) {
    const key = `analytics::${namespace}`;
    // db call to persist this event
    await redis.hincrby(key, JSON.stringify(event), 1);
  }
}

export const analytics = new Analytics();
