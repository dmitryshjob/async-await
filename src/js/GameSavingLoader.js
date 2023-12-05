import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
    static async load() {
        const response = await read();
        const jsonres = await json(response);
        return jsonres;
    }
}