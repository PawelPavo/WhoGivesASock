import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationDesktop from './components/NavigationDesktop';
import NavigationBar from './components/Navigation';
import About from './views/About';
import Blog from './views/Blog';
import Donate from './views/Donate';
import Home from './views/Home';
import Partners from './views/Partners';

const App = (props: AppProps) => {

	const [width, setWidth] = React.useState<number>(window.innerWidth);
	const breakpoint = 576;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

	return (
		<BrowserRouter>
			{ width < breakpoint ? <NavigationBar  /> : <NavigationDesktop />}
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/blog">
					<Blog />
				</Route>
				<Route exact path="/partners">
					<Partners />
				</Route>
				<Route exact path="/donate">
					<Donate />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
			</Switch>

		</BrowserRouter>
	)
};

interface AppProps { }

export default App;
