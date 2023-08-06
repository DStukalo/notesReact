import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '~components/Layout/Layout';
import { NotFoundPage } from '~pages/404/404';
import { MainPage } from '~pages/MainPage/MainPage';
import { TypePage } from '~pages/TypePage/TypePage';
import { setupStore } from '~store/store';

const store = setupStore();

export const routesConfig = [
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{ index: true, element: <MainPage /> },
			{ path: '/type/:type', element: <TypePage /> },
		],
	},
];

const router = createBrowserRouter(routesConfig);

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
