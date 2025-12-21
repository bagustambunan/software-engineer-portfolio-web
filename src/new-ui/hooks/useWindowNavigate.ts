import { useState } from "react";

const useWindowNavigate = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(true);
  }

  return {
    isOpen,
    setIsOpen,
    handleOpen,
  }
}

export default useWindowNavigate;