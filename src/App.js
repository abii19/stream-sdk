import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import WebLayout from "./components/layouts/WebLayout";
import HomePage from "./components/pages/HomePage";
import ProfilePage from "./components/pages/ProfilePage";
import StartSurfingPage from "./components/pages/StartSurfingPage";

const PageNotFound = () => {
  return (
    <>
      <div className="h-screen w-screen grid place-items-center">
        Page Not Found
      </div>
    </>
  );
};

const App = () => {
  const { isPackageBought } = useSelector((state) => state.packages);

  return (
    <>
      <WebLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/start-surfing">
            {isPackageBought ? <StartSurfingPage /> : <HomePage />}
          </Route>
          <Route path="*" render={PageNotFound} />
        </Switch>
      </WebLayout>
    </>
  );
};

export default App;
