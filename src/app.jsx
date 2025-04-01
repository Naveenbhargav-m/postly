import { useState } from 'preact/hooks'
import './app.css'


import { LocationProvider,ErrorBoundary, Router, Route } from 'preact-iso';
import AuthScreens from './auth/authScreens';
import SocialOnboarding from './configs/configs';
import SocialMediaScheduler from './creator/creator';


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
    <LocationProvider>
		<ErrorBoundary>
			<Router>
				<Route path="/" component={AuthScreens} />
        <Route path='/setup' component={SocialOnboarding} />
        <Route path='/posts' component={SocialMediaScheduler} />
			</Router>
		</ErrorBoundary>
	</LocationProvider>
    
    </>
  )
}
