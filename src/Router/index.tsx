import { Alert, Space } from "antd";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Auth/Login";
import TodoList from "./TodoList";
import DashLayout from "./DashLayout";

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={{ pathname: "/dash/home" }} replace />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dash' element={<DashLayout />}>
        <Route path={`home`} element={<TodoList />} />
        <Route path={`test`} element={<Alert message='这是一个测试页面' type='warning' />} />
      </Route>
    </Routes>
  );
}
