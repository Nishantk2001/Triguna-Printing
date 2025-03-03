import Nav from '../Nav/Nav';
import styles from './Sidebar.module.css';

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SideBarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.upperpart}>
          <button
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
          <h4>Aporva Arts</h4>
          <Nav />
        </div>
        <div className={styles.copyRightsText}>
          <p>
            Copyright @ 2005 <span>Apurva Arts.</span> All Rights Reserved.
          </p>
          <p>Terms of Use | Privacy Policy</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
