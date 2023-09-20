import React from "react";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from "./../../hooks";

export function ProtectedRoute({ children }: { children: React.ReactElement }) {
	const { getData } = useLocalStorage();
	const user = getData("user") || null;
	if (!user) return <Navigate to={"/sign-in"} />;
	return <>{children}</>;
}

export default ProtectedRoute;
