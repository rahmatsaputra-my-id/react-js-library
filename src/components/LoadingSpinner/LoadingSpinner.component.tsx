import {View} from '../View';
import {styles} from './LoadingSpinner.styles';
import './LoadingSpinner.styles.css';

import {ILoadingSpinnerProps} from './LoadingSpinner.types';

const LoadingSpinner = ({
  loadingType = false,
  loadingIcon = '',
}: ILoadingSpinnerProps): JSX.Element => {
  const renderSection = (className: string) => (
    <View style={styles.loadingSpinnerSectionContainer}>
      <div className={className} />
    </View>
  );

  const renderButton = (className: string) => (
    <View style={styles.loadingSpinnerButtonContainer}>
      <div className={className} />
    </View>
  );

  const renderPage = () => (
    <View style={styles.loadingSpinnerPageContainer}>
      <View style={styles.loadingSpinnerPageContent}>
        <div className="loading-spinner-pages" />
        {loadingIcon && (
          <img style={styles.loadingIcon} src={loadingIcon} alt={'Loading'} />
        )}
      </View>
    </View>
  );

  switch (loadingType) {
    case 'page':
      return renderPage();

    case 'section':
      return renderSection('loading-spinner-section');

    case 'section-s':
      return renderSection('loading-spinner-section-s');

    case 'section-xs':
      return renderSection('loading-spinner-section-xs');

    case 'button':
      return renderButton('loading-spinner-section-xs');

    default:
      return <div className="loading-spinner" />;
  }
};

export default LoadingSpinner;
