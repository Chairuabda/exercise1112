import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export const ProfileUser = () => {
	const [allUser, setAllUser] = useState([]);

	const fatchData = async () => {
		try {
			const userAccounts = await axios.get(
				"http://localhost:3000/user"
			);
			setAllUser(userAccounts.data);
			console.log(allUser);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fatchData();
	}, []);

	return (
		<Box
			w={"100vw"}
			h={"100vh"}
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<Box>
				<Box>
					<Text>Profile User</Text>
                    {allUser?.length > 0 ? (
                        allUser.map((user, index) => {
                            return (
                                <Box key={index}>
                                    <ul>
                                        <li>{user.username}</li>
                                        <li>{user.email}</li>
                                    </ul>
                                </Box>
                            )
                        })
                    ): (<></>)}
				</Box>
			</Box>
		</Box>
	);
};