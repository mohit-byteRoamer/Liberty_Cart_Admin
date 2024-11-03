import { Button, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { MdOutlineLogin } from "react-icons/md";
import { logInActionLoad } from "../redux/action/auth_action";

const Login = () => {
  const dispatch = useDispatch();
  const logInLoader = useSelector((state) => state.AuthReducer.loginLoader);

  const navigate = useNavigate();

  // useForm hook initialization
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFinish = (values) => {
    dispatch(
      logInActionLoad({
        apiPayload: { email: values.email, password: values.password },
        navigate,
      })
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      className="container flex items-center justify-center max-w-full min-h-[100vh]"
    >
      <div className="w-96 py-8 rounded-2xl shadow-xl flex items-center justify-center border-2">
        <div className="w-[90%]">
          <h1 className="text-3xl font-bold pb-4">Log in</h1>
          <p className="mb-6">Enter your details below</p>

          <form onSubmit={handleSubmit(onFinish)}>
            {/* EMAIL ADDRESS */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Email address</label>

              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email address is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Enter a valid email address",
                  },
                }}
                render={({ field }) => (
                  <Input {...field} allowClear placeholder="Email address" />
                )}
              />

              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Password</label>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  maxLength: {
                    value: 16,
                    message: "Password must be at most 16 characters long",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                    message:
                      "Password must contain at least one letter and one number",
                  },
                }}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    allowClear
                    placeholder="Password"
                  />
                )}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* Button */}
            <Button
              className="w-full"
              loading={logInLoader}
              type="primary"
              htmlType="submit"
              disabled={Object.keys(errors).length > 0}
            >
              <MdOutlineLogin />
              Log in
            </Button>

            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              <Button className="border-none w-full" type="dashed">
                Forgot password?
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
