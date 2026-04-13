import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/lib/AuthContext";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Platforms from "@/pages/Platforms";
import PlatformDetail from "@/pages/PlatformDetail";
import Languages from "@/pages/Languages";
import LanguageDetail from "@/pages/LanguageDetail";
import Alumni from "@/pages/Alumni";
import AlumniDetail from "@/pages/AlumniDetail";
import Competitions from "@/pages/Competitions";
import CompetitionDetail from "@/pages/CompetitionDetail";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Placeholder from "@/pages/Placeholder";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/signup">
        {() => <Login initialMode="signup" />}
      </Route>
      <Route path="/platforms" component={Platforms} />
      <Route path="/platforms/:slug" component={PlatformDetail} />
      <Route path="/languages" component={Languages} />
      <Route path="/languages/:slug" component={LanguageDetail} />
      <Route path="/alumni" component={Alumni} />
      <Route path="/alumni/:slug" component={AlumniDetail} />
      <Route path="/competitions" component={Competitions} />
      <Route path="/competitions/:slug" component={CompetitionDetail} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route>
        {() => <Placeholder title="Page Not Found" />}
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
