
import React from "react";
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const BlogPagination = ({ 
  currentPage, 
  totalPages, 
  handlePageChange 
}: BlogPaginationProps) => {
  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer hover:text-coral"}
          />
        </PaginationItem>
        
        {Array.from({ length: Math.min(5, totalPages) }).map((_, index) => {
          let pageNumber;
          
          // Logic to show correct page numbers based on current page
          if (totalPages <= 5) {
            pageNumber = index + 1;
          } else if (currentPage <= 3) {
            pageNumber = index + 1;
          } else if (currentPage >= totalPages - 2) {
            pageNumber = totalPages - 4 + index;
          } else {
            pageNumber = currentPage - 2 + index;
          }
          
          return (
            <PaginationItem key={index}>
              <PaginationLink 
                onClick={() => handlePageChange(pageNumber)}
                isActive={pageNumber === currentPage}
                className={pageNumber === currentPage ? "bg-coral text-white" : "hover:text-coral"}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        
        {totalPages > 5 && currentPage < totalPages - 2 && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(totalPages)} className="hover:text-coral">
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        
        <PaginationItem>
          <PaginationNext 
            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
            className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer hover:text-coral"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPagination;
