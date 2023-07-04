const log = (message?: any, ...optionalparams : any[]) =>{ const showlog = true;
    if (showlog) {
        return console.log(message, ... optionalparams);
    }
};
export default log;