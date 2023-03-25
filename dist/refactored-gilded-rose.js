"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GildedRose = exports.ConjuredItem = exports.Item = void 0;
class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        // The Quality of an item is never more than 50
        // "Sulfuras" is a legendary item and as such its Quality is 80
        this.quality = (name == ItemTypes.HAND) ? 80 : Math.min(50, quality);
    }
    updateBrie() {
        this.quality = Math.min(this.quality + 1, 50);
        this.sellIn = this.sellIn - 1;
        if (this.sellIn < 0) {
            this.quality = Math.min(this.quality + 1, 50);
        }
    }
    updatePass() {
        if (this.sellIn < 6) {
            this.quality = Math.min(this.quality + 3, 50);
        }
        else if (this.sellIn < 11) {
            this.quality = Math.min(this.quality + 2, 50);
        }
        else {
            this.quality = Math.min(this.quality + 1, 50);
        }
        this.sellIn = this.sellIn - 1;
        if (this.sellIn < 0) {
            this.quality = 0;
        }
    }
    updateHand() {
        // Do Nothing
    }
    updateNormal() {
        this.quality = Math.max(this.quality - 1, 0);
        this.sellIn = this.sellIn - 1;
        if (this.sellIn < 0) {
            this.quality = Math.max(this.quality - 1, 0);
        }
    }
}
exports.Item = Item;
class ConjuredItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    updateConjured() {
        this.quality = Math.max(this.quality - 2, 0);
        this.sellIn = this.sellIn - 1;
        if (this.sellIn < 0) {
            this.quality = Math.max(this.quality - 2, 0);
        }
    }
}
exports.ConjuredItem = ConjuredItem;
const ItemTypes = {
    BRIE: 'Aged Brie',
    PASS: 'Backstage passes to a TAFKAL80ETC concert',
    HAND: 'Sulfuras, Hand of Ragnaros',
};
class GildedRose {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        for (const item of this.items) {
            if (item instanceof ConjuredItem) {
                item.updateConjured();
                continue;
            }
            switch (item.name) {
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
exports.GildedRose = GildedRose;
//# sourceMappingURL=refactored-gilded-rose.js.map