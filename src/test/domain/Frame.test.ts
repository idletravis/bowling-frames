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
        // when
        // then
        expect(testFrame.previousFrame?.isAStrike()).toBeTruthy();
    })

    it('should have the previous frame calculate the score for a strike', () => {
        // given
        const previousTestFrame: Frame = new Frame(undefined);
        const currentTestFrame: Frame = new Frame(previousTestFrame);
        previousTestFrame.throws = [10, 0];
        currentTestFrame.throws = [3, 4];
        // when
        previousTestFrame.calculateStrike(currentTestFrame.throws[0], currentTestFrame.throws[1])
        // then
        expect(previousTestFrame.sumScore).toEqual(17);
    })

    it('should not tell previous frame to calculate a strike when previous frame is not a strike', () => {
        // given
        const previousTestFrame: Frame = new Frame(undefined);
        const currentTestFrame: Frame = new Frame(previousTestFrame);
        previousTestFrame.throws = [5, 0];
        // when
        currentTestFrame.generatePinDropped();
        // then
        expect(previousTestFrame.isAStrike()).toBeFalsy();
    })

    it('should not tell previous frame to calculate a strike when it is first throw of current frame', () => {
        // given
        const previousTestFrame: Frame = new Frame(undefined);
        const currentTestFrame: Frame = new Frame(previousTestFrame);
        previousTestFrame.throws[0] = 10;
        // when
        currentTestFrame.generatePinDropped();
        // then
        expect(previousTestFrame.sumScore).toEqual(0);
    })
})