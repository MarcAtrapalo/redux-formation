export default class API {

    static addHero({id, name}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id % 2 === 0) {
                    reject('All heroes must be odd.');
                } else {
                    resolve();
                }
            }, 100);
        })
    }

    static updateHero({id, name}) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 45);
        });
    }

}
