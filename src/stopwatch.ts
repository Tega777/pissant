export class Stopwatch
{
    public readonly startedMilliseconds = new Date().getTime();

    public get elapsedMilliseconds()
    {
        return new Date().getTime() - this.startedMilliseconds;
    }

    public get elapsedMillisecondsText()
    {
        return `${this.elapsedMilliseconds}ms`;
    }
}