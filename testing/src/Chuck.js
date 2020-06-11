class Chuck {
    constructor() {
        this.firstName = 'Chuck';
        this.lastName = 'Norris';
        this.birthDate = new Date('1940-03-10');
        this.jokes = [
            'Chuck Norris counted to infinity... Twice.',
            'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis'
        ];
    }
    displayInfo() {
        return `My name is ${this.firstName} and I have ${this.jokes.length} jokes!`
    }
    getAge() {
        return Math.floor((new Date() - this.birthDate) / 31536000000);
    }
    addJoke(joke) {
        this.jokes.push(joke);
    }
}
