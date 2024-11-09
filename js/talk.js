new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("BHU-ACM")
    .pause(1000)
    .delete(null, {
        delay: 500
    })
    .type("北华大学程序设计实验室招新啦")
    .pause(2000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 2,
    waitUntilVisible: true,
    speed: 2
}).go();