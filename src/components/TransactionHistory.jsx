import css from "./TransactionHistory.module.css";

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistoryTable}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TransactionItem key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
