  // This file configures the initialization of Sentry on the server.
  // The config you add here will be used whenever the server handles a request.
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/

  import * as Sentry from "@sentry/nextjs";

  Sentry.init({
    dsn: "https://1193da908dcad83a70d15afa2d86349f@o4508443087994880.ingest.us.sentry.io/4508479189155840",

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  });
