import styles from './miny-ui.module.css';

/* eslint-disable-next-line */
export interface MinyUiProps {}

export function MinyUi(props: MinyUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MinyUi!</h1>
    </div>
  );
}

export default MinyUi;
