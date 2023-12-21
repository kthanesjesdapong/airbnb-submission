import { HoursTableContainer } from "./HoursTable.styled";
import { HoursArr } from "@entities/business";
import { groupDaysIntoMap, days } from "@entities/hours";
import { hourTablesConfigs } from "..";
import { HoursTableRow } from "./HoursTableRow";


type HoursTableProps = {
    hours: HoursArr;
    currentDay: number;
    currentTime: string;
};



//{ margin, width, day, timeRange, storeStatus }: HoursTableProps
export const HoursTable = ({ hours, currentDay, currentTime }: HoursTableProps) => {
    const groupedHoursMap = groupDaysIntoMap(hours);

    return (
        <HoursTableContainer
            $margin={hourTablesConfigs.margin}
            width={hourTablesConfigs.width}
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
