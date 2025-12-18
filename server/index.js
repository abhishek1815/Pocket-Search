const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(cors()); 
app.use(express.json());


let POKEMON_CACHE = {};


app.get('/', (req, res) => {
    res.json({ status: 'Pocket Search - is live', is : 'Ready' });
});


app.get('/pokemon/:name', async (req, res) => {
    const name = req.params.name.toLowerCase();
    

    if (POKEMON_CACHE[name]) {
        console.log(`[CACHE HIT] Serving ${name} from local storage.`);
        return res.json(POKEMON_CACHE[name]);
    }


    try {
        console.log(`[API FETCH] Requesting ${name} from PokéAPI...`);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        

        const data = response.data;
        POKEMON_CACHE[name] = {
            name: data.name,
            id: data.id,
            types: data.types.map(t => t.type.name),
            image: data.sprites.front_default
        };

        res.json(POKEMON_CACHE[name]);
    } catch (error) {
        console.error("Target not found.");
        res.status(404).json({ error: "Pokemon not found" });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});