import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const cash = useSelector((store) => store.account.balance);
  return <div className="balance">{formatCurrency(cash)}</div>;
}

export default BalanceDisplay;
