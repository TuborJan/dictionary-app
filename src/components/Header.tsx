import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header className="flex justify-between max-w-3xl m-auto px-5 pt-10">
      <svg
        fill="#8f8f8f"
        width="40px"
        height="40px"
        viewBox="0 0 256 256"
        id="Flat"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M208.00244,28h-136a28.03146,28.03146,0,0,0-28,28V224a4.0002,4.0002,0,0,0,4,4h144a4,4,0,0,0,0-8h-140v-4a20.02229,20.02229,0,0,1,20-20h136a4.0002,4.0002,0,0,0,4-4V32A4.0002,4.0002,0,0,0,208.00244,28Zm-92,8h56v84.001L146.394,100.7998a4.0005,4.0005,0,0,0-4.7998,0L116.00244,119.999Zm88,152h-132a27.915,27.915,0,0,0-20,8.42285V56a20.02229,20.02229,0,0,1,20-20h36v92a4,4,0,0,0,6.40039,3.2002L143.99561,109,173.603,131.2002A4.00015,4.00015,0,0,0,180.00244,128V36h24Z" />
      </svg>
      <ThemeToggler />
    </header>
  );
};

export default Header;
