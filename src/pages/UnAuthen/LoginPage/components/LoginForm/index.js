import TextInput from "../../../../../common/components/Form/TextInput"
import './style.css'
import loginLogo from '../../../../../asset/img/login.png'
import loadingGif from '../../../../../asset/img/loading.gif'
import Card from "../../../../../common/components/Card";
import {useState} from "react";
import authService from "../../../../../common/api/authService";
import {useFormik} from "formik";
import {object, string} from 'yup';
import {useNavigate} from "react-router-dom";


function LoginForm({onLogin}) {
    const [showLoading, setShowLoading] = useState(false)
    const navigate = useNavigate();

    const loginForm = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: async (values) => {
            const {username, password} = values;
            setShowLoading(true)
//            authService
//            .login(username, password)
//            .then(result => {
//                setShowLoading(false)
//                console.log('Login sucess!!: ',result)
//            })
//            .catch(err => {
//                setShowLoading(false)
//                console.log('Login failed !!!')
//                alert('Tài khoản hoặc mật khẩu không đúng, Vui lòng thử lại')
//            })
            try {
                const loginResponse = await authService.login(username, password);
                const data = loginResponse.data
                setShowLoading(false)
                localStorage.setItem("token", data.token);
                localStorage.setItem("username", data.username);
                navigate('/')
            } catch {
                setShowLoading(false)
            }

        },
        validationSchema: object().shape({
            username: string()
            .min(2, 'Tên đăng nhập phải có ít nhất 2 ký tự')
            .max(10, 'Tên đăng nhập không vượt quá 10 ký tự')
            .required('Không được để trống tên đăng nhập'),
            password: string()
            .min(4).max(10)
            .required('Không được để trống mật khẩu')
        })
    })

    return (
        <div className="login-form-container">
            <div className="login-form">
                <Card>
                    <img src={loginLogo} alt=""/>
                    <form onSubmit={loginForm.handleSubmit}>
                        <TextInput
                            onChange={loginForm.handleChange}
                            name={'username'}
                            placeholder={"Username / Email"}
                            type={"text"}
                            value={loginForm.values.username}
                            error={loginForm.errors.username}
                        />
                        <TextInput
                            onChange={loginForm.handleChange}
                            name={'password'}
                            placeholder={"Password"}
                            type={"password"}
                            value={loginForm.values.password}
                            error={loginForm.errors.password}
                        />
                        <button type={"submit"}> Login </button>
                        <div>
                            {showLoading && <img style={{marginTop: "20px"}} src={loadingGif} alt=""/>}
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default LoginForm