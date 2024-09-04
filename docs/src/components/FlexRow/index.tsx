import styles from './styles.module.css';

export default function FlexRow({ children }): JSX.Element {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}
