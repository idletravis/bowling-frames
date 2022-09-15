

export default class Frame {

    maxPins: number = 10;
    sumScore: number = 0;
    throws: number[] = [0, 0];
    isFirstThrow: boolean = true;
    hasASpare: boolean = false;
    previousFrame!: Frame;

    constructor(thisFrame: Frame){
        this.previousFrame = thisFrame;
    }

    public generatePinDropped(): void {
        this.throws[this.isFirstThrow ? 0 : 1] = Math.floor(Math.random() * (11 - this.throws[0]));
        console.log(this.isFirstThrow ?  'First' : 'Second', 'Throw: ', this.throws[this.isFirstThrow ? 0 : 1]);

        if(this.previousFrame?.hasASpare && this.isFirstThrow){
            this.previousFrame?.calculateSpare(this.throws[0]);
        }

        this.isFirstThrow = false;
        this.hasASpare = this.isASpare();
    }
    
    public calculateSpare(thisSpare: number): void {
        this.sumScore = 10 + thisSpare;
    }

    private isASpare(): boolean{
        return (this.throws[0] + this.throws[1]) === 10 && this.throws[0] != 10;
    }


    //That will allow access to view the value of that previous frame that determines if that frame had a spare
    //And if that frame had a spare, that  is when you need to tell the previous frame to calculate its spare using the generatePinDropped method
    //Add a method to check if it had a spare in the first place
    
    
}