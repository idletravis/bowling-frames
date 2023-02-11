import { Frame } from '../../app/domain/Frame'

describe('A Frame ', () => {
    it('should not allow knocking down more than 10 pins', () => {
        // given
        const testFrame: Frame = new Frame(undefined, undefined);
        // when
        testFrame.generatePinDropped();
        testFrame.generatePinDropped();
        // then
        expect(testFrame.sumScore).toBeLessThanOrEqual(10);
    })

    it('should be able to correctly determine if it has a spare', () => {
        // given
        const testFrame: Frame = new Frame(undefined, undefined);
        testFrame.throws = [6, 4];
        // when
        // then
        expect(testFrame.isASpare()).toBeTruthy();
    })

    it('should be able to correctly determine if it has a strike', () => {
        // given
        const currentTestFrame: Frame = new Frame(undefined, undefined);
        currentTestFrame.throws = [10, 0];
        // when
        // then
        expect(currentTestFrame.isAStrike()).toBeTruthy();
    })

    it('should be able to correctly determine if it does not have a strike', () => {
        // given
        const currentTestFrame: Frame = new Frame(undefined, undefined);
        currentTestFrame.throws = [9, 1];
        // when
        // then
        expect(currentTestFrame.isAStrike()).toBeFalsy();
    })

    it('should have the current frame calculate the score for a strike', () => { //npx jest Frame || npm run jest Frame
        // given
        const nextTestFrame: Frame = new Frame(undefined, undefined);
        const currentTestFrame: Frame = new Frame(undefined, nextTestFrame);
        currentTestFrame.throws = [10, 0];
        nextTestFrame.throws = [3, 4];
        // when
        currentTestFrame.calculateStrike();
        // then
        expect(currentTestFrame.sumScore).toEqual(17);
    })

    it('should calculate score when not a strike', () => {
        // given
        const currentTestFrame: Frame = new Frame(undefined, undefined);
        currentTestFrame.throws = [5, 4];
        // when
        currentTestFrame.calculateScore();
        // then
        expect(currentTestFrame.sumScore).toEqual(9);
    })

    it('should calculate score when there is a strike', () => {
        // given
        const nextTestFrame: Frame = new Frame(undefined, undefined);
        const currentTestFrame: Frame = new Frame(undefined, nextTestFrame);
        currentTestFrame.throws = [10, 0];
        // nextTestFrame.throws = [9, 1]; // strike with a spare: N
        // nextTestFrame.throws = [10, 0]; // stike with another strike: Y
        nextTestFrame.throws = [9, 0]; // simple strike scenario: Y
        // when
        currentTestFrame.calculateScore();
        // then
        expect(currentTestFrame.sumScore).toEqual(19);
    })
})