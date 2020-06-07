export const startDatabase = (URL: string, db) => {
    db.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    
    db.connection.on('connected', function() {
      console.log(`Mongoose connected to ${URL}`);
    });
    
    db.connection.on('error', function(err) {
      console.log(`Mongoose error: ${err}`);
    });
    return () =>
      db.connection
        .close()
        .catch(err => console.log(`Error disconnecting from DB: ${err}`))
        .finally(() => console.log('Disconnected from DB'));
}