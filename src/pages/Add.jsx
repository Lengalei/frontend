import { useState } from "react";

const Add = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="trial">
      <h1>count: {count}</h1>
      <div className="flex gap-4" >
        <button className="my-8 h-12 w-40 bg-red-200 rounded-2xl hover:bg-slate-100"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decreament
        </button>

        <button className="my-8 h-12 w-40 bg-red-200 rounded-2xl"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increament
      </button>
      </div>

      
    </div>
  );
};

export default Add;
