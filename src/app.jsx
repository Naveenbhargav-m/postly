import './app.css'


import { LocationProvider,ErrorBoundary, Router, Route } from 'preact-iso';
import { useSignal } from '@preact/signals';
import AuthScreens from './auth/authScreens';
import SocialOnboarding from './configs/configs';
import SocialMediaScheduler from './creator/creator';
import SubscriptionBillingScreen from './billing/billing';
import UserProfileSettingsScreen from './profile/profile';
import Sidebar from './components/sidebar';

function EnableSideBar(url) {
  console.log("");
} 

export function App() {
  let isSidebar = useSignal(true);
  return (
    <>   
    <LocationProvider>
		<ErrorBoundary>
      <div className="flex bg-white">
      {
        isSidebar.value ?   <Sidebar /> : <span></span>
      }
      <main className="bg-white flex flex-col items-center" style={{"height":"100vh", width:"100vw"}}>
        <Router
         onRouteChange={(url) => console.log('Route changed to', url)}
         onLoadStart={(url) => console.log('Starting to load', url)}
         onLoadEnd={(url) => console.log('Finished loading', url)}
        >
          <Route path="/" component={AuthScreens} />
          <Route path='/setup' component={SocialOnboarding} />
          <Route path='/posts' component={SocialMediaScheduler} />
          <Route path='/billing' component={SubscriptionBillingScreen} />
          <Route path='/profile' component={UserProfileSettingsScreen} />
        </Router>
        </main>
        </div>
		</ErrorBoundary>
	</LocationProvider>
    
    </>
  )
}
