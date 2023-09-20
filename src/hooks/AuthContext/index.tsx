import { useState, createContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }: any) => {
	const [authToken, setAuthToken] = useState({});

	return (
		<AuthContext.Provider value={{ authToken, setAuthToken }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
