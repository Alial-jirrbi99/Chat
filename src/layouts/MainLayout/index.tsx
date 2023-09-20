import { ChatBody, Contact } from "components";
import RightSidebar from "./RightSidebar";
import { useContext, useEffect, useState } from "react";
import { AuthContext, useLocalStorage } from "./../../hooks";
import axios from "axios";

function MainLayout() {
	// const authToken = useContext(AuthContext);
	// console.log(authToken);
	const [change, setChange] = useState(true);
	const [friendData, setFriendData] = useState({});
	const [isOpenChat, setIsOpenChat] = useState(false);
	const [messageList, setMessageList] = useState([]);

	// const [change, setChange] = useState(true);

	const { getData } = useLocalStorage();
	const userID = getData("user")?.user?._id;
	const currentUser = getData("user")?.token?.access_Token;
	const [userInfo, setUserInfo] = useState(null);

	function fetchData() {
		axios.get(
			`https://chatapp2-dg0k.onrender.com/api/user/show-profile/${userID}`,
			{
				headers: {
					Authorization: `Bearer ${currentUser}`,
				},
			}
		)
			.then((response) => {
				// console.log(response);
				setUserInfo(response?.data?.data?.user?.name);
				// console.log("respones: ", response)
			})
			.catch((error) => {
				console.error(error);
			});
	}

	// console.log("userIngo: ", userInfo);

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="flex">
			{/* <div className="w-[100%]"> */}
			{change ?
				<Contact
					setFriendData={setFriendData}
					setIsOpenChat={setIsOpenChat}
					isOpenChat={isOpenChat}
					change={change}
					setChange={setChange}
					userInfo={userInfo}
					setMessageList={setMessageList}
				/>
				:
				// <div
				// 	style={{ transitionDuration: `1500ms` }}
				// 	className={`transition-transform bg-white h-screen shadow ${change ? 'translate-x-0' : '-translate-x-full'
				// 		}`}
				// >
				<RightSidebar isOpenChat={isOpenChat} setChange={setChange} change={change} userInfo={userInfo} />
				// </div>
			}
			{/* </div> */}
			{isOpenChat ? (
				<main className="w-full lg:w-[75%]">
					<ChatBody
						friendData={friendData}
						setIsOpenChat={setIsOpenChat}
						messageList={messageList}
						setMessageList={setMessageList}
					/>
				</main>
			) : (
				<div className="hidden md:flex md:flex-col md:justify-center md:m-auto md:pb-20">
					<img alt="imageChat" src="https://img.freepik.com/premium-vector/live-chat-with-customer-service-vector-illustration_7087-1844.jpg?w=360" />
					<p className="text-[#667781] text-2xl m-auto pb-3">تطبيق محادثات</p>
					<p className="text-[#667781] m-auto">يمكنك الآن إرسال الرسائل وتلقّيها في وقت واحد</p>
				</div>
			)}
		</div>
	);
}

export default MainLayout;
