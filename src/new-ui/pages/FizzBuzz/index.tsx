import { useEffect } from "react";

export default function FizzBuzzPage() {
  useEffect(() => {
    console.log("FizzBuzzPage mounted");
    return () => {
      console.log("FizzBuzzPage unmounted");
    };
  }, []);
  return (
    <div>
      <h1>FizzBuzz</h1>
    </div>
  );
}