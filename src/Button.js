import propTypes from "prop-types";
import styles from "./Button.module.css";
function Button({ text, onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
}
Button.prototype = {
  text: propTypes.string.isRequired,
};
export default Button;
