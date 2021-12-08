const products = [{
  id: '1c',
  name: 'Sugar Cone',
  price: 1.25,
  imgUrl: 'https://media.istockphoto.com/photos/empty-ice-cream-cone-picture-id826315630?k=20&m=826315630&s=170667a&w=0&h=OYOYRw4XhaxeV3hnkXaZmLDeDiduupRnqU_TSQCiZnY='
},
{
  id: '2c',
  name: 'Waffle Cone',
  price: 1.50,
  imgUrl:'https://www.kindpng.com/picc/m/386-3860972_transparent-waffle-cone-png-png-download.png'
},
{
  id: '3c',
  name: 'Cone Cup',
  price: 1.50,
  imgUrl: 'https://m.media-amazon.com/images/I/51vRJfuj8aL.jpg'
},
{
  id: '4c',
  name: 'Cup',
  price: 1.00,
  imgUrl: 'https://frocup.com/wp-content/uploads/2014/12/YogurtCupWhite.jpg'
},
{
  id: '1f',
  name: 'Strawberry Glacier',
  price: 5.50,
  imgUrl: 'https://media.istockphoto.com/photos/high-angle-view-close-up-of-strawberry-ice-cream-scoop-picture-id647362068'
},
{
  id: '2f',
  name: 'Velvet Fudge',
  price: 5.25,
  imgUrl: 'https://previews.123rf.com/images/foodandmore/foodandmore1704/foodandmore170400102/75849698-scoop-of-gourmet-chocolate-ice-cream-with-flakes-and-sprig-of-fresh-peppermint-alongside-isolated-on.jpg'
},
{
  id: '3f',
  name: 'Vanilla Pearl',
  price: 5.25,
  imgUrl: 'https://media.istockphoto.com/photos/vanilla-ice-cream-with-mint-leaves-picture-id993653198?k=20&m=993653198&s=612x612&w=0&h=5BGuEIbrpABxwFtl-vS0saAYopx9zkU1On80l5lBPwU='
},
{
  id: '4f',
  name: 'Lush Matcha',
  price: 6.50,
  imgUrl: 'https://steamykitchen.com/wp-content/uploads/2008/06/matcha-white-chocolate-ice-cream.jpg'
},
{
  id: '1t',
  name: 'Sprinkles',
  price: 1.25,
  imgUrl: 'https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/6a84646656a4ecd3-YVc6_0vn-large.jpg'
},
{
  id: '2t',
  name: 'Whipped Cream',
  price: 1.00,
  imgUrl: 'https://www.seekpng.com/png/detail/149-1499800_whip-cream-png-transparent-whipped-cream-png.png'
},
{
  id: '3t',
  name: 'Hot Fudge',
  price: 1.50,
  imgUrl: 'https://t3.ftcdn.net/jpg/02/48/17/22/360_F_248172287_5K81H0XAyIjHmeENLG2S29M7kTFEEPS9.jpg'
},
{
  id: '4t',
  name: 'Cherry',
  price: 1.00,
  imgUrl: 'https://freepngimg.com/save/34970-cherry-fruit-image/1189x1200'
}]

const cart = []

function drawMenu(){
  let template = ''
  products.forEach(prod => {
    template += /*html*/ `
    <div class="col-6 p-3 text-center">
              <div class="bg-white shadow rounded product" onclick="addToCart('${prod.id}')">
                <img class="product-img rounded-top p-2 " 
                src="${prod.imgUrl}" 
                alt="${prod.name}">
                <div class="d-flex justify-content-between p-2">
                  <p>${prod.name}</p>
                  <p>$${prod.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
    `
  })

  document.getElementById('menu').innerHTML = template

}

function drawCart() {
  let template = ''
  let total= 0
  cart.forEach(prod => {
    total += prod.price
    template += /*html*/ `
      <div class="d-flex justify-content-between border-bottom my-1">
        <p>${prod.name}</p>
        <p>$${prod.price.toFixed(2)}</p>
      </div>
    `
  })

  document.getElementById('cart').innerHTML = template 

  document.getElementById('total').innerHTML = total.toFixed(2)
}

function addToCart(id){
  const order = products.find(prod => prod.id === id)
  
  cart.push(order)
  drawCart()

document.getElementById('checkout-button')
}

function checkout(){
  cart.length = 0
  drawCart()
  document.getElementById('checkout-button')
}






drawMenu()












