import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { logo } from "./assets";

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        {/* SEO */}
        <title>NB web - Création de sites internet</title>
        <meta
          name="description"
          content="NB web, développeur web expert dans la création de sites internet à Bulgnéville, Contrexéville, Vittel, Mirecourt, Neufchâteau et aux alentours !"
          data-rh="true"
        />
        <meta
          name="keywords"
          content="nb web, NB web, création de site web dans les vosges, sites vitrine,site e-commerce, Contrexéville, Bulgnéville,
          Vittel, Mirecourt, Neufchâteau, Nael Boulayoune, sites web, sites internet, développeur web"
        />
        <link rel="canonial" href="/" />
        {/* Open Graph  */}
        <meta property="og:type" content="photo" />
        <meta
          property="og:title"
          content="NB web - Création de sites internet"
        />
        <meta
          property="og:description"
          content="NB web, développeur web expert dans la création de sites internet dans les Vosges et aux alentours !"
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://nb-web.fr" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="fb:app_id" content="789254692731694" />
      </Helmet>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
