import styles from "./messagebox.module.css";
import { TiTickOutline } from "react-icons/ti";

interface MessageBoxProp {
  submit: React.Dispatch<React.SetStateAction<boolean>>;
}

const MessageBox: React.FC<MessageBoxProp> = ({ submit }) => {
  return (
    <div className={styles.model}>
      <div className={styles.text}>
        <h1>Thanks You!</h1>
        <p>Your Details has been Successfully Submitted. Thanks!</p>
      </div>
      <button onClick={() => submit(false)}>OK</button>
      <div className={styles.box}>
        <TiTickOutline size={40} color="white" />
      </div>
    </div>
  );
};

export default MessageBox;
