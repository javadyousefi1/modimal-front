export interface ServerResult<T> {
    code: number;
    message: string;
    isSuccess: boolean;
    data?: T[] | T;
  }
  
  export interface ServerDataResponse<T> {
    pageIndex: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    statusCode: number,
    message: string,
    data?: T[] | T;
  }