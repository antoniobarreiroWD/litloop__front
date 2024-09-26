import FormPageLayout from "../../components/FormPageLayout/FormPageLayout"
import CustomForm from "../../components/CustomForm/CustomForm"
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"


const LoginPage = () => {
  const { login } = useContext(AuthContext)
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })



  const onChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await login(userData)
  }

  return (
    <FormPageLayout>
      <CustomForm
        marginBottom={"80px"}
        title={"Login"}
        subtitle={"Accede a tu cuenta"}
        onChange={onChange}
        onSubmit={onSubmit}
        options={["email", "password"]}
      />
    </FormPageLayout>
  )
}

export default LoginPage

