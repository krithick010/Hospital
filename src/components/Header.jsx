
import Nav from "./Navbar";

export const Header = () => {
    return (
        <header className="sticky top-0 z-[1] mx-auto flex w-full max--w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary"> 
        <h2 className="text-black-50 text-2xl font-mono">Wayne's Clinic</h2>
        <Nav/>
        </header>
        
    );
};

export default Header;