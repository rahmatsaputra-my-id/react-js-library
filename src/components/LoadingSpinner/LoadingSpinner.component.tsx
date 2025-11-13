import {View} from '../View';
import {styles} from './LoadingSpinner.styles';
import './LoadingSpinner.styles.css';

import {ILoadingSpinnerProps} from './LoadingSpinner.types';

const LoadingSpinner = ({
  loadingType = false,
  loadingIcon = '',
}: ILoadingSpinnerProps): JSX.Element => {
  const renderSpinnerComponent = () => <div className="loading-spinner" />;

  const renderSpinnerSection = () => (
    <View style={styles.loadingSpinnerSectionContainer}>
      <div className="loading-spinner-section" />
    </View>
  );
  const renderSpinnerSectionS = () => (
    <View style={styles.loadingSpinnerSectionContainer}>
      <div className="loading-spinner-section-s" />
    </View>
  );

  const renderSpinnerPage = () => (
    <View style={styles.loadingSpinnerPageContainer}>
      <View style={styles.loadingSpinnerPageContent}>
        <div className="loading-spinner-pages" />
        {loadingIcon ? (
          <img style={styles.loadingIcon} src={loadingIcon} alt={''} />
        ) : null}
      </View>
    </View>
  );

  return (
    <>
      {loadingType === 'page'
        ? renderSpinnerPage()
        : loadingType === 'section'
        ? renderSpinnerSection()
        : loadingType === 'section-s'
        ? renderSpinnerSectionS()
        : renderSpinnerComponent()}
    </>
  );
};

export default LoadingSpinner;
