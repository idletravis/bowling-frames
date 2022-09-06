

export default class Frame {

    maxPins: number = 10;
    throws: number[] = [0, 0];
    isFirstThrow: boolean = true;

    public generatePinDropped(): void {
        this.throws[this.isFirstThrow ? 0 : 1] = Math.floor(Math.random() * (11 - this.throws[0]));
        console.log(this.isFirstThrow ?  'First' : 'Second', 'Throw: ', this.throws[this.isFirstThrow ? 0 : 1]);
        this.isFirstThrow = false;
    }
}