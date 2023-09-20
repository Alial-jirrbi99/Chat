import axios from "axios";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { PaperAirplaneIconMini } from "lib/@heroicons";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { ArrowBack } from "../../lib/@heroicons";
import InputEmoji from "react-input-emoji";


export function ChatBody({ friendData, setIsOpenChat, messageList, setMessageList }) {
	const [socket, setSocket] = useState(null);
	const [currentMessage, setCurrentMessage] = useState("");

	const { getData } = useLocalStorage();
	const currentUserID = getData("user")?.user?._id;
	const currentUser = getData("user")?.token?.access_Token;
	const friendID = friendData?._id;

	useEffect(() => {
		const newSocket = (io.connect(`https://chatapp2-dg0k.onrender.com/`, {
			transports: ['websocket'],
			query: { userId: currentUserID },
			// autoConnect: true,
		}))

		setSocket(newSocket)

		// newSocket?.on("receive_message", (data) => {
		// 	setMessageList((prev) => [...prev, data]);
		// });

		return () => {
			newSocket?.disconnect(); // Clean up the socket connection
		};
	}, [])

	const sendMessage = async () => {
		if (currentMessage !== "") {
			const messageData = {
				senderId: currentUserID,
				receiverId: friendID,
				message: currentMessage,
				date:
					new Date(Date.now()).getHours() +
					":" +
					new Date(Date.now()).getMinutes(),
			}

			await socket?.emit("send_message", messageData)

			setMessageList(prev => [...prev, messageData])

			setCurrentMessage("")
		}
	}

	// console.log("second", messageList);

	useEffect(() => {
		socket?.on("receive_message", (data) => {
			// console.log("data", data)
			setMessageList((prev) => [...prev, data]);
		});
		return () => {
			socket?.off("receive_message");
		};
	}, [messageList]);



	// close chat if i click to Esc
	const handleKeyPress = (event) => {
		if (event.key === 'Escape') {
			setIsOpenChat(false);
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);

		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		};
	}, []);

	return (
		<>
			<div className=" relative " key={friendData?._id}>
				<div className="absolute w-full top-0 ">
					<div className="w-full bg-white h-16 pt-2 text-gray flex justify-between shadow-md fixed">
						<div className="flex gap-2 items-center my-3 ml-5  font-bold text-lg tracking-wide">
							<img
								src="https://source.unsplash.com/3tYZjGSBwbk"
								alt="personal-img"
								className="h-8 w-8 rounded-full bg-cover"
							/>
							{friendData?.name}
						</div>
						{/* <div onClick={() => setIsOpenChat(false)}>رجوع</div> */}
						<ArrowBack className="w-6 mr-5 cursor-pointer" onClick={() => setIsOpenChat(false)} />
					</div>

					<div className="mt-10 mb-16 flex flex-col h-[480px] overflow-y-auto absolute top-8 w-full">
						{messageList.map((message, index) => (
							<div className="clearfix" key={index} >

								<div

									className={`flex ${currentUserID === message.senderId
										? "bg-secondary text-gray-600 float-left w-auto mx-4 my-2 p-2 rounded-lg"
										:
										"bg-primary text-white float-right rounded-lg mx-4 my-2 p-2"
										}`}
								>
									{message.message}
									<p className={`mt-4 ml-1 ${currentUserID === message.senderId ? "text-gray-400  text-xs" : "text-xs text-gray-100"}`}>
										{message.date}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>


			</div>
			<div className="absolute w-full md:w-[75%] flex justify-between bg-white bottom-0">
				{/* <input
					className="flex-grow m-2 py-2 px-4 mr-1  rounded-full border border-gray-200 bg-gray-100 resize-none outline-none"
					placeholder="Write Something"
					value={currentMessage}
					onChange={(event) => {
						setCurrentMessage(
							event.target.value
						);
					}}
					onKeyPress={(event) => {
						event.key === "Enter" &&
							sendMessage();
					}}
				/> */}
				<InputEmoji
					value={currentMessage}
					onChange={setCurrentMessage}
					cleanOnEnter
					onEnter={sendMessage}
					placeholder="write a message"
				// onKeyPress={(event) => {
				// 	event.key === "Enter" &&
				// 		sendMessage();
				// }}
				/>
				<button
					onClick={sendMessage}
					className="outline-none rounded-full mx-5  mt-2 bg-primary hover:bg-blue-500 transition-all duration-400 w-[40px] h-[40px] flex  justify-center items-center"
				>
					<PaperAirplaneIconMini className="h-6 w-6 text-white" />
				</button>
			</div >
		</>

	);
}
export default ChatBody;
