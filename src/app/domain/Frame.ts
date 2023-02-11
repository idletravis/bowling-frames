

export class Frame {
    maxPins: number = 10;
    sumScore: number = 0;
    throws: number[] = [];
    frameDone: boolean = false;
    hasASpare: boolean = false;
    previousFrame!: Frame | undefined;
    nextFrame!: Frame | undefined;

    constructor(previous: Frame | undefined, next: Frame | undefined) {
        this.previousFrame = previous;
        this.nextFrame = next;
    }

    // throw
    // 1. generatePinDropped
    // 2. determines frameDone
    public throw(): void {
        while (this.frameDone == false) {
            this.generatePinDropped();
            this.determineFrameDone();
        }
    }

    public generatePinDropped(): void {
        const thisThrow = Math.floor(Math.random() * (11 - (this.throws[0] ?? 0)));
        this.throws.push(thisThrow);
    }

    public calculateScore() {
        if (this.isAStrike()) {
            // this.nextFrame?.calculateStrike(firstThrow, secondThrow);
        } else if (this.isASpare()) {
            // this.nextFrame?.calculateSpare(firstThrow);
        } else
            this.sumScore = this.throws.reduce((total, current) => total + current, 0);
        return this.sumScore;
    }

    public calculateSpare(): void {
        this.sumScore = 10 + (this.nextFrame?.throws[0] ?? 0);
    }
    // Figure logic out for calculating a strike
    public calculateStrike(): void {
        this.sumScore = 10 + this.getNextValues().reduce((total, current) => total + current, 0);
    }

    public getNextValues(): number[] {
        if (!this.nextFrame?.isAStrike()) {
            return [this.nextFrame?.throws[0] ?? 0, this.nextFrame?.throws[1] ?? 0];
        }

        return [this.nextFrame.throws[0], this.nextFrame.nextFrame?.throws[0] ?? 0];
    }
    // new method -> look at next frame
    // next frame not a strike? retrieve two throw values from it
    // is next frame a strike? first value is determined to be 10, retrieve the following frame's first value
    // considerations:
    // - there could be no frame following nextFrame
    // - there could be 3 total values in the 10th frame


    public determineFrameDone() {
        if (this.throws.length == 2 || this.isAStrike()) {
            this.frameDone = true;
        }
    }

    public isASpare(): boolean {
        return (this.throws[0] + this.throws[1]) === 10 && this.throws[0] != 10;
    }

    public isAStrike(): boolean {
        return this.throws[0] == 10;
    }

    public isDone(): boolean {
        return this.frameDone;
    }
}