import { useLocalStorageState } from "ahooks";
import { message } from "antd";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import getServiceToken from "../Tools/getServiceToken";

// 这个服务将被注册至全局
export const AuthService = getServiceToken(useAuthService);

/**
 * 权限验证服务
 *
 * @export
 * @returns
 */
export default function useAuthService() {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useLocalStorageState("token", "");
  const [userInfo, setUserInfo] = useLocalStorageState("userInfo", {
    name: "",
  });
  // 依赖约束
  useEffect(() => {
    // 无 token 在 dash 页面内
    // 直接跳转进 login
    if (!token && location.pathname.indexOf("dash") >= 0) {
      message.warning("登录失效，请重新登录");
      navigate("/login");
    }
  }, [token, location]);
  return { token, setToken, userInfo, setUserInfo };
}
