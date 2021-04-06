export const success = (message: string, data?: any, error?: any) => {

    return {
        status: true,
        data: data == null ? null : data,
        message: message,
        error: error
    };
};


export const fail = (message: string, data?: object, error?: string) => {
    return {
        status: false,
        data: null,
        message: message,
        error: error == null ? null : error
    };
};

