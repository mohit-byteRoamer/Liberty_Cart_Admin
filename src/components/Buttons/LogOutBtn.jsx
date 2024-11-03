import { Button } from "antd";
import toast from "react-hot-toast";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutActionLoad } from "../../redux/action/auth_action";

function LogOutBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginToken = localStorage.getItem("token");

  const handleLogout = () => {
    if (loginToken) {
      dispatch(logoutActionLoad({navigate}))
      // localStorage.removeItem("token");
      // localStorage.removeItem("user");
      // navigate("/admin_login");
    } else {
      toast("You are not logged in");
    }
  };
  return (
    <Button className="w-full p-4" type="primary" onClick={handleLogout}>
      <div className="flex items-center gap-1">
        <MdOutlineLogout />
        Logout
      </div>
    </Button>
  );
}

export default LogOutBtn;
