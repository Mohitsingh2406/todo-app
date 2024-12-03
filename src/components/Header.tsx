import Counter from "./Counter";
import Logo from "./Logo"




export default function Header(){
    return (
        <header className="flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#edeae5] border-b border-black/[0.08]">
            <Logo/>

            <Counter />
        </header> 
    );
}