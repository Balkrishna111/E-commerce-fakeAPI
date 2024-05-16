import "./topSegment.css";
import { IoIosArrowDown } from "react-icons/io";

const TopSegment = () => {
  return (
    <div className='top-segment text-secondary'>
      <div className='language'>
        English <IoIosArrowDown />
      </div>
      <div className='language'>
        U.S. Dollar <IoIosArrowDown />
      </div>
    </div>
  );
};
export default TopSegment;
