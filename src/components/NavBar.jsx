export const NavBar = () => (
    <nav className={[
        "z-10",
        "flex",
        "justify-between",
        "w-full",
        "text-white",
        "px-4",
        "py-1",
        "bg-sky-700",
        "top-0",
        "sticky",
        "inset-0",
        "w-full",
        "h-full",
        "object-cover"
    ].join(" ")} >
        <img src="/logo.png" className="h-14 flex justify-between items-end" />
        <h1>Mystery Number</h1>
    </nav>
)