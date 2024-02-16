import { checkThisHourArray, formatHours } from '@entities/hours';

type HoursTableRowProps = {
  hours: (string | number)[][];
  currentTime: string;
  currentDay: number;
};

export const HoursTableRow = ({
  hours,
  currentTime,
  currentDay,
}: HoursTableRowProps) => {
  if (!hours) return <p style={{ color: 'rgba(255,139,135,1)' }}>CLOSED</p>;

  return (
    <>
      <ul>
        {hours.map((hour) =>
          checkThisHourArray(hour, currentTime, currentDay) === true ? (
            <li
              key={'' + hour[0] + hour[1] + hour[2]}
              style={{ listStyle: 'none' }}
            >
              <p>
                {formatHours(hour[1] as string, hour[2] as string)}
                <span style={{ marginLeft: '20px', color: 'rgb(4, 197, 133)' }}>
                  OPEN
                </span>
              </p>
            </li>
          ) : (
            <li
              key={'' + hour[0] + hour[1] + hour[2]}
              style={{ listStyle: 'none' }}
            >
              <p>{formatHours(hour[1] as string, hour[2] as string)}</p>
            </li>
          )
        )}
      </ul>
    </>
  );
};
