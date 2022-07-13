import { Route,Switch } from "react-router-dom";
import Layout from "./Componet/Layout/Layout";
import Doctors from "./Containers/Doctors/Doctors";
import Medisin from "./Containers/Medisin/Medisin";
import Fmedisin from "./Containers/Medisinformik/Fmedisin";
import { Provider } from 'react-redux'
import Counter from "./Redux/Reducer/Counter";
import { configurstore } from "./Redux/Store";
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  const {store, persistor} = configurstore();
  return (
  <>
  <Provider store={store}>

  <PersistGate loading={null} persistor={persistor}>
        <Layout>
                        <Switch>
                          <Route exact path={"/medisin"}component={Medisin}/>
                          <Route exact path={"/doctors"}component={Doctors}/>
                          <Route exact path={"/fmedicine"}component={Fmedisin}/>
                          <Route exact path={"/Counter"}component={Counter}/>
                        </Switch>

        </Layout>
        </PersistGate>
   </Provider>
  </>
  );
}

export default App;
