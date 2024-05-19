 import { useFormik } from 'formik';
 import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
     const formik = useFormik({
     initialValues: {
       UserName: '',
       Password:''
     },
     onSubmit: values => {
       if(values.UserName === "admin" && values.Password === "admin") {
           navigate("/");
       }
       else{
         formik.resetForm({
        values: {
          UserName: '',
          Password: ''
        }
      });
      alert("Invalid UserName or Password");
       }
     },
   })
    return(
        <div className="login-outer-container">
           <div className="login-container"> 
               <h1 className="login-title">Login</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="login-field-container">
                        <div>
                            <label htmlFor="UserName">User Name</label>
                            <input
                                id="UserName"
                                name="UserName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.UserName}
                            />
                        </div>
                        <div>
                            <label htmlFor="Password">Password</label>
                            <input
                                id="Password"
                                name="Password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.Password}
                            />
                        </div>
                        <div>
                             <button type="submit">Submit</button>
                        </div>  
                    </div>
                </form>
           </div>
        </div>
    )
}

export default Login;