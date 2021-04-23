const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
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
            required: true,
            validate(v) {
                if (v < 0) throw new Error("price must be more then 0") 
            },
            message: props => `${props.value} is not a valid product price!`
        },
        discount: {
            type: Number,
            required: false,
            default: 0
        },
        images: {
            type: Array,
            required: true,
            validate(v){
                if (v.length < 2){
                    throw new Error("2 images al least...")
                }
            },
            default: `https://source.unsplash.com/300x302/product`,
            },
        phone: {
            type: String,
            required: true,
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
const Product = mongoose.model('Product', ProductSchema)

module.exports = Product