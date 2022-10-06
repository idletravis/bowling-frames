import { Frame } from '../../app/domain/Frame'

describe('A Frame ', () => {
    it('should not allow knocking down more than 10 pins', () => {
        let testFrame: Frame = new Frame(undefined);
        testFrame.generatePinDropped();
        testFrame.generatePinDropped();
        expect(testFrame.sumScore).toBeLessThanOrEqual(10);
    })
})