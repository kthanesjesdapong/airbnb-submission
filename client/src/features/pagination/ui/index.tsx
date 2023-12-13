import { usePagination } from "@shared/lib/hooks";
import { DOTS } from "@shared/lib";
import { PaginationContainer, PaginationItem, Arrow } from './Pagination.styled';
import { MouseEventHandler } from "react";


type PaginationProps = {
    onPageChange: (page: number) => void;
    totalCount: number;
    siblingCount?: number;
    currentPage: number;
    pageSize: number;
    className?: string;
};

export const Pagination = ({ onPageChange, totalCount, siblingCount, currentPage, pageSize, className }: PaginationProps) => {

    const paginationRange = usePagination({
        currentPage, totalCount, siblingCount, pageSize
    });

    if (currentPage === 0 || paginationRange!.length < 2) {
        return null;
    }

    const onCurrent: MouseEventHandler<HTMLLIElement> = event => {
        const numPageVal = Number(event.currentTarget.textContent);
        onPageChange(currentPage = numPageVal);
    };

    const onNext = () => {
        if (currentPage === Math.ceil(totalCount / pageSize)) return;
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        if (currentPage === 1) return;
        onPageChange(currentPage - 1);
    };

    const lastPage = paginationRange![paginationRange!.length - 1];


    return (
        <>
            <PaginationContainer className={className}>
                <PaginationItem
                    className={currentPage === 1 ? 'disabled left' : 'left'}
                    onClick={onPrevious}
                >
                    <Arrow
                        className={currentPage === 1 ? 'disabled left' : 'left'}
                    />
                </PaginationItem>
                {paginationRange?.map(pageNumber => {
                    if (pageNumber === DOTS) {
                        return <PaginationItem
                            key={`${pageNumber} key`}
                            className="dots">
                            &#8230;
                        </PaginationItem>;
                    }
                    return (
                        <PaginationItem
                            key={`${pageNumber} key`}
                            className={pageNumber === currentPage ? 'selected' : ''}
                            onClick={onCurrent}
                        >
                            {pageNumber}
                        </PaginationItem>
                    );
                })}
                <PaginationItem
                    className={currentPage === lastPage ? 'disabled right' : 'right'}
                    onClick={onNext}
                >
                    <Arrow
                        className={currentPage === lastPage ? 'disabled right' : 'right'}
                    />
                </PaginationItem>
            </PaginationContainer>
        </>
    );
};