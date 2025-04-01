import { useEffect, useState } from "react";
import { useLoginMutation, useRegisterMutation } from "../../services/api";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../store/store";
const AuthForms = () => {
  const [form, setForm] = useState(true);
  const { user } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  console.log("login opened");

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div className="form">
      <h2 className="my-3 text-2xl md:text-5xl">
        {form ? "Login Form" : "Create an Account"}
      </h2>
      <h4 className="my-3 text-sm md:text-base">
        {form ? "New here?" : " Already have an account?"}
        <span
          onClick={() => setForm(!form)}
          className="underline cursor-pointer text-ocean "
        >
          Sign up now
        </span>
        {form ? <LoginForm /> : <RegisterForm setForm={setForm} />}
      </h4>
    </div>
  );
};

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);

  const [loginFn, { error, isLoading, isSuccess }] = useLoginMutation();
  const [formData, setFormdata] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await loginFn(formData).unwrap();
      if (response.success && response.userId) {
        navigate("/verify", { state: { userId: response.userId } });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form action={handleLogin}>
      <div className="grid grid-cols-12">
        <input
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormdata((f) => (f = { ...f, email: e.target.value }))
          }
          className="mb-5 border col-span-12 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl"
          placeholder="Email"
        />
        <input
          type={`${showPass ? "text" : "password"}`}
          value={formData.password}
          onChange={(e) =>
            setFormdata((f) => (f = { ...f, password: e.target.value }))
          }
          className="mb-5 border col-span-12 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl"
          placeholder="Password"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="mb-5 cursor-pointer col-span-12 bg-ocean px-1 md:px-4 py-3 rounded-xl"
        >
          Sign In
        </button>
      </div>
      {error && <p className="text-red-500">Error Loggin in</p>}
    </form>
  );
};
const RegisterForm = ({
  setForm,
}: {
  setForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showPass, setShowPass] = useState(false);

  const [loginFn, { error, isLoading, isSuccess, data }] =
    useRegisterMutation();
  const [formData, setFormdata] = useState<{
    name: string;
    email: string;
    password: string;
  }>({ name: "", email: "", password: "" });

  const handleRegister = () => {
    try {
      loginFn(formData);
      data?.success && setFormdata({ name: "", email: "", password: "" });
      //add toast
      setForm((d) => (d = !d));
      console.log(error);
    } catch (error) {}
  };

  return (
    <form action={handleRegister}>
      <div className="grid grid-cols-12">
        <input
          type="text"
          onChange={(e) =>
            setFormdata((f) => (f = { ...f, name: e.target.value }))
          }
          className="mb-5 border col-span-12  dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl"
          placeholder="Name"
        />
        <input
          type="email"
          onChange={(e) =>
            setFormdata((f) => (f = { ...f, email: e.target.value }))
          }
          className="mb-5 border col-span-12 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl"
          placeholder="Email"
        />
        <input
          type={`${showPass ? "text" : "password"}`}
          onChange={(e) =>
            setFormdata((f) => (f = { ...f, password: e.target.value }))
          }
          className="mb-5 border col-span-12 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl"
          placeholder="Password"
        />
        {/* <select
            name=""
            id=""
            className="mb-5 border col-span-12 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl"
          >
            <option
              className="mb-5 border col-span-12 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl bg-[#cccccc] checked:bg-ocean  dark:bg-gunmetal"
              value=""
            >
              Sponsor
            </option>
            <option
              className="mb-5 border col-span-12 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl bg-[#cccccc] checked:bg-ocean  dark:bg-gunmetal"
              value=""
            >
              Attendee
            </option>
            <option
              className="mb-5 border col-span-12 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl bg-[#cccccc] checked:bg-ocean  dark:bg-gunmetal"
              value=""
            >
              Event Admin
            </option>
          </select> */}
        <button
          type="submit"
          disabled={isLoading}
          className="mb-5 cursor-pointer col-span-12 bg-ocean px-1 md:px-4 py-3 rounded-xl"
        >
          Sign Up now
        </button>
      </div>
      {error && <p className="text-red-500">Error Loggin in</p>}
    </form>
  );
};

export default AuthForms;
