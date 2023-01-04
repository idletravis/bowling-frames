

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
        this.generatePinDropped();
        this.generatePinDropped();
        this.determineFrameDone();
    }

    public generatePinDropped(): void {
        const thisThrow = Math.floor(Math.random() * (11 - (this.throws[0] ?? 0)));
        this.throws.push(thisThrow);
        console.log(`This throw: ${thisThrow}`);
    }

    public calculateScore(firstThrow: number, secondThrow: number) {

        if(this.isAStrike()) {
            this.previousFrame?.calculateStrike(firstThrow, secondThrow);
        }

        else if(this.isASpare())
            this.previousFrame?.calculateSpare(firstThrow);
        
        else
            this.sumScore = this.throws[0] + this.throws[1];

        return this.sumScore;
    }

    public calculateSpare(thisSpare: number): void {
        this.sumScore = 10 + thisSpare;
    }

    public calculateStrike(firstThrow: number, secondThrow: number): void {
        this.sumScore = 10 + (firstThrow + secondThrow);
    }

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