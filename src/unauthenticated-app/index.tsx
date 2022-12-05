import { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";
import { Card, Button } from "antd";
export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
        <Button onClick={() => setIsRegister(!isRegister)}>
          Switch to {isRegister ? "Login" : "Register"}
        </Button>
      </Card>
    </div>
  );
};
