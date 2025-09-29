import TextLink from "../pathlink/PathLink"
import MenuHamburger from "../menuhambuger/MenuHamburger";

const  Header = () => {

  return (
    <header className="w-[100vw] h-[72px] bg-[#161B22] flex flex-row  items-center xl:px-[54px] xl:py-5 rounded-none max-md:justify-between max-md:px-4 max-md:py-6">
      <img
        src="../../assests/github.svg"
        className="w-8 h-8"
        alt="Logo Github"
      />
      <nav className="w-[90vw] max-md:w-[20px]">
        <div className = "hidden md:block">
          <TextLink />
        </div>
        <div className=" w-6 flex justify-center md:hidden">
          <MenuHamburger/>
        </div>
        
      </nav>
    </header>
  );
};

export default Header;
