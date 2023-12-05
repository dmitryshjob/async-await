import GameSavingLoader from './GameSavingLoader.js';

(async () => {
    try {
        const saving = await GameSavingLoader.load();
        const object = JSON.parse(saving);
        Object.getPrototypeOf(object);
        console.log(object);
    } catch (error) {
        throw (new Error(error));
    }
})();