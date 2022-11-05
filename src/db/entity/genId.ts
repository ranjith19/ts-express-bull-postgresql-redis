import * as xid from 'xid-js';

export const genXid = () => {
    return String(xid.next());
}