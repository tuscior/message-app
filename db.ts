export const startDatabase = (URL: string, db) => {
    const options = {
      bufferMaxEntries: 0,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  
    const connectWithRetry = () => {
      console.log('MongoDB connection with retry')
      db.connect(URL, options)
        .then(()=>{
        console.log('MongoDB is connected')
      }).catch(err=>{
        console.log('MongoDB connection unsuccessful, retry after 5 seconds.')
        setTimeout(connectWithRetry, 5000)
      })
    }
    connectWithRetry();

    return () =>
      db.connection
        .close()
        .catch(err => console.log(`Error disconnecting from DB: ${err}`))
        .finally(() => console.log('Disconnected from DB'));
}