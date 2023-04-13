import { Item } from "./types"

const MOCK: Item[] = [
    {
        id:1,
        text: 'Helado de banana'
    },
    {
        id:2,
        text: 'Helado de frutilla'
    },
    {
        id:3,
        text: 'Helado de anana'
    }
]

export default{
    list : () : Promise<Item[]> => Promise.resolve(MOCK),
    create : (text : Item['text']) : Promise<Item> => Promise.resolve({id: +new Date(), text}),
    remove : (id : Item['id']) : Promise<Item['id']> => Promise.resolve(id)
}