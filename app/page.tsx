import styles from "./page.module.css";
import { Button, Htag } from './components';

export default function Home() {
  return (
    <div className={styles.page}>
      <Htag tag="h1">Курсы по Photoshop</Htag>
      <Button appearance="ghost" arrow="right">Кнопка</Button>
    </div>
  );
}
