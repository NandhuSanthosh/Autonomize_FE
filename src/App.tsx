import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import "./App.css";
import { persister, store } from "./store/store";
import RoutesWrapper from "./routes/RoutesWrapper";
import ToastWrapper from "./shared/components/Toast/ToastWrapper";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<PersistGate loading={null} persistor={persister}>
					<ToastWrapper>
						<RoutesWrapper />
					</ToastWrapper>
				</PersistGate>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
