import Image from "next/image";
import IconUp from "/public/IconUp.png";

export default function BtnScroll({ btnScrollHandler, show }) {
  return (
    <div className={`fixed bottom-0 right-0 z-10 h-16 w-16 ${show ? "" : "hidden"}`}>
      <button
        className="rounded-full border border-transparent bg-gray-100 py-1 hover:bg-gray-300 sm:px-1"
        onClick={btnScrollHandler}
      >
        <Image src={IconUp} alt="IconUp" />
      </button>
    </div>
  );
}
