import { EditMini, SearchIcon } from "lib/@heroicons";
import Search from "../svg/Search";
import axios from "axios";
import { useLocalStorage } from "./../../hooks";
import { useEffect, useState } from "react";
import CardFrindes from "components/CardFrindes";
import Input from "components/Input";

export function Contact({ setFriendData, isOpenChat, setIsOpenChat, setChange, change, userInfo, setMessageList }: any) {
	const { getData } = useLocalStorage();
	const currentUser = getData("user")?.token?.access_Token;
	const [friends, setFriends] = useState(null);
	const [searchInput, setSearchInput] = useState("");
	const [searchData, setSearchData] = useState(null);


	function getMyFriends() {
		axios.get(
			`https://chatapp2-dg0k.onrender.com/api/user/get-my-friend`,
			{
				headers: {
					Authorization: `Bearer ${currentUser}`,
				},
			}
		)
			.then((response) => {
				// console.log(response);
				setFriends(response?.data?.data?.friends);
				// console.log("response: ", response)
			})
			.catch((error) => {
				console.error(error);
			});
	}
	// console.log(friends)

	// console.log(friends)
	const handleSearch = (value: any) => {
		axios.get(
			`https://chatapp2-dg0k.onrender.com/api/user/search-user?search=${value}`,
			{
				headers: {
					Authorization: `Bearer ${currentUser}`,
				},
			}
		)
			.then((response) => {
				setSearchData(response?.data?.data);
				// console.log(response?.data?.data)

			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getMyFriends();
	}, []);

	useEffect(() => {
		const aa = setTimeout(() => {
			if (searchInput.trim() != "")
				handleSearch(searchInput);
		}, 2000);

		return () => clearTimeout(aa);
	}, [searchInput]);
	// console.log(userInfo)

	return (
		<div className={`${isOpenChat ? "hidden md:flex md:flex-col" : ""} w-[100%] md:w-[25%] bg-secondary h-[100vh]`}>
			<div className="flex justify-between pr-3 pl-3 pt-5 cursor-pointer" onClick={() => { setChange(false) }}>
				<div className="flex gap-5">
					<img
						className="w-10 h-10 rounded-full"
						// src="../../public/images.png"
						src="https://source.unsplash.com/3tYZjGSBwbk"
						alt="Rounded avatar"
					/>
					<div className="">
						<p className="text-sm text-blue-500 font-bold">
							{userInfo}
						</p>
						<p className="text-sm">
							react developer
						</p>
					</div>
				</div>
				{/* <div>
					<EditMini className="h-6 w-6 text-black mt-1" onClick={() => { setChange(false) }} />
				</div> */}
			</div>
			<div className="relative mt-7 mr-3 ml-3 ">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<Search />
				</div>
				{/* <form onSubmit={handleSearch}> */}
				<div className="flex gap-2">
					{/* <input
						type="search"
						id="search"
						className="block w-full h-4 p-4 pl-10 text-sm text-gray-900 border rounded-3xl bg-white"
						placeholder="Search Friends"
						required
						onChange={(e: any) => {
							setSearchInput(
								e.target.value
							);
						}}

					// onBlur={handleSearch}
					/> */}

					<Input
						id="search"
						type="search"
						inputClassName={` pl-10 h-10  `}
						startIcon={
							<SearchIcon className="w-5 h-5" />
						}
						className="w-full h-10 shadow-md "
						placeholder="search Friends"
						onChange={(e: any) => {
							setSearchInput(
								e.target.value
							);
						}}
					/>
					<br />

					{/* <button onClick={handleSearch}>
						Search
					</button> */}
				</div>
				{/* </form> */}
			</div>

			{searchInput.length === 0
				? friends &&
				friends.map(
					(
						ele: any,
						index: any
					) => {
						// console.log(ele);

						return (
							<div className="flex flex-col pr-3 pl-3 pt-5" key={index}>
								<CardFrindes
									setFriendData={
										setFriendData
									}
									isOpenChat={
										isOpenChat
									}
									setIsOpenChat={
										setIsOpenChat
									}
									data={
										ele
									}
									index={
										index
									}
									setMessageList={setMessageList}

								/>
							</div>
						);
					}
				)
				: searchData &&
				searchData.map(
					(
						ele: any,
						index: any
					) => {
						// console.log(ele);
						return (
							<div>
								<div className="flex flex-col pr-3 pl-3 pt-5" key={index}>
									<CardFrindes
										data={
											ele
										}
										index={
											index
										}

									/>
								</div>
							</div>
						);
					}
				)
			}
		</div>
	);
}

export default Contact;
