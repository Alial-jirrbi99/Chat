import Input from "components/Input";
import Attachment from "components/Attachment";
import Communication from "components/Communication";
import { useContext, useEffect, useState } from "react";
import { AuthContext, useLocalStorage } from "./../../../hooks";
import {
	ChatIcon,
	HeartIcons,
	SearchIcon,
	UserAcountIcon,
	VideoIcon,
	ArrowRight
} from "lib/@heroicons";
import axios from "axios";

const RightSidebar = ({ setChange, userInfo, change, isOpenChat }: any) => {
	const [isLoading, setIsloading] = useState(false)

	const { getData, clearData } = useLocalStorage();

	return (
		// <div
		// 	style={{ transition: change ? "transform s ease" : "" }}
		// 	className={`w-[30%] h-screen  bg-gray-100 ${change ? "" : "translate-x-full"
		// 		}`}
		// >
		<div className={`${isOpenChat ? "hidden md:flex flex-col" : ""} w-[25%] h-screen px-7 py-8 bg-gray-100`}>
			<div>
				{/* <Input
					id="search"
					type="search"
					inputClassName={` pl-10 h-10  `}
					startIcon={
						<SearchIcon className="w-5 h-5" />
					}
					className="w-80 h-10 shadow-md "
					placeholder="search"
				/> */}
				<div className="flex justify-end">
					<p className="mr-4 text-2xl font-medium">الملف الشخصي</p>
					<ArrowRight className="w-6 cursor-pointer" onClick={() => { setChange(true) }} />
				</div>

				<div className="flex flex-col items-center mt-10">
					<img
						src="https://source.unsplash.com/3tYZjGSBwbk"
						alt="personal-img"
						className="h-56 w-56 rounded-full bg-cover"
					/>
					<h1 className="text-2xl font-semibold pt-2 ">
						{userInfo}
					</h1>
				</div>

				<div className="flex flex-row gap-20 justify-center">
					<Communication
						children={
							<ChatIcon className="w-7 h-7 text-primary" />
						}
						type="Chat"
					/>
					<Communication
						children={
							<VideoIcon className="w-7 h-7 text-primary" />
						}
						type="Video Call"
					/>
				</div>
			</div>
			<div className="flex justify-center mt-7">
				<button onClick={() => {
					setIsloading(true)
					clearData()
				}} className="border rounded-md bg-red-500 text-white p-2">
					{isLoading ? "جاري تسجيل الخروج" : "تسجيل الخروج"}
				</button>
			</div>
		</div>
		// </div>
	);
};

export default RightSidebar;
