import {CancellationToken} from "./cancellationToken";

export function sleep(ms: number, ct?: CancellationToken) {
    return new Promise((resolve, reject) => {
        ct?.rejectIfCancelled(reject);
        setTimeout(() => {
                ct?.rejectIfCancelled(reject);
                resolve();
            },
            ms);
    });
}