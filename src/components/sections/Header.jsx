import LoginIcon from "../../assets/images/LoginIcon";
import RegisterIcon from "../../assets/images/RegisterIcon";
import PrimaryButton from "../ui/PrimaryButton";
import { Link } from "react-router-dom";
export default function Header() {
  const buttons = [
    { icon: RegisterIcon, label: "Register", path: "register" },
    { icon: LoginIcon, label: "Login", path: "login" },
  ];
  return (
    <header className="bg-background dark:bg-dark-background border-b-4 border-primary">
      <div className="container mx-auto px-3 py-5 flex justify-between gap-5">
        <Link to="/">
          <h1 className="text-title dark:text-dark-title flex-1 text-2xl lg:text-3xl">Realtime Emoji Poll</h1>
        </Link>
        <div className="buttons-wrapper flex-1 flex items-center justify-end gap-4">
          {buttons.map((button, index) => (
            <PrimaryButton key={index} icon={button.icon} label={button.label} path={button.path} />
          ))}
        </div>
      </div>
    </header>
  );
}
