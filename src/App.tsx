import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, SigninPage, SignupPage, Test } from "./pages";
import { ProtectedRoute } from "./components";
import { useLocalStorage } from "./hooks";
import { AuthProvider } from "./hooks/AuthContext";

function App() {
	const { getData } = useLocalStorage();
	const user = getData("user");

	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route
						index
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/test"
						element={
							<ProtectedRoute>
								<Test />
							</ProtectedRoute>
						}
					/>

					<Route
						path="/sign-in"
						// element={<SigninPage />}
						element={
							user ? (
								<Navigate to="/" />
							) : (
								<SigninPage />
							)
						}
					/>
					<Route
						path="/sign-up"
						// element={<SignupPage />}
						element={
							user ? (
								<Navigate to="/" />
							) : (
								<SignupPage />
							)
						}
					/>
					<Route
						path="*"
						element={<Navigate to="/" />}
					/>
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
