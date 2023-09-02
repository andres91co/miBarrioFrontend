import { format, isValid, parseISO } from 'date-fns';


const dateFormat: string = 'dd-MM-yyyy HH:mm:ss';

export function toFormat(date: string) {
    return format(parseISO(date), dateFormat);
}

export function dateIsValid(date: string) {
    return isValid(new Date(date));
}