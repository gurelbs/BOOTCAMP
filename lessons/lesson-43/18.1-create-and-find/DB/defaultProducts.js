const Product = require('./../models/product')
const macBook = new Product({
    name: 'Apple MacBook Pro',
    category: 'computers',
    isActive: true,
    details: {
        description: `מקבוק פרו Apple MacBook Pro 16" Retina Z0XZ-CTO39 2.6GHz i7, 8TB SSD, 32GB, Radeon Pro 5500M 8GB, Touch Bar - Space Gray - Late 2019 - דור אחרון - שלוש שנות אחריות`,
        price: 22946.0,
        discount: 10,
        images: [
            `https://source.unsplash.com/300x300/?macbook`,
            `https://source.unsplash.com/300x300/?macbookpro`,
        ],
        phone: '0556884444'
    }
})
const dellSoundBar = new Product({
    name: 'Dell AX510 Sound Bar',
    category: 'computers',
    isActive: true,
    details: {
        description: `Dell AX510 Sound Bar - רמקולים מחשב מולטימדיה - 10 וואט (סה"כ) - שחור`,
        price: 80.0,
        discount: 10,
        images: [
            `https://images-na.ssl-images-amazon.com/images/I/41FF8oZHFqL._AC_SY355_.jpg`,
            `https://images-na.ssl-images-amazon.com/images/I/51%2BlWyBJOAL.__AC_SX300_SY300_QL70_FMwebp_.jpg`,
        ],
        phone: '0556884244'
    }
})
const screen = new Product({
    name: '27 Dell InfinityEdge',
    category: 'computers',
    isActive: false,
    details: {
        description: `גודל תצוגה "27 רזולוציית תצוגה Full HD 1920 x 1080 at 75 Hz 4ms 1:1000 300cd/m² הצגת זוויות צפייה 178° אופקי; 178° אנכי יציאות וחיבורים 2 יציאות HDMI (גרסה 1.4) יציאת שמע פלט שמע 2x3W`,
        price: 500.0,
        discount: 10,
        images: [
            `https://www.alm.co.il/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/2/7/27.jpeg`,
            `https://www.alm.co.il/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/2/7/27.jpeg`,
        ],
        phone: '0556888117'
    }
})

module.exports = {
    macBook: macBook,   
    dellSoundBar: dellSoundBar,   
    screen: screen,   
}