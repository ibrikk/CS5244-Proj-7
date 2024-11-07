import { CircleX } from "lucide-react";
import "../../assets/css/CartTable.css";

const ClearCartButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div>
      <button className="clear-cart-btn" onClick={onClick}>
        Clear Cart &nbsp; <CircleX />
      </button>
    </div>
  );
};

export default ClearCartButton;
