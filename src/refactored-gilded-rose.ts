export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        // The Quality of an item is never more than 50
        // "Sulfuras" is a legendary item and as such its Quality is 80
        this.quality = (name==ItemTypes.HAND) ? 80: Math.min(50,quality);
    }

    updateBrie(){
    
        this.quality = Math.min(this.quality + 1,50);
    
        this.sellIn = this.sellIn - 1;
    
        if(this.sellIn < 0){
            this.quality = Math.min(this.quality + 1, 50);
        }
    }
    updatePass(){
        if(this.sellIn < 6){
            this.quality = Math.min(this.quality + 3, 50);
        }
        else if(this.sellIn < 11){
            this.quality = Math.min(this.quality + 2, 50);
        }
        else{
            this.quality = Math.min(this.quality + 1, 50);
        }
    
        this.sellIn = this.sellIn - 1;
    
        if(this.sellIn < 0){
            this.quality = 0;
        }
    }
    updateHand(){
        // Do Nothing
    }
    updateNormal(){
        this.quality = Math.max(this.quality - 1, 0);
    
        this.sellIn = this.sellIn - 1;
    
        if(this.sellIn < 0){
            this.quality = Math.max(this.quality - 1, 0);
        }
    }

}

export class ConjuredItem extends Item{
    constructor(name: string, sellIn: number, quality: number){
        super(name,sellIn,quality);
    }
    updateConjured(){
        this.quality = Math.max(this.quality - 2, 0);
    
        this.sellIn = this.sellIn - 1;
    
        if(this.sellIn < 0){
            this.quality = Math.max(this.quality - 2, 0);
        }
    }
}

const ItemTypes = {
    BRIE: 'Aged Brie',
    PASS: 'Backstage passes to a TAFKAL80ETC concert',
    HAND: 'Sulfuras, Hand of Ragnaros',
}



export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality(){
        for (const item of this.items){
            if(item instanceof ConjuredItem){
                item.updateConjured();
                continue;
            }
            switch(item.name){
                case ItemTypes.BRIE:
                    item.updateBrie();
                    continue;
                case ItemTypes.HAND:
                    item.updateHand();
                    continue;
                case ItemTypes.PASS:
                    item.updatePass();
                    continue;
                default:
                    item.updateNormal();
                    continue;
            }

        }
        return this.items;
    }
}  
  
    
  