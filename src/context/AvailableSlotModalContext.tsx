import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from "react";

type AvailableSlotModalContextType = {
  isOpen: boolean;

  openModal: () => void;
  closeModal: () => void;
};

const AvailableSlotModalContext = createContext<
  AvailableSlotModalContextType | undefined
>(undefined);

export const AvailableSlotModalProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const value = useMemo(() => ({ isOpen, openModal, closeModal }), [isOpen]);

  return (
    <AvailableSlotModalContext.Provider value={value}>
      {" "}
      {children}{" "}
    </AvailableSlotModalContext.Provider>
  );
};
export const useAvailableSlotModal = () => {
  const context = useContext(AvailableSlotModalContext);
  if (!context) {
    throw new Error(
      "useAvailableSlotModal must be used within AvailableSlotModalProvider"
    );
  }
  return context;
};
