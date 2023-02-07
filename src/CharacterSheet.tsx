import PocketBase, { Record } from 'pocketbase';
import { useEffect, useState } from 'react';

const pb = new PocketBase('http://127.0.0.1:8090');

type Props = {
    characterId: string;
};


const CharacterSheet = ({characterId}: Props) => {
    const [character, setCharacter] = useState(new Record);

    useEffect(() => {
        async function getCharacter() {
            const characterFetch = await pb.collection('characters').getOne(characterId);
            setCharacter(characterFetch);
        }
    }, [])
    
    return (
        <div>
            {}
        </div>
    )
}

export default CharacterSheet;
