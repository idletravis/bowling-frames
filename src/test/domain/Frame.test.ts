import { Frame } from '../../app/domain/Frame'

describe('A Frame ', () => {
    it('should not allow knocking down more than 10 pins', () => {
        // given
        const testFrame: Frame = new Frame(undefined);
        // when
        testFrame.generatePinDropped();
        testFrame.generatePinDropped();
        // then
        expect(testFrame.sumScore).toBeLessThanOrEqual(10);
    })

    it('should be able to correctly determine if it has a spare', () => {
        // given
        const testFrame: Frame = new Frame(undefined);
        testFrame.throws = [6, 4];
        // when
        // then
        expect(testFrame.isASpare()).toBeTruthy();
    })

    it('should be able to correctly determine if it has a strike', () => {
        // given
        const previousTestFrame: Frame = new Frame(undefined);
        const testFrame: Frame = new Frame(previousTestFrame);
        previousTestFrame.throws = [10, 0];
        // testFrame.throws = [2, 2];
        // when
        // then
        expect(testFrame.previousFrame?.isAStrike()).toBeTruthy();
    })

    it('should have the previous frame calculate the score for a strike', () => {

    })
})