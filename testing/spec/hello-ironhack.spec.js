// test for hello ironhack function
describe('Hello ironhack function', function () {
    it('Should be function', function () {
        expect(typeof helloIronhack).toBe('function');
    });
    it('Should return greeting', function () {
        expect(helloIronhack()).toEqual('hello ironhack');
    });
});