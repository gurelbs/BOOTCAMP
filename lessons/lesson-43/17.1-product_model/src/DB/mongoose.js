const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/e-commerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    const Product = new mongoose.Schema({
        name: {
            type: String,
            uniq: true,
            required: true,
        },
        category: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            default: false
        },
        details: {
            description: {
                type: String,
                trim: true,
                required: true,
                minLength: 10
            },
            price: {
                type: Number,
                required: [true, 'product price required'],
                validate: {
                    validator: function(v) {
                      return v > 0
                    },
                    message: props => `${props.value} is not a valid product price!`
                } 
            },
            discount: {
                type: Number,
                required: false,
                default: 0
            },
            images: [
                {
                    type: String,
                    default: `https://source.unsplash.com/300x300/product`,
                    default: `https://source.unsplash.com/300x302/product`,
                },
            ],
            phone: {
                type: String,
                required: [true, 'User phone number required'],
                validate: {
                  validator(v){
                    return /^\+?(972|0|\+972|00972)(\-)?(([23489]{1}\d{7})|[5]{1}\d{8})/.test(v)
                  },
                  message: props => `${props.value} is not a valid phone number!`
                },
            },
            updated: {
                type: Date,
                default: Date.now
            }
        }
    })
    const PC = mongoose.model('PC', Product)
    const macBook = new PC({
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
    const dellSoundBar = new PC({
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
    const screen = new PC({
        name: '"27 Dell InfinityEdge ',
        category: 'computers',
        isActive: true,
        details: {
            description: `גודל תצוגה "27 רזולוציית תצוגה Full HD 1920 x 1080 at 75 Hz
            זמן תגובה לרענון 4ms
            יחס ניגודיות 1:1000
            בהירות תצוגה 300cd/m²
            הצגת זוויות צפייה 178° אופקי; 178° אנכי
            יציאות וחיבורים 
            2 יציאות HDMI (גרסה 1.4)
            יציאת שמע
            פלט שמע 2x3W`,
            price: 500.0,
            discount: 10,
            images: [
                `https://www.alm.co.il/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/2/7/27.jpeg`,
                `https://www.alm.co.il/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/2/7/27.jpeg`,
            ],
            phone: '0556888117'
        }
    })
    try {
        macBook.save()
        console.log('macBook saved');
        dellSoundBar.save()
        console.log('dellSoundBar saved');
        screen.save()
        console.log('screen saved');
    } catch (e) {
        console.log(e.message);
    }
})

