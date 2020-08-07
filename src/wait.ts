import {CancellationToken} from "./cancellationToken";
import {sleep} from "./sleep";

type Predicate = () => boolean;

export function wait(predicate: Predicate, ct?: CancellationToken): Promise<void>;
export function wait(predicate: Predicate, intervalMs: number, ct?: CancellationToken): Promise<void>;

export function wait()
{
    const predicate = arguments[0] as Predicate;
    let cancellationToken: CancellationToken | undefined = undefined;
    let intervalMs = 33;

    if (arguments.length > 1) {
        if (arguments[1] instanceof CancellationToken)
            cancellationToken = arguments[1];
        else
            intervalMs = arguments[1];
    }

    if (arguments.length > 2)
        cancellationToken = arguments[2];

    return new Promise<void>(async resolve => {
        while (!predicate())
            await sleep(intervalMs, cancellationToken);
        resolve();
    });
}