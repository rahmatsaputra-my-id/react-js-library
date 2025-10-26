import {useState} from 'react';
import {ISwipeableProps} from './Swipeable.types';

const Swipeable = ({
  children,
  onSwipeLeft = () => {},
  onSwipeRight = () => {},
  style = {},
  ...props
}: ISwipeableProps): JSX.Element => {
  const [startX, setStartX] = useState<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (startX !== null) {
      const endX = event.changedTouches[0].clientX;
      const deltaX = endX - startX;

      if (deltaX > 50) {
        onSwipeLeft();
      } else if (deltaX < -50) {
        onSwipeRight();
      }

      setStartX(null);
    }
  };

  return (
    <div
      style={style}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      {...props}>
      {children}
    </div>
  );
};

export default Swipeable;
