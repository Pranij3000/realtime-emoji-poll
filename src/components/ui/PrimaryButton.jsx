import { Link } from "react-router-dom";
export default function PrimaryButton({ icon: Icon, label, path }) {
  return (
    <>
      <Link to={`/${path}`} className="flex gap-1.5 items-center">
        <Icon />
        <p className="hidden md:block text-text dark:text-dark-text">{label}</p>
      </Link>
    </>
  );
}
