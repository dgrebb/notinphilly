module.exports = {
  EMAIL_API_KEY: process.env.EMAIL_API_KEY || 'mailgun api key here',
  EMAIL_DOMAIN: process.env.EMAIL_DOMAIN || 'mailgun email domain here',
  MAP_BOX_USER: process.env.MAPBOX_USER || 'mapbox user here',
  MAP_BOX_API_KEY: process.env.MAP_BOX_API_KEY || "mapbox api key here",
  MAP_BOX_MAP_ID: process.env.MAP_BOX_MAP_ID || "mapbox map id",
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "google api key here",
  FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID || "Facebook api ID",
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || "Facebook APP secret",
  FACEBOOK_NAMESPACE: process.env.FACEBOOK_NAMESPACE || "facebook app namespace",
  FACEBOOK_CALLBACK_URL: process.env.FACEBOOK_CALLBACK_URL || "http://localhost:" + httpPort + "/api/facebook/callback"
};