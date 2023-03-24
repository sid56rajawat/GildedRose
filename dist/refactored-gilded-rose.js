"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GildedRose = exports.Item = void 0;
class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}
exports.Item = Item;
class GildedRose {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if (item.name == 'Sulfuras, Hand of Ragnaros') {
                continue;
            }
            else if (item.name == 'Aged Brie') {
                item.quality = Math.min(item.quality + 1, 50);
            }
            else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.sellIn < 6) {
                    item.quality = Math.min(item.quality + 3, 50);
                }
                else if (item.sellIn < 11) {
                    item.quality = Math.min(item.quality + 2, 50);
                }
                else {
                    item.quality = Math.min(item.quality + 1, 50);
                }
            }
            else {
                item.quality = Math.max(item.quality - 1, 0);
            }
            item.sellIn = item.sellIn - 1;
            if (item.sellIn < 0) {
                if (item.name == 'Aged Brie') {
                    item.quality = Math.min(item.quality + 1, 50);
                }
                else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                    item.quality = 0;
                }
                else {
                    item.quality = Math.max(item.quality - 1, 0);
                }
            }
            this.items[i] = item;
        }
        return this.items;
    }
}
exports.GildedRose = GildedRose;
//# sourceMappingURL=refactored-gilded-rose.js.map