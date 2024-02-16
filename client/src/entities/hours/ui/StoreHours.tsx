import { formatHours, BusinessHoursList } from '@entities/hours';

type StoreHoursProps = {
  status: boolean | string;
  hours: BusinessHoursList;
};

export const StoreHours = ({ status, hours }: StoreHoursProps) => {
  if (status === 'Hours Not Available') {
    return (
      <>
        <p className="closed">{'Hours Not Available'}</p>
      </>
    );
  }

  if (!status) {
    return (
      <>
        <p className="closed">CLOSED</p>
      </>
    );
  }

  return (
    <>
      <p className="open">OPEN</p>
      {hours.map((hour, i) =>
        i > 0 ? (
          <p
            className="hours"
            key={`hour-key-${i}`}
          >{`, ${formatHours(hour[1] as string, hour[2] as string)}`}</p>
        ) : (
          <p className="hours" key={`hour-key-${i}`}>
            {formatHours(hour[1] as string, hour[2] as string)}
          </p>
        )
      )}
    </>
  );
};
