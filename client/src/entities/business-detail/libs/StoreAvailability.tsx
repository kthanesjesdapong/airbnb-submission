import { formatHours } from ".";


type StoreHoursProps = {
    status: boolean | string;
    start: string;
    end: string;
};


export const StoreHours = ({ status, start, end }: StoreHoursProps) => {

    const formattedHours = formatHours(start, end);

    if (status === 'Hours Not Available') {
        return <>
            <p>{status}</p>
        </>;
    }

    if (!status) {
        return <>
            <p className='closed'>
                CLOSED
            </p>
        </>;
    }

    return (
        <>
            <p className="open">
                OPEN
            </p>
            <p className="hours">
                {formattedHours}
            </p>
        </>
    );
};