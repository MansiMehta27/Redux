import { Route, Switch } from "react-router-dom";
import Layout from "./Componet/Layout/Layout";
import Category from "./Containers/Category/Category";
import { Provider } from 'react-redux'
import { configurstore } from "./Redux/Store";
import Product from "./Containers/Product/Product";
function App() {
  const store = configurstore();
  return (
    <>
      <Provider store={store}>


        <Layout>
          <Switch>

            <Route exact path={"/category"} component={Category} />
            <Route exact path={"/product"} component={Product} />

          </Switch>

        </Layout>
      </Provider>

    </>
  );
}

export default App;
