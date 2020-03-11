const urlDB = 'mongodb+srv://admin:admin@cluster0-k9gxz.mongodb.net/chatTest?retryWrites=true&w=majority';


const port = process.env.PORT || 3001;

module.exports = {
    urlDB,
    port
}