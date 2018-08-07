const nconf = require('nconf')

nconf.argv()
.env()
.file({
  file:'./.env'
})
// let baseUrl = nconf.get('BASE_URL')
let baseUrl = 'www.hijup.com'

module.exports ={
  pagesTest :[
    {
      url:`https://${baseUrl}/en/`,
      title:'Modest Fashion Worldwide | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/notification`,
      title:'Toko Online Busana & Baju Muslim Wanita Terbaru | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/pages/return_exchange`,
      title:'Pengembalian dan Penukaran Barang | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/pages/help_center`,
      title:'Pusat Bantuan | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/pages/about`,
      title:'Tentang Kami | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/presses`,
      title:'Siaran Pers | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/pages/policy`,
      title:'Kebijakan Perusahaan | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/careers`,
      title:'Form Lowongan Pekerjaan | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/contact_messages/new`,
      title:'Kontak kami | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/pages/payment_guide`,
      title:'Panduan Pembayaran | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/pages/hijup_point`,
      title:'Hijup Point | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/pages/international_shipping`,
      title:'Pengiriman International | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/faqs`,
      title:'FAQ | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/pages/size_guide`,
      title:'Panduan Ukuran | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/pages/fabric_guide`,
      title:'Panduan Material | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/lp/warehousestore`,
      title:'Warehouse Store | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/lp/partnership-store`,
      title:'Partnership Store | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/sign_in`,
      title:'Sign In | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/register`,
      title:'Register | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/notification`,
      title:'Notification | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/review`,
      title:'Cart Page | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/products/new-arrival`,
      title:'Koleksi Hijab, Jilbab, Kerudung Terbaru | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/lookbooks/`,
      title:'Lookbooks | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/promo`,
      title:'Promo & SALE | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/rewards`,
      title:'HIJUP Membership | HIJUP'
    },
    {
      url:`https://${baseUrl}/en/hijupbasic`,
      title:`HIJUP BASIC's' Square Hijab, Square Hijab & Manset Collections Online | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/hijupdenim`,
      title:`HIJUP BASIC's' Square Hijab, Square Hijab & Manset Collections Online | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/hijupscarf`,
      title:`HIJUP BASIC's' Square Hijab, Square Hijab & Manset Collections Online | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/hijupxallura`,
      title:`HIJUP X ALLURA's' Square Hijab & Square Hijab Collections Online | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/hijupxfarhad`,
      title:`HIJUP X FARHAD's' Square Hijab & Square Hijab Collections Online | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/hijupgitasav`,
      title:`HIJUP x Gitasav's Blouse, Outer, and Women Pants New Collections | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/hijuphalimah`,
      title:`HIJUP x Halimah's Blouse, Outer, and Women Pants New Collections | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/hamidah`,
      title:`HIJUP x Hamidah's Blouse, Outer, and Women Pants New Collections | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/hijupherfiza`,
      title:`HIJUP x Herfiza's Blouse, Outer, and Women Pants New Collections | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/hijupxjenahara`,
      title:`HIJUP X JENAHARA's' Square Hijab, Long Dress, Blouse, Tunic & Pants Collections Online | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/hijupmagicspell`,
      title:`HIJUP X MagicSpell's' Square Hijab, Long Dress, Blouse, Tunic & Pants Collections Online | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/hijupxmarioirwinsyah`,
      title:`HIJUP X MAJA INDONESIA's' Pants, Blouse, Tunic, Khimar & Blouse Collections Online | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/hijupratuanandita`,
      title:`HIJUP X Ratuanandita's' Long Dress, Abaya, Long Dress & Khimar Collections Online | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/hijupxrickyharun`,
      title:`HIJUP X RickyHarun's' Long Dress, Abaya, Long Dress & Khimar Collections Online | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/hsj`,
      title:`HIJUP X SEJIWA's' Square Hijab & Square Hijab Collections Online | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/allura`,
      title:`ALLURA's' Square Hijab, Pashmina & Square Hijab Collections Online | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/barliasmara`,
      title:`Barli Asmara's' Tunic, Long Dress, Pants, Blouse & Square Hijab Collections Online | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/lmiraethnique`,
      title:`L'Mira Ethnique's' Long Dress, Blouse, Square Hijab, Pants & Tunic Collections Online | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/categories/manset`,
      title:`Women's Manset Collections | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/categories/ciput`,
      title:`Women's Ciput Collections | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/categories/socks`,
      title:`Women's Socks Collections | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/categories/square-hijab`,
      title:`Women's Square Hijab Collections | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/categories/clothing`,
      title:`Women's Clothing Collections | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/categories/top`,
      title:`Women's Top Collections | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/categories/outwear`,
      title:`Women's Outwear Collections | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/categories/hair-care`,
      title:`Women's Hair Care Collections | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/categories/bag`,
      title:`Women's Bag Collections | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/categories/shoes`,
      title:`Women's Shoe Collections | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/categories/menswear`,
      title:`Men's Menswear Collections | HIJUP`
    },
    {
      url:`https://${baseUrl}/en/products/sales`,
      title:`Promo Hijab, Jilbab dan Mukena | Sale Up To 60% | HIJUP`
    },
    {
      url:`https://${baseUrl}/magazine`,
      title:`HIJUP Blog | The Hijab Fashion Blog Of HIJUP | HIJUP`
    }
  ]
}