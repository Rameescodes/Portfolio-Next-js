import * as Sentry from "@sentry/nextjs";
import { Replay } from "@sentry/replay";

Sentry.init({
  dsn: "https://1193da908dcad83a70d15afa2d86349f@o4508443087994880.ingest.us.sentry.io/4508479189155840",
  integrations: [
    new Replay(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: true,
});