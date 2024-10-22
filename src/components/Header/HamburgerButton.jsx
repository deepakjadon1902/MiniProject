import { useHeader } from "../../contexts/HeaderContext";

const HamburgerButton = ({ desktop, handler }) => {
  const { isOpen, isOffCanvasOpen } = useHeader();

  return (
    <button
      className={`flex items-center  ${isOpen || isOffCanvasOpen ? "menu-open" : ""}`}
      onClick={handler}
    >
      <div
        id="hamburger-container"
        className="relative flex h-6 w-8 flex-col justify-between"
      >
        <span className="absolute left-0 top-[50%] -mt-3 block h-[2px] w-full bg-white transition duration-500 ease-out"></span>
        <span className="absolute left-0 top-[50%] block h-[2px] w-1/2 bg-white transition duration-500 ease-out"></span>
        <span className="absolute left-0 top-[50%] mt-3 block h-[2px] w-full bg-white transition duration-500 ease-out"></span>
      </div>
      {desktop && (
        <span className="text-16 ml-4 hidden text-left uppercase leading-5 text-white lg:block">
          all <br /> sports
        </span>
      )}
    </button>
  );
};

export default HamburgerButton;
