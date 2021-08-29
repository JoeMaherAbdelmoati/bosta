import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {NotificationContainer} from 'react-notifications';
import {Helmet} from "react-helmet";

import Header from "./components/Header";
import UnderConstructionPage from "./components/UnderConstructionPage";
import Footer from "./components/Footer";
import TrackShipmentPage from "./components/TrackShipment/TrackShipmentPage";
import TrackShipmentDetails from "./components/TrackShipment/TrackShipmentDetails";
import {addArToBody} from "./utilities/helper";

function App() {
  const [t, i18n] = useTranslation();
  useEffect(() => {
    const language = localStorage.getItem('otherLangKey');
    if (language) {
      addArToBody(language === 'ar');
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return (
    <Router>
      <Helmet>
        <title>{t('pageTitle')}</title>
      </Helmet>
      <div className={i18n.language === 'ar' ? 'ar' : ''}>
        <Header/>
        <Switch>
          <Route path='/pricing'>
            <UnderConstructionPage pageName={'header.pricing'}/>
          </Route>
          <Route path='/contactSale'>
            <UnderConstructionPage pageName={'header.contactSale'}/>
          </Route>
          <Route path='/signin'>
            <UnderConstructionPage pageName={'header.signIn'}/>
          </Route>
          <Route path='/trackShipment' exact>
            <TrackShipmentPage/>
          </Route>
          <Route path='/trackShipment/:id'>
            <TrackShipmentDetails/>
          </Route>
          <Route path='/'>
            <UnderConstructionPage pageName={'header.home'}/></Route>
        </Switch>
      </div>
      <Footer/>
      <NotificationContainer/>
    </Router>
  );
}

export default App;
