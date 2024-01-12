import {useDispatch,useSelector} from "react-redux"
import { Increment, Decrement } from './Actions';

const LikeCounter = () => {
  const dispatch =useDispatch()
  const count = useSelector((state)=>state.reducer)
  return (
    <div className='main'>
      <h2>{count}</h2>
      <div>
      <button onClick={() => dispatch(Increment())}> Like </button>
      <button onClick={() => dispatch(Decrement())}> Unlike </button>
      </div>
    </div>
  );
};

export default LikeCounter;