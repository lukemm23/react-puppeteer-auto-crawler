import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        auto crawler is a application create as solo project that performs web
        scrape over various sites advertising second hand vehicles for sale for
        sales information and analyze the data and rate each deal.
      </p>
    </div>
  </div>
);

export default AboutPage;
