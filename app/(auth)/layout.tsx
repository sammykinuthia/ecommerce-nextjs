
const Layout = ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            {children}
        </div>
    )
}

export default Layout