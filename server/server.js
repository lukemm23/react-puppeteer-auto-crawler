const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');

// ******** scraper source files ********
const craigslistScrapers = require('./scrapers/craigslist.scrapers');
const FBScrapers = require('./scrapers/fbMarketplace.scrapers');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
// app.use('/api/user', userRouter);

// ******** scraper interval  ********
let interval1 = function() {
  console.log('Craigslist interval');

  //CL GET
  craigslistScrapers().then(data => {
    app.get('/CL/data', (req, res) => {
      // console.log('GET craigslist', data);
      res.send(data);
    });
  });

  //FB GET
  FBScrapers().then(data => {
    app.get('/FB/data', (req, res) => {
      // console.log('GET facebook', data);
      res.send(data);
    });
  });
};

interval1();
setInterval(interval1, 1000 * 60 * 5);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
