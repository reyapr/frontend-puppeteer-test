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
      title:'Notification | HIJUP'
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
      title:`HIJUP X FARHAD's' Square Hijab & Square Hijab Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/hijupgitasav`,
      title:`HIJUP x Gitasav's Blouse, Outer, and Women Pants New Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/hijuphalimah`,
      title:`HIJUP x Halimah's Blouse, Outer, and Women Pants New Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/hamidah`,
      title:`HIJUP x Hamidah's Blouse, Outer, and Women Pants New Collections | HIJUP`
    },



    
   
    {
      url:`http://${baseUrl}/en/hijupherfiza`,
      title:`HIJUP x Herfiza's Blouse, Outer, and Women Pants New Collections | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/hijupxjenahara`,
      title:`HIJUP X JENAHARA's' Square Hijab, Long Dress, Blouse, Tunic & Pants Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/hijupmagicspell`,
      title:`HIJUP X MagicSpell's' Square Hijab, Long Dress, Blouse, Tunic & Pants Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/hijupxmarioirwinsyah`,
      title:`HIJUP X MAJA INDONESIA's' Pants, Blouse, Tunic, Khimar & Blouse Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/hijupratuanandita`,
      title:`HIJUP X Ratuanandita's' Long Dress, Abaya, Long Dress & Khimar Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/hijupxrickyharun`,
      title:`HIJUP X RickyHarun's' Long Dress, Abaya, Long Dress & Khimar Collections Online | HIJUP`
    },
    {
      url:`http://${baseUrl}/en/hsj`,
      title:`HIJUP X SEJIWA's' Square Hijab & Square Hijab Collections Online | HIJUP`
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