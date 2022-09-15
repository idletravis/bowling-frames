

export default class Frame {

    maxPins: number = 10;
    throws: number[] = [0, 0];
    isFirstThrow: boolean = true;

    public generatePinDropped(): void {
        this.throws[this.isFirstThrow ? 0 : 1] = Math.floor(Math.random() * (11 - this.throws[0]));
        console.log(this.isFirstThrow ?  'First' : 'Second', 'Throw: ', this.throws[this.isFirstThrow ? 0 : 1]);
        this.isFirstThrow = false;
    }




    //Need a value that will keep track of the score sum
    //Need a way for the current frame to tell the previous frame the value of the first throw.
    //Function that will calculate the value of the spare of the previous frame
    //And then add that to the frame's score sum (meaning this value wont be calculated until you bowl the next frame)

    //Need a field for whether this frame has a spare or not 
    //Need a field that refers to the previous frame
    //That will allow access to view the value of that previous frame that determines if that frame had a spare
    //And if that frame had a spare, that  is when you need to tell the previous frame to calculate its spare using the generatePinDropped method
    //Add a method to check if it had a spare in the first place

    sumScore: number = 0;



    public calculateSpare(): void {

        
    }

}