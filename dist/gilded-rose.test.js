"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gilded_rose_1 = require("./gilded-rose");
test('Should foo', () => {
    const gildedRose = new gilded_rose_1.GildedRose([new gilded_rose_1.Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
});
// Tests on Ordinary Items
test('Ordinary Items Quality and SellIn decreses by 1', () => {
    const gildedRose = new gilded_rose_1.GildedRose([
        new gilded_rose_1.Item('banana', 10, 2)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
    expect(items[0].sellIn).toBe(9);
});
test('Ordinary Item quality does not go below 0', () => {
    const gildedRose = new gilded_rose_1.GildedRose([
        new gilded_rose_1.Item('milk', 10, 0)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(9);
});
test('Ordinary Item with negative SellIn degrades by two', () => {
    const gildedRose = new gilded_rose_1.GildedRose([
        new gilded_rose_1.Item('bread', 0, 10)
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
    expect(items[0].sellIn).toBe(-1);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
    expect(items[0].sellIn).toBe(-2);
});
// Tests on Aged Brie
test('Aged Brie quality increses only till 50', () => {
    const gildedRose = new gilded_rose_1.GildedRose([
        new gilded_rose_1.Item('Aged Brie', 10, 48)
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(49);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
});
test('Aged Brie quality increses by two if its sellIn is negative', () => {
    const gildedRose = new gilded_rose_1.GildedRose([
        new gilded_rose_1.Item('Aged Brie', 0, 10)
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(14);
});
// Tests on Backstage passes to a TAFKAL80ETC concert
test('Backstage passes\'s quality increses only till 50', () => {
    const gildedRose = new gilded_rose_1.GildedRose([
        new gilded_rose_1.Item('Backstage passes to a TAFKAL80ETC concert', 15, 48)
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(49);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
});
test('Backstage passes loose all quality if it\'s sellIn less than 0', () => {
    const gildedRose = new gilded_rose_1.GildedRose([
        new gilded_rose_1.Item('Backstage passes to a TAFKAL80ETC concert', 0, 30)
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(-1);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(-2);
});
test('Backstage passes\'s quality increase by 3 if its sellIn in [1,5]', () => {
    const gildedRose = new gilded_rose_1.GildedRose([
        new gilded_rose_1.Item('Backstage passes to a TAFKAL80ETC concert', 2, 10)
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
    expect(items[0].sellIn).toBe(1);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(16);
    expect(items[0].sellIn).toBe(0);
});
test('Backstage passes\'s quality increase by 2 if its sellIn in [6,10]', () => {
    const gildedRose = new gilded_rose_1.GildedRose([
        new gilded_rose_1.Item('Backstage passes to a TAFKAL80ETC concert', 7, 10)
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
    expect(items[0].sellIn).toBe(6);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(14);
    expect(items[0].sellIn).toBe(5);
});
test('Backstage passes\'s quality increses by 1 if its sellIn greater than 10', () => {
    const gildedRose = new gilded_rose_1.GildedRose([
        new gilded_rose_1.Item('Backstage passes to a TAFKAL80ETC concert', 11, 10)
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
    expect(items[0].sellIn).toBe(10);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
    expect(items[0].sellIn).toBe(9);
});
// Test on Sulfuras, Hand of Ragnaros
test('Sulfarus does not change at all', () => {
    const gildedRose = new gilded_rose_1.GildedRose([
        new gilded_rose_1.Item('Sulfuras, Hand of Ragnaros', 4, 15)
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(15);
    expect(items[0].sellIn).toBe(4);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(15);
    expect(items[0].sellIn).toBe(4);
});
//# sourceMappingURL=gilded-rose.test.js.map