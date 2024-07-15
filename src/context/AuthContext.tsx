import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { io, Socket } from "socket.io-client";

// 사용자 정보 타입 정의
interface UserInfo {
  userId: number;
  email: string;
  nickname: string;
  profileImage: string;
  tier: string;
  status: string;
  role: string;
}

// AuthContext의 타입 정의
interface AuthContextType {
  memoUserInfo: {
    userInfo: UserInfo | null;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>;
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  };
  login: (info: UserInfo) => Promise<void>;
  logout: () => void;
  socket: Socket;
}

// AuthProvider의 props 타입 정의
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const sessionUserInfo = JSON.parse(
    sessionStorage.getItem("userInfo") || "null"
  ) as UserInfo | null;
  const sessionIsLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(sessionIsLoggedIn);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(sessionUserInfo);
  const url = process.env.REACT_APP_SOCKET_URL as string;

  // Socket을 초기화합니다.
  const socket = useMemo(() => io(url, { withCredentials: true }), [url]);

  const login = async (info: UserInfo) => {
    sessionStorage.setItem("userInfo", JSON.stringify(info));
    sessionStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    setUserInfo(info);
  };

  const logout = () => {
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setUserInfo(null);
  };

  const memoUserInfo = useMemo(
    () => ({
      userInfo,
      setUserInfo,
      isLoggedIn,
      setIsLoggedIn,
    }),
    [userInfo, isLoggedIn]
  );

  const authContextValue: AuthContextType = {
    memoUserInfo,
    login,
    logout,
    socket,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}
