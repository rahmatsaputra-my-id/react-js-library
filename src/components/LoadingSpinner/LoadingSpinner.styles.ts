const isMobileDisplay = window.innerWidth <= 768;
export const styles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    opacity: 1,
    transition: 'opacity 300ms ease',
  },
  loadingSpinnerSectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: window.innerHeight,
  },
  loadingSpinnerPageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: isMobileDisplay ? '83vh' : '100vh',
  },
  loadingSpinnerPageContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingIcon: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -145,
  },
};
