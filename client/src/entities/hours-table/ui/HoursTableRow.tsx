import { checkThisHourArray } from "..";

type HoursTableRowProps = {
    hours: (string | number)[][];
    currentTime: string;
    currentDay: number;
};

//Mapping over array
//Handle the case in which you have day values === the same
// if status is true, just add 
export const HoursTableRow = ({ hours, currentTime, currentDay }: HoursTableRowProps) => {

    //STYLE THIS

    if (!hours) return <p style={{ color: 'rgba(255,139,135,1)' }}>CLOSED</p>;

    return (
        <>
            <ul>
                {hours.map((hour) => (
                    (
                        checkThisHourArray(hour, currentTime, currentDay) === true ? (
                            <li key={'' + hour[0] + hour[1] + hour[2]} style={{ listStyle: 'none' }}>
                                <p>
                                    {`${hour[1]} ${hour[2]}`}
                                    <span style={{ marginLeft: '20px', color: 'rgb(4, 197, 133)' }}>OPEN</span>
                                </p>
                            </li>
                        ) : (
                            <li key={'' + hour[0] + hour[1] + hour[2]} style={{ listStyle: 'none' }}>
                                <p>
                                    {`${hour[1]} ${hour[2]}`}
                                </p>
                            </li>
                        )
                    )
                ))}
            </ul>
        </>
    );
};
