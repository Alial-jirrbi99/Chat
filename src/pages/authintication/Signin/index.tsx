import { RegisterationCard } from "../../../features/authintication/components";
import { AuthinticationLayout } from "../../../layouts";
import { Signin } from "./../../../features/authintication/components";

export function SigninPage() {
	return (
		<AuthinticationLayout>
			<RegisterationCard cardTitle="Sign in">
				<Signin />
			</RegisterationCard>
		</AuthinticationLayout>
	);
}

export default SigninPage;
