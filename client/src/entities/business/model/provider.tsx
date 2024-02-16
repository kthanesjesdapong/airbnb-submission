import { ReactNode } from 'react';
import { useFetchAllBusiness, CurrentBusinessContext } from '..';

type CurrentBusinessContextProviderProps = {
  children: ReactNode;
  cursorId: number;
  query: string;
  modelType: string;
};

export const CurrentBusinessContextProvider = ({
  children,
  cursorId,
  query,
  modelType,
}: CurrentBusinessContextProviderProps) => {
  const {
    data: businessData,
    isLoading,
    isError,
    error,
  } = useFetchAllBusiness(cursorId, query, modelType);

  if (isLoading) {
    return <span> is Loading ....</span>;
  }

  const dataValue = businessData === undefined ? null : businessData;

  if (isError) {
    return <p>{error as string}</p>;
  }

  return (
    <CurrentBusinessContext.Provider value={dataValue}>
      {children}
    </CurrentBusinessContext.Provider>
  );
};

/*
How to use: 

Provides Context for children to consume

Ex: For Bar
            <CurrentBusinessContextProvider cursorId={cursorId} query={allBarsQuery} modelType="bar">

                <h2>{'B A R S'}</h2>
                <Venue header={'x amount of listings'}
                    child1={<p> THIS IS FILTER BAR</p>}
                    child2={<ExploreCards
                        $width={barsPageConfig.$width}
                        $height={barsPageConfig.$height}
                        data={dummyData}
                        className="someClass" />}
                />
            </CurrentBusinessContextProvider>


*/
