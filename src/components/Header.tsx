import logo from "../assets/logo.svg";

export function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="flex justify-between px-10 py-3 border-b border-[#e5e7eb]">
      <div className="flex items-center gap-4 my-3 mx-4 font-bold text-lg">
        <img src={logo} className="logo" alt="" />
        <h1 className="text-lg">ShopOnline</h1>
      </div>
      {children}
    </header>
  );
}
