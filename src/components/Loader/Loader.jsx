import { FidgetSpinner } from 'react-loader-spinner';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.overlay}>
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
        ballColors={['#394f89', '#9df6fc', '#e0fcfd']}
        backgroundColor="#1a1211"
      />
    </div>
  );
};
