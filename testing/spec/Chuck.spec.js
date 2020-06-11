describe('Chuck', function () {
    let chuck;
    const joke = 'Chuck Norris can divide by zero';
    beforeEach(function () {
        chuck = new Chuck();
    });
    describe('addJoke', function () {
        it('should add a joke', function () {
            chuck.addJoke(joke);
            expect(chuck.jokes).toContain(joke)
        });
    });
});