type StatusProps = {
    isLoading: boolean;
    error: string;
    status: string;
};

export const Status = ({ isLoading, error, status }: StatusProps) => {

    

    return (
        <>
            {isLoading ? (<div>
                <span>...loading</span>
            </div>) : status === 'error' ? (<div>
                <span>{error}</span>
            </div>) : status === 'success' ? (
                <div>
                    <span>success</span>
                </div>) : (<></>)}
        </>
    );
};