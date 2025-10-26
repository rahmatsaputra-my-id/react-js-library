import {useEffect, useState} from 'react';
import {ICountDownProps, TItems} from './CountDown.types';
import {View} from '../View';
import {Text} from '../Text';
import {styles} from './CountDown.component.style';

const Countdown = ({
  cardStyle,
  containerStyle,
  fontStyle,
  weddingDate,
}: ICountDownProps): JSX.Element => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const data = [
    {
      label: 'Hari',
      value: days,
    },
    {
      label: 'Jam',
      value: hours,
    },
    {
      label: 'Menit',
      value: minutes,
    },
    {
      label: 'Detik',
      value: seconds,
    },
  ];

  useEffect(() => {
    const getTimeRemaining = () => {
      const now = new Date().getTime();
      const countdownDate = new Date(weddingDate?.reception?.start).getTime();
      const timeDifference = countdownDate - now;
      const oneDay = 1000 * 60 * 60 * 24;
      const oneHour = 1000 * 60 * 60;
      const oneMinute = 1000 * 60;

      setDays(Math.floor(timeDifference / oneDay));
      setHours(Math.floor((timeDifference % oneDay) / oneHour));
      setMinutes(Math.floor((timeDifference % oneHour) / oneMinute));
      setSeconds(Math.floor((timeDifference % oneMinute) / 1000));
    };

    const intervalId = setInterval(getTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, [weddingDate?.reception?.start]);

  const renderCardBox = ({label, value}: TItems, idx: number) => (
    <View
      key={idx}
      style={{
        ...styles.cardBox,
        cardStyle,
        marginRight: idx === data.length - 1 ? 0 : 8,
      }}>
      <Text
        style={{...styles.cardTitle, fontStyle}}
        children={value ? (value < 0 ? '00' : value) : ''}
      />
      <Text children={label} style={{...styles.cardDescription, fontStyle}} />
    </View>
  );

  const render = () => (
    <View style={{...styles.cardWrapper, containerStyle}}>
      {data?.map((val, idx) => renderCardBox(val, idx))}
    </View>
  );

  return render();
};

export default Countdown;
