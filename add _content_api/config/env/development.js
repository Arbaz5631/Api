module.exports = {
  DB: process.env.DB || 'mongodb+srv://leewayhertz:leeway321@cluster0.inr8j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  PORT: process.env.PORT || '3002',
  IS_CONSOLE_LOG: process.env.IS_CONSOLE_LOG || 'true'
}
