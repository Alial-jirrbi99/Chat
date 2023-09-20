import axios from "axios";
import { useLocalStorage } from "./../../hooks";

export const CardFrindes = ({
	data,
	index,
	setFriendData,
	setIsOpenChat,
	isOpenChat,
	setMessageList,
}: any) => {
	const { getData } = useLocalStorage();
	const currentUser = getData("user")?.token?.access_Token;
	const currentUserID = getData("user")?.user?._id;
	const friendID = {
		recipientId: data?._id,
	};

	// console.log(data)

	const handleSendRequest = () => {
		axios.post(
			`https://chatapp2-dg0k.onrender.com/api/user/send-friend-request`,
			{
				recipientId: `${data?._id}`,
			},
			{
				headers: {
					Authorization: `Bearer ${currentUser}`,
				},
			}
		)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleDeleteFriend = () => {
		axios.put(
			`https://chatapp2-dg0k.onrender.com/api/user/change-status-friend-request`,
			{
				senderId: currentUserID,
				status: "reject"
			},
			{
				headers: {
					Authorization: `Bearer ${currentUser}`,
				},
			}
		)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div
			className="flex flex-row justify-between mb-5 flex-wrap"
			// key={data?._id}
			key={index}
			onClick={() => {
				setFriendData(data);
				setIsOpenChat(true);
				setMessageList(() => []);
			}}
		>
			<div className="flex gap-5 cursor-pointer">
				<img
					className="w-10 h-10 rounded-full"
					// src="../../public/images.png"
					src="https://source.unsplash.com/3tYZjGSBwbk"
					alt="Rounded avatar"
				/>
				<div className="">
					<p className="text-sm text-blue-500 font-bold">
						{data.name}
					</p>
					<p className="text-sm">
						{/* {ele
												.message
												.length <
											20
												? ele.message
												: `${ele.message.slice(
														0,
														20
												  )}...`} */}
					</p>
				</div>
			</div>
			{data?.friends.length < 1 ? (
				<div className="text-[11px] mt-[2px] w-12">
					{/* {
                    ele.time
                } */}
					<button
						type="submit"
						onClick={handleSendRequest}
					>
						Send Request
					</button>
				</div>
			) : (
				""
				// <button type="submit" onClick={handleDeleteFriend}>delete friends</button>
			)}
		</div>
	);
};

export default CardFrindes;
