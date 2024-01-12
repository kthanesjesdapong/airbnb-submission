type StatusProps = {
    isLoading: boolean;
    isError: boolean;
    // isSuccess: boolean
};

export const Status = ({ isLoading, isError }: StatusProps) => {

    return (
        <>
            {isLoading ? (<div>
                <span>...loading</span>
            </div>) : isError ? (<div>
                <span>...there was an error</span>
            </div>) : (
                <div>
                    <span>success</span>
                </div>)}
        </>
    );
};