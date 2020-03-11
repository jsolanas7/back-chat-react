const urlDB = 'mongodb+srv://admin:admin@cluster0-k9gxz.mongodb.net/chatNode?retryWrites=true&w=majority';


const port = process.env.PORT || 3001;

//==========================
//{{Lifetime token}}
//==========================

process.env.TOKEN_LIFE = process.env.TOKEN_LIFE || 60 * 0 * 0 * 0;

//==========================
//{{SEED}}
//==========================

process.env.SEED = process.env.SEED || 'este-es-el-seed-dev';

module.exports = {
    urlDB,
    port
}