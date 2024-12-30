import styles from "./Button.module.css";

function Button({ children, onClick, type = "button" }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.btn} ${styles[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;
