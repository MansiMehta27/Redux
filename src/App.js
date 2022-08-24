import { Route, Switch } from "react-router-dom";
import Layout from "./Componet/Layout/Layout";
import Doctors from "./Containers/Doctors/Doctors";
import Medisin from "./Containers/Medisin/Medisin";
import Fmedisin from "./Containers/Medisinformik/Fmedisin";
import { Provider } from 'react-redux'
import Counter from "./Redux/Reducer/Counter";
import { configurstore } from "./Redux/Store";
import PromiseExample from "./Containers/PromiseExample/PromiseExample";
import UseHookExample from "./Containers/UseHookExample/UseHookExample";
import UseCallbackExample from "./Containers/UseHookExample/UseCallbackExample";



function App() {
  const store = configurstore();
  return (
    <>
      <Provider store={store}>


        <Layout>
          <Switch>
            <Route exact path={"/medisin"} component={Medisin} />
            <Route exact path={"/doctors"} component={Doctors} />
            <Route exact path={"/fmedicine"} component={Fmedisin} />
            <Route exact path={"/Counter"} component={Counter} />
            <Route exact path={"/Promiseexample"} component={PromiseExample} />
            <Route exact path={"/usehookexample"} component={UseHookExample} />
            <Route exact path={"/usecallbackexample"}component={UseCallbackExample}/>
            
          </Switch>

        </Layout>
      </Provider>
      
    </>
  );
}

export default App;
