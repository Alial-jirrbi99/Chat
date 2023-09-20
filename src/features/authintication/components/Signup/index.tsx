import { VALIDATION_RULES } from "./../../../../data/validation";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLocalStorage } from "./../../../../hooks";
import { useState } from "react";

export function Signup() {
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();
	const { storeData } = useLocalStorage();
	const [error, setError] = useState({});
	// console.log("aaaaaaaaaa", error?.response?.data?.Error);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data: any) => {
		console.log(data);

		try {
			setIsLoading(true);
			const response = await axios.post(
				"https://chatapp2-dg0k.onrender.com/api/auth/Signup",
				data
			);
			if (response) {
				// storeData(
				// 	"user",
				// 	response?.data?.data?.token
				// 		?.access_Token
				// );
				// setAuthToken(response);
				navigate("/sign-in");
				setIsLoading(false)
			}
		} catch (error) {
			console.log(error);
			setError(error);
			setIsLoading(false)

		}
	};

	return (
		<form className="pb-10" onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm mb-2"
					htmlFor="name"
				>
					Name
				</label>
				<input
					className={`shadow appearance-none border ${errors?.email?.message
						? "border-red-500"
						: ""
						} rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline`}
					id="name"
					type="text"
					{...register(
						"name",
						VALIDATION_RULES.name
					)}
				/>
				{errors?.name && (
					<p className="text-red-500 text-xs italic">
						{errors?.name?.message}
					</p>
				)}
			</div>
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm mb-2"
					htmlFor="email"
				>
					Email
				</label>
				<input
					className={`shadow appearance-none border ${errors?.email?.message
						? "border-red-500"
						: ""
						} rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline`}
					id="email"
					type="email"
					{...register(
						"email",
						VALIDATION_RULES.email
					)}
				/>
				{errors?.email && (
					<p className="text-red-500 text-xs italic">
						{errors?.email?.message}
					</p>
				)}
			</div>
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm mb-2"
					htmlFor="password"
				>
					Password
				</label>
				<input
					className={`shadow appearance-none border ${errors?.password
						? "border-red-500"
						: ""
						} rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline`}
					id="password"
					type="password"
					{...register(
						"password",
						VALIDATION_RULES.password
					)}
				/>
				{errors?.password && (
					<p className="text-red-500 text-xs italic">
						{errors?.password?.message}
					</p>
				)}
				{error && (
					<p className="text-red-500 text-xs italic">
						{error?.response?.data?.Error}
					</p>
				)}
			</div>
			{/* <div className="mb-6">
				<label
					className="block text-gray-700 text-sm mb-2"
					htmlFor="confirmPassword"
				>
					Confirm Password
				</label> */}
			{/* <input
					className={`shadow appearance-none border ${
						errors?.confirmPassword
							? "border-red-500"
							: ""
					} rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline`}
					id="password"
					type="password"
					{...register("confirmPassword", {
						...VALIDATION_RULES.password,
						validate: (val: string) => {
							if (
								watch(
									"password"
								) != val
							) {
								return "Your passwords do no match";
							}
						},
					})}
				/>
				{errors?.confirmPassword && (
					<p className="text-red-500 text-xs italic">
						{
							errors?.confirmPassword
								?.message
						}
					</p>
				)} */}
			{/* </div> */}

			<p className="text-red-500 text-xs italic">{""}</p>

			<div className="flex flex-col items-end justify-between gap-1">
				<button
					className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
					type="submit"
					disabled={isLoading}
				>
					{isLoading ? "loading..." : "Sign Up"}
				</button>
				<span className="text-sm">
					Already have an account?{" "}
					<Link
						to="/sign-in"
						className="font-bold  text-blue-500 hover:text-blue-800"
					>
						Sign in
					</Link>
				</span>
			</div>
		</form>
	);
}

export default Signup;
