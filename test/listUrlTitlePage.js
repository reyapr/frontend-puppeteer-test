const nconf = require('nconf')

nconf.argv()
.env()
.file({
  file:'./.env'
})
let baseUrl = nconf.get('BASE_URL')
// let baseUrl = 'www.hijup.com'

module.exports ={
  pagesTest :[
    {
      url:`http://${baseUrl}/en/`,
      title:'Modest Fashion Worldwide | HIJUP'
    },
    {
      url:`http://${baseUrl}/en/sign_in`,
      title:'Sign In | HIJUP'
    },
    {
      url:`http://${baseUrl}/en/register`,
      title:'Register | HIJUP'
    },
    {
      url:`http://${baseUrl}/en/notification`,
      title:''
    },
    {
      url:`http://${baseUrl}/en/review`,
      title:'Cart Page | HIJUP'
    },
    {
      url:`http://${baseUrl}/en/products/new-arrival`,
      title:'Koleksi Hijab, Jilbab, Kerudung Terbaru | HIJUP'
    },
    {
      url:`http://${baseUrl}/en/lookbooks/`,
      title:'Lookbooks | HIJUP'
    },
    {
      url:`http://${baseUrl}/en/promo`,
      title:'Promo & SALE | HIJUP'
    },
    {
      url:`http://${baseUrl}/en/rewards`,
      title:'HIJUP Membership | HIJUP'
    },
    {
      url:`http://${baseUrl}/en/products/most-popular`,
      title:'All Collections | HIJUP'
    },
    {
      url:`http://${baseUrl}/en/products`,
      title:'All Collections | HIJUP'
    },
    {
      url:`http://${baseUrl}/en/hijupbasic`,
      title:`HIJUP BASIC's' Square Hijab, Square Hijab & Manset Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/hijupdenim`,
      title:`HIJUP BASIC's' Square Hijab, Square Hijab & Manset Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/hijupscarf`,
      title:`HIJUP BASIC's' Square Hijab, Square Hijab & Manset Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/hijupxallura`,
      title:`HIJUP X ALLURA's' Square Hijab & Square Hijab Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/hijupxfarhad`,
      title:`HIJUP X ALLURA's' Square Hijab & Square Hijab Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/hijupgitasav`,
      title:`HIJUP X ALLURA's' Square Hijab & Square Hijab Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/hijuphalimah`,
      title:`HIJUP X ALLURA's' Square Hijab & Square Hijab Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/hamidah`,
      title:`HIJUP X ALLURA's' Square Hijab & Square Hijab Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/allura`,
      title:`ALLURA's' Square Hijab, Pashmina & Square Hijab Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/barliasmara`,
      title:`Barli Asmara's' Tunic, Long Dress, Pants, Blouse & Square Hijab Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/dianpelangi`,
      title:`Dian Pelangi's' Blouse, Tunic, Long Dress, Square Hijab & Pants Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/dianpelangiformen`,
      title:`Dian Pelangi For Men's' Mens Shirt Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/dpxba`,
      title:`DP X BA's' Square Hijab, Mens Shirt, Mens Outerwear & Square Hijab Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/happabymelahyar`,
      title:`Happa by Mel Ahyar's' Square Hijab, Blouse, Pants, Tunic & Long Dress Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/hauriwoman`,
      title:`Hauri Woman's' Long Dress, Dress & Long Dress Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/jenahara`,
      title:`Jenahara's' Long Dress, Pants, Blouse, Tunic & Square Hijab Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/kami`,
      title:`Kami.'s' Square Hijab, Long Dress, Tunic, Blouse & Pants Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/lmiraethnique`,
      title:`L'Mira Ethnique's' Long Dress, Blouse, Square Hijab, Pants & Tunic Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/manset`,
      title:`Women's Manset Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/ciput`,
      title:`Women's Ciput Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/socks`,
      title:`Women's Socks Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/instan-shawl`,
      title:`Women's Instan Shawl Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/khimar`,
      title:`Women's Khimar Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/pashmina`,
      title:`Women's Pashmina Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/square-hijab`,
      title:`Women's Square Hijab Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/clothing`,
      title:`Women's Clothing Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/sport`,
      title:`Women's Sport Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/breast-feeding`,
      title:`Women's Breast Feeding Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/praying-set`,
      title:`Praying Set Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/top`,
      title:`Women's Top Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/outwear`,
      title:`Women's Outwear Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/bottom`,
      title:`Women's Bottom Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/dress`,
      title:`Women's Dress Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/accessories`,
      title:`Women's Accessories Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/beauty`,
      title:`Women's Beauty Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/make-up`,
      title:`Women's Make Up Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/nails`,
      title:`Women's Nails Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/fragrance`,
      title:`Women's Fragrance Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/skin-care`,
      title:`Women's Skin Care Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/bath-and-body`,
      title:`Women's Bath and Body Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/hair-care`,
      title:`Women's Hair Care Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/bag`,
      title:`Women's Bag Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/shoes`,
      title:`Women's Shoe Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/categories/menswear`,
      title:`Men's Menswear Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/products/sales`,
      title:`Promo Hijab, Jilbab dan Mukena | Sale Up To 60% | HIJUP`
    },
    {
      url:`http://${baseUrl}/magazine`,
      title:`HIJUP Blog | The Hijab Fashion Blog Of HIJUP | HIJUP`
    }
  ]
}