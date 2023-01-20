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
        ballColors={['#ff0000', '#00ff00', '#0000ff']}
        backgroundColor="#1a1211"
      />
    </div>
  );
};
