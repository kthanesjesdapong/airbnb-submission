import { HoursTableContainer } from "./HoursTable.styled";
import { HoursArr } from "@entities/business";
import { groupDaysIntoMap } from "..";
import { HoursTableRow } from "./HoursTableRow";

type HoursTableProps = {
    margin: string;
    width: string;
    hours: HoursArr;
    currentDay: number;
    currentTime: string;
};

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

//{ margin, width, day, timeRange, storeStatus }: HoursTableProps
export const HoursTable = ({ margin, width, hours, currentDay, currentTime }: HoursTableProps) => {
    const groupedHoursMap = groupDaysIntoMap(hours);

    console.log(groupedHoursMap);

    return (
        <HoursTableContainer
            margin={margin}
            width={width}
        >
            <table>
                <tbody>
                    {days.map((day, i) => (
                        <tr key={`${day} tr ${i}`}>
                            <th key={`${day} + th ${i}`}>
                                <p key={`${day} th > p ${i}`}>{day}</p>
                            </th>
                            <td>
                                <HoursTableRow hours={groupedHoursMap[i]}
                                    currentTime={currentTime}
                                    currentDay={currentDay}
                                />

                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>

        </HoursTableContainer>
    );
};
