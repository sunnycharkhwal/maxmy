import "../App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HrRoutes from "../modules/MaxHr/routes/Index";
import ManagementRoutes from "../modules/Management/routes/Index";
import AccounRoutest from "../modules/Account/routes/Index";
import { Login } from "../modules/auth/Login";
import { ForgotPassword } from "../modules/auth/ForgotPassword";
import { CheckYourEmail } from "../modules/auth/CheckYourEmail";
import { SetNewPassoword } from "../modules/auth/SetNewPassoword";
import { PasswordResetMessagePage } from "../modules/auth/PasswordResetMessagePage";
function MaxHrRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/check_your_email" element={<CheckYourEmail />} />
        <Route path="/set_new_passoword" element={<SetNewPassoword />} />
        <Route path="/password_reset" element={<PasswordResetMessagePage />} />

        <Route path="hr/*" element={<HrRoutes />} />
        <Route path="management/*" element={<ManagementRoutes />} />
        <Route path="account/*" element={<AccounRoutest />} />
        <Route path="account/*" element={<AccounRoutest />} />

        <Route path="*" element={<main>NOT FOUND</main>} />
      </Routes>
    </Router>
  );
}

export default MaxHrRoutes;
