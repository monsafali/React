import AppNav from "../Component/AppNav";
import Sidebar from "../Component/Sidebar";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
    </div>
  );
}

export default AppLayout;

130;
