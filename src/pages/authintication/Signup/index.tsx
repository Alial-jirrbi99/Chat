import { RegisterationCard, Signup } from "../../../features/authintication/components"
import { AuthinticationLayout } from "../../../layouts"

export function SignupPage() {  
  return (
    <AuthinticationLayout
    >
    <RegisterationCard cardTitle="Sign up">
    <Signup />
    </RegisterationCard>
    </AuthinticationLayout>
  )
}

export default SignupPage