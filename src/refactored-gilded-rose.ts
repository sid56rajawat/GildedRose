export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

const ItemTypes = {
    BRIE: 'Aged Brie',
    PASS: 'Backstage passes to a TAFKAL80ETC concert',
    HAND: 'Sulfuras, Hand of Ragnaros',
}

function updateBrie(item: Item){
    
    item.quality = Math.min(item.quality+1,50);

    item.sellIn = item.sellIn - 1;

    if(item.sellIn < 0){
        item.quality = Math.min(item.quality + 1, 50);
    }
}
function updatePass(item: Item){
    if(item.sellIn < 6){
        item.quality = Math.min(item.quality+3,50);
    }
    else if(item.sellIn < 11){
        item.quality = Math.min(item.quality+2,50);
    }
    else{
        item.quality = Math.min(item.quality+1,50);
    }

    item.sellIn = item.sellIn - 1;

    if(item.sellIn < 0){
        item.quality = 0;
    }
}
function updateHand(item: Item){
    // Do Nothing
}
export function updateNormal(item: Item){
    item.quality = Math.max(item.quality-1,0);

    item.sellIn = item.sellIn - 1;

    if(item.sellIn < 0){
        item.quality = Math.max(item.quality - 1, 0);
    }
}


export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality(){
        for (const item of this.items){
            switch(item.name){
                case ItemTypes.BRIE:
                    updateBrie(item);
                    continue;
                case ItemTypes.HAND:
                    updateHand(item);
                    continue;
                case ItemTypes.PASS:
                    updatePass(item);
                    continue;
                default:
                    updateNormal(item);
                    continue;
            }

        }
        return this.items;
    }
}  
  
    
  