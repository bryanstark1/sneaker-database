// Information from https://thesneakerdatabase.com/
const sneakers = [
    {
        id: 1,
        sku: '555088-007',
        model: 'Air Jordan 1',
        name: 'Royal',
        colors: 'Black/Varsity Royal-White',
        year: 2017,
        retail: '$160',
        image: 'https://image.goat.com/750/attachments/product_template_pictures/images/078/136/480/original/121225_00.png.png',
        owned: true
    },
    {
        id: 2,
        sku: 'BV1300-146',
        model: 'Air Jordan 1',
        name: 'Union LA Blue Toe',
        colors: 'White/Storm Blue-Varsity Red-Black',
        year: 2018,
        retail: '$190',
        image: 'https://image.goat.com/750/attachments/product_template_pictures/images/079/014/573/original/466843_00.png.png',
        owned: false
    },
    {
        id: 3,
        sku: 'DZ5485-031',
        model: 'Air Jordan 1',
        name: 'Lucky Green',
        colors: 'Black/Lucky Green-White',
        year: 2023,
        retail: '$180',
        image: 'https://image.goat.com/750/attachments/product_template_pictures/images/086/044/575/original/1097848_00.png.png',
        owned: true
    },
    {
        id: 4,
        sku: '854262-001',
        model: 'Air Jordan 3',
        name: 'Black Cement',
        colors: 'Black/Fire Red-Cement Grey-White',
        year: 2018,
        retail: '$200',
        image: 'https://image.goat.com/750/attachments/product_template_pictures/images/079/011/390/original/144205_00.png.png',
        owned: true
    },
    {
        id: 5,
        sku: '136064-104',
        model: 'Air Jordan 3',
        name: 'True Blue',
        colors: 'White/Cement Grey-True Blue',
        year: 2011,
        retail: '$150',
        image: 'https://image.goat.com/750/attachments/product_template_pictures/images/078/461/020/original/13729_00.png.png',
        owned: true
    },
    {
        id: 6,
        sku: '854262-106',
        model: 'Air Jordan 3',
        name: 'True Blue',
        colors: 'White/True Blue-Varsity Red',
        year: 2016,
        retail: '$220',
        image: 'https://image.goat.com/750/attachments/product_template_pictures/images/057/093/680/original/52014_00.png.png',
        owned: true
    },
    {
        id: 7,
        sku: '136064-123',
        model: 'Air Jordan 3',
        name: 'Infrared 23',
        colors: 'White/Cement Grey-Infrared 23-Black',
        year: 2014,
        retail: '$170',
        image: 'https://image.goat.com/750/attachments/product_template_pictures/images/078/136/289/original/13611_00.png.png',
        owned: true
    },
    {
        id: 8,
        sku: 'DN3707-100',
        model: 'Air Jordan 3',
        name: 'White Cement Reimagined',
        colors: 'Summit White/Fire Red/Black/Cement Grey',
        year: 2023,
        retail: '$210',
        image: 'https://image.goat.com/750/attachments/product_template_pictures/images/082/913/709/original/1101598_00.png.png',
        owned: false
    }
];

module.exports = {
    getAll: () => {
        return sneakers;
    },
    getOne: (id) => {
        id = parseInt(id);
        return sneakers.find(sneaker => sneaker.id === id);
    }
};