export const config = {
    DB_URL: process.env.DB_URL || 'mongodb://mongo:27017',
    PORT: process.env.PORT || 8080,
    VERSION: process.env.VERSION || '1.0.0',
    REQUEST_LIMIT: 25
}
