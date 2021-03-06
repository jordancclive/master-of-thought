const _book_lists = [
  {
    no: 1,
    list_source: `Encyclopedia Brittanica`,
    list_name: `12 Novels Considered the “Greatest Book Ever Written`,
    list_url: `https://www.britannica.com/list/12-novels-considered-the-greatest-book-ever-written`,
  },
  {
    no: 2,
    list_source: `Open Education Database`,
    list_name: `50 Most Influential Books of All Time`,
    list_url: `https://oedb.org/ilibrarian/50_books_that_changed_the_world/`,
  },
  {
    no: 3,
    list_source: `Bokklubben World Library`,
    list_name: `100 Best Books of All Time`,
    list_url: `https://en.wikipedia.org/wiki/Bokklubben_World_Library`,
  },
  {
    no: 4,
    list_source: `Wikipedia`,
    list_name: `Best-Selling Books`,
    list_url: `https://en.wikipedia.org/wiki/List_of_best-selling_books`,
  },
  {
    no: 5,
    list_source: `Jordan Peterson`,
    list_name: `Great Books List`,
    list_url: `https://www.jordanbpeterson.com/great-books/`,
  },
  {
    no: 6,
    list_source: `Thomas Jefferson Education`,
    list_name: `Classics`,
    list_url: `https://tjed.org/resources/classics/`,
  },
  {
    no: 7,
    list_source: `Art of Manliness`,
    list_name: `100 Books Every Man Should Read`,
    list_url: `https://www.artofmanliness.com/articles/100-books-every-man-read/`,
  },
];

/*
1. Encyclopedia Brittanica
2. Open Education Database
3. Bokklubben World Library
4. Wikipedia
5. Jordan Peterson
6. TJEd.org
7. Art of Manliness
*/

let _books = [
  {
    id: 0,
    name: "1984",
    url:
      "https://www.amazon.com/gp/product/0451524934/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0451524934&linkCode=as2&tag=flowoflearnin-20&linkId=7151f63d66c4b621c6bab6d41514ab4e",
    audible_url:
      "https://www.amazon.com/gp/product/B000Q6ZLOI/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B000Q6ZLOI&linkId=45436a68c7087910f334e2be95467ec2",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0451524934/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0451524934&linkCode=as2&tag=flowoflearnin-20&linkId=18f81ee56499cabf25b5e0ace5648f61"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0451524934&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0451524934" width="1" height="1" border="0" alt="" style="border:none !important;" />`,
    author: ["George Orwell"],
    author_url: ["https://en.wikipedia.org/wiki/George_Orwell"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1949,
    book_lists: [2, 3, 4, 5, 6, 7],
    page_name: "1984",
  },
  {
    id: 1,
    name: "The Adventures of Huckleberry Finn",
    url:
      "https://www.amazon.com/gp/product/0486280616/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0486280616&linkId=8fec16dbdeaf9b161746d06205ff339d",
    audible_url:
      "https://www.amazon.com/gp/product/B004BDL7N6/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B004BDL7N6&linkId=c2f2efe33662ab6c2ba14a27714b62dd",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0486280616/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0486280616&linkCode=as2&tag=flowoflearnin-20&linkId=1168e4dc29601cc1fcba228615643dd7"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0486280616&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0486280616" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Mark Twain"],
    author_url: ["https://en.wikipedia.org/wiki/Mark_Twain"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1884,
    book_lists: [3, 4, 6, 7],
    page_name: "adventures-of-huckleberry-finn",
  },
  {
    id: 2,
    name: "The Adventures of Pinocchio",
    url:
      "https://www.amazon.com/gp/product/B0759VY7MV/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0759VY7MV&linkId=990d313eae0ae0dcd205687c51b05745",
    audible_url:
      "https://www.amazon.com/gp/product/B00006FC5U/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00006FC5U&linkId=5ab09992ab00ed78cb0c70aa3a123cda",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/B0759VY7MV/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0759VY7MV&linkCode=as2&tag=flowoflearnin-20&linkId=0d9e3314cdf2e8ce7183356dd4935aff"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0759VY7MV&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=B0759VY7MV" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Carlo Collodi"],
    author_url: ["https://en.wikipedia.org/wiki/Carlo_Collodi"],
    /*estimated_reading_time: ,*/
    national_origin: "Italy",
    year_completion: 1883,
    book_lists: [4, 6],
    page_name: "adventures-of-pinocchio",
  },
  {
    id: 3,
    name: "All Quiet on the Western Front",
    url:
      "https://www.amazon.com/gp/product/0449213943/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0449213943&linkId=fbc743e778792d203051d883c974085c",
    audible_url:
      "https://www.amazon.com/gp/product/B0047CGNGC/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0047CGNGC&linkId=cd55d8d3f9638253a4f26ba063717ce8",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0449213943/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0449213943&linkCode=as2&tag=flowoflearnin-20&linkId=8ed315db942d4929aa97879a1db7e99f"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0449213943&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0449213943" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Erich Maria Remarque"],
    author_url: ["https://en.wikipedia.org/wiki/Erich_Maria_Remarque"],
    /*estimated_reading_time: ,*/
    national_origin: "Germany",
    year_completion: 1929,
    book_lists: [4, 7],
    page_name: "all-quiet-on-the-western-front",
  },
  {
    id: 4,
    name: "The Analects",
    url:
      "https://www.amazon.com/gp/product/0140443487/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0140443487&linkId=c7ac8f147b4682605fa1aa9a8604cdb5",
    audible_url:
      "https://www.amazon.com/gp/product/B07VL694PL/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B07VL694PL&linkId=08148e6fb123e1744db1ab8176732a5b",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0140443487/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0140443487&linkCode=as2&tag=flowoflearnin-20&linkId=4946985570aa72041e601e4a8db73b2b"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0140443487&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0140443487" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Confucius"],
    author_url: ["https://en.wikipedia.org/wiki/Confucius"],
    /*estimated_reading_time: ,*/
    national_origin: "China",
    year_completion: "475-221 BC",
    book_lists: [2, 6],
    page_name: "analects",
  },
  {
    id: 5,
    name: "Animal Farm",
    url:
      "https://www.amazon.com/gp/product/0451526341/ref=as_li_tl?ie=UTF8&tag=flowoflearnin-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0451526341&linkId=2a2d68c729dfacfcb6bc8874d4cf2744",
    audible_url:
      "https://www.amazon.com/gp/product/B0000545BA/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0000545BA&linkId=9418d55975ef0504d5b9a8e4648a2348",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0451526341/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0451526341&linkCode=as2&tag=flowoflearnin-20&linkId=da7f9403cca8ff48dff40927f350fba3"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0451526341&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0451526341" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["George Orwell"],
    author_url: ["https://en.wikipedia.org/wiki/George_Orwell"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1945,
    book_lists: [4, 5, 6],
    page_name: "animal-farm",
  },
  {
    id: 6,
    name: "Anna Karenina",
    url:
      "https://www.amazon.com/gp/product/1853262714/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1853262714&linkId=1a22a78330a154992cc40d56097f6ce0",
    audible_url:
      "https://www.amazon.com/gp/product/B0014GPWJI/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0014GPWJI&linkId=df366c7adb6f11f9a21852f429a53dbe",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1853262714/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1853262714&linkCode=as2&tag=flowoflearnin-20&linkId=424b10d31871e91975324b7ee378012b"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1853262714&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1853262714" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Leo Tolstoy"],
    author_url: ["https://en.wikipedia.org/wiki/Leo_Tolstoy"],
    /*estimated_reading_time: ,*/
    national_origin: "Russia",
    year_completion: 1877,
    book_lists: [1, 3, 5],
    page_name: "anna-karenina",
  },
  {
    id: 7,
    name: "Anne of Green Gables",
    url:
      "https://www.amazon.com/gp/product/1503214133/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1503214133&linkId=d402cb69670f5bbac69d5787d57c395c",
    audible_url:
      "https://www.amazon.com/gp/product/B01KGL17UY/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B01KGL17UY&linkId=e3dbe2b62402105d71ca9aa06581966c",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1503214133/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1503214133&linkCode=as2&tag=flowoflearnin-20&linkId=1d638e3145d45bfe82d55c7042a56633"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1503214133&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1503214133" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["L. M. Montgomery"],
    author_url: ["https://en.wikipedia.org/wiki/Lucy_Maud_Montgomery"],
    /*estimated_reading_time: ,*/
    national_origin: "Canada",
    year_completion: 1908,
    book_lists: [4, 6],
    page_name: "anne-of-green-gables",
  },

  {
    id: 8,
    name: "The Arabian Nights",
    url:
      "https://www.amazon.com/gp/product/0812972147/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0812972147&linkId=44d83c37d2b92c6dd9674e1300dce7dd",
    audible_url:
      "https://www.amazon.com/gp/product/B007HCVQW0/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B007HCVQW0&linkId=807cdfa248ed68fc00d6ec76c9ad1084",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0812972147/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0812972147&linkCode=as2&tag=flowoflearnin-20&linkId=34d07bd571dd10bcac5427f44c327ed3"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0812972147&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0812972147" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: [],
    author_url: [],
    /*estimated_reading_time: ,*/
    national_origin: "Middle East",
    year_completion: 1705,
    book_lists: [2, 3, 6],
    page_name: "arabian-nights",
  },
  {
    id: 9,
    name: "The Art of War",
    url:
      "https://www.amazon.com/gp/product/1599869772/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1599869772&linkId=6caf22cf59976f660838e659611faf0c",
    audible_url:
      "https://www.amazon.com/gp/product/B00546DCXW/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00546DCXW&linkId=493a8e24a7a0a7395a2f02ddb0d25219",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1599869772/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1599869772&linkCode=as2&tag=flowoflearnin-20&linkId=915d55b41870fe6512aa7bcd19fb5bb5"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1599869772&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1599869772" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Sun Zi"],
    author_url: ["https://en.wikipedia.org/wiki/Sun_Tzu"],
    /*estimated_reading_time: ,*/
    national_origin: "China",
    year_completion: "5th Century BC",
    book_lists: [6, 7],
    page_name: "art-of-war",
  },
  {
    id: 10,
    name: "Autobiography of Benjamin Franklin",
    url:
      "https://www.amazon.com/gp/product/1688093389/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1688093389&linkId=e8f54eb8b55a33e3b1789ef7b80b8978",
    audible_url:
      "https://www.amazon.com/gp/product/B00WUGFADO/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00WUGFADO&linkId=a9a319fbfd764f6aed4211fa58ec3f19",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1688093389/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1688093389&linkCode=as2&tag=flowoflearnin-20&linkId=9b121f8f141f447887ed1d4366b320bc"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1688093389&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1688093389" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Benjamin Franklin"],
    author_url: ["https://en.wikipedia.org/wiki/Benjamin_Franklin"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1791,
    book_lists: [6, 7],
    page_name: "autobiography-of-benjamin-franklin",
  },
  {
    id: 11,
    name: "Beloved",
    url:
      "https://www.amazon.com/gp/product/1400033411/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1400033411&linkId=033943278dad22954892379f2cde1644",
    audible_url:
      "https://www.amazon.com/gp/product/B000FTRRV6/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B000FTRRV6&linkId=eb04edb5a7168193de01d3e37887fbc1",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1400033411/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1400033411&linkCode=as2&tag=flowoflearnin-20&linkId=30967c1f1be390fb36903b35ded05709"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1400033411&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1400033411" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Toni Morrison"],
    author_url: ["https://en.wikipedia.org/wiki/Toni_Morrison"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1987,
    book_lists: [1, 2, 3],
    page_name: "beloved",
  },
  {
    id: 12,
    name: "Ben Hur: A Tale of Christ",
    url:
      "https://www.amazon.com/gp/product/1853262838/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1853262838&linkId=a3792b5771af74c4c451b9f975ba6260",
    audible_url:
      "https://www.amazon.com/gp/product/B004UFXN8C/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B004UFXN8C&linkId=4e6ad44bb5234e363a785d7cba350947",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1853262838/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1853262838&linkCode=as2&tag=flowoflearnin-20&linkId=87728dd9f0b7c515c9a56ce31b33f3f5"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1853262838&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1853262838" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Lew Wallace"],
    author_url: ["https://en.wikipedia.org/wiki/Lew_Wallace"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1880,
    book_lists: [4, 6],
    page_name: "ben-hur-a-tale-of-christ",
  },
  {
    id: 13,
    name: "Beyond Good and Evil: Prelude to a Philosophy of the Future",
    url:
      "https://www.amazon.com/gp/product/1503250881/ref=as_li_tl?ie=UTF8&tag=flowoflearnin-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1503250881&linkId=bfe7285e93dec5afb43704c1c091804b",
    audible_url:
      "https://www.amazon.com/gp/product/B004UR4RFI/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B004UR4RFI&linkId=87b5598c72d9542cc023a44eeb4d354f",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1503250881/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1503250881&linkCode=as2&tag=flowoflearnin-20&linkId=eb6f673b621a6ec8d8be478a44fc4247"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1503250881&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1503250881" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Friedrich Nietzsche"],
    author_url: ["https://en.wikipedia.org/wiki/Friedrich_Nietzsche"],
    /*estimated_reading_time: ,*/
    national_origin: "Germany",
    year_completion: 1886,
    book_lists: [5, 6],
    page_name: "beyond-good-and-evil",
  },
  {
    id: 14,
    name: "Black Beauty",
    url:
      "https://www.amazon.com/gp/product/1503251284/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1503251284&linkId=7056be9d288b86eb598bcd54acdb8924",
    audible_url:
      "https://www.amazon.com/gp/product/B000JCE3DO/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B000JCE3DO&linkId=712a571cf775f04699a84f3dc9e26223",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1503251284/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1503251284&linkCode=as2&tag=flowoflearnin-20&linkId=c47297b0eb9ace5438e34ee7ebaa454a"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1503251284&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1503251284" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Anna Sewell"],
    author_url: ["https://en.wikipedia.org/wiki/Anna_Sewell"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1877,
    book_lists: [4, 6],
    page_name: "black-beauty",
  },
  {
    id: 15,
    name: "Brave New World",
    url:
      "https://www.amazon.com/gp/product/0060850523/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0060850523&linkId=5144f10efbf931f8040864cef8236054",
    audible_url:
      "https://www.amazon.com/gp/product/B0012QED5Y/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0012QED5Y&linkId=7c02565a18aecbd26999008bf22964c4",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0060850523/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0060850523&linkCode=as2&tag=flowoflearnin-20&linkId=6224af832047c2dd526e9aaca38ea29a"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0060850523&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0060850523" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Aldous Huxley"],
    author_url: ["https://en.wikipedia.org/wiki/Aldous_Huxley"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1932,
    book_lists: [2, 5, 7],
    page_name: "brave-new-world",
  },
  {
    id: 16,
    name: "The Brothers Karamazov",
    url:
      "https://www.amazon.com/gp/product/0486437914/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0486437914&linkId=9ab369018b79fe0eff0364c9048a92b7",
    audible_url:
      "https://www.amazon.com/gp/product/B002S4SQKM/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B002S4SQKM&linkId=76d86936db069937babd2a77144de7ee",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0486437914/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0486437914&linkCode=as2&tag=flowoflearnin-20&linkId=a70329b71c2a23bd028fb8f47fc226fc"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0486437914&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0486437914" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Fyodor Dostoevsky"],
    author_url: ["https://en.wikipedia.org/wiki/Fyodor_Dostoevsky"],
    /*estimated_reading_time: ,*/
    national_origin: "Russia",
    year_completion: 1880,
    book_lists: [3, 5, 7],
    page_name: "brothers-karamazov",
  },
  {
    id: 17,
    name: "The Canterbury Tales",
    url:
      "https://www.amazon.com/gp/product/0140424385/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0140424385&linkId=55e263550df36ed5604e7a763dd978b4",
    audible_url:
      "https://www.amazon.com/gp/product/B00HCRSBNM/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00HCRSBNM&linkId=d3262dc0393c9e2c7e0371f8395da4c4",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0140424385/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0140424385&linkCode=as2&tag=flowoflearnin-20&linkId=7838df8db5fe7534761f7769b92fac4d"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0140424385&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0140424385" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Geoffrey Chaucer"],
    author_url: ["https://en.wikipedia.org/wiki/Geoffrey_Chaucer"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1476,
    book_lists: [3, 7],
    page_name: "canterbury-tales",
  },
  {
    id: 18,
    name: "Catch-22",
    url:
      "https://www.amazon.com/gp/product/1451626657/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1451626657&linkId=2d82d53b0288cf8678d2084d3bb9d077",
    audible_url:
      "https://www.amazon.com/gp/product/B074TM89CD/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B074TM89CD&linkId=da122dc27c5d0c0577fe5fa67af1d80c",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1451626657/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1451626657&linkCode=as2&tag=flowoflearnin-20&linkId=05c36161bedd95e35a9ae9c77dc3c9f3"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1451626657&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1451626657" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Joseph Heller"],
    author_url: ["https://en.wikipedia.org/wiki/Joseph_Heller"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1961,
    book_lists: [4, 7],
    page_name: "catch-22",
  },
  {
    id: 19,
    name: "Charlotte's Web",
    url:
      "https://www.amazon.com/gp/product/0064410935/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0064410935&linkId=4d85fbf0bf73ce4737a5445199885c49",
    audible_url:
      "https://www.amazon.com/gp/product/B07S2TMG5F/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B07S2TMG5F&linkId=234c45cdd66ab03a78120911277b6c94",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0061124958/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0061124958&linkCode=as2&tag=flowoflearnin-20&linkId=13e3355d677e3a84c45a80b8842513bf"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0061124958&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0061124958" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["E. B. White"],
    author_url: ["https://en.wikipedia.org/wiki/E._B._White"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1952,
    book_lists: [4, 6],
    page_name: "charlottes-web",
  },
  {
    id: 20,
    name: "The Communist Manifesto",
    url:
      "https://www.amazon.com/gp/product/0717802418/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0717802418&linkId=f5c2e4718265b2d7c3258c3d027f1923",
    audible_url:
      "https://www.amazon.com/gp/product/B0058EEASQ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0058EEASQ&linkId=218006055ed7cdb460b11ea31113c7ac",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0717802418/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0717802418&linkCode=as2&tag=flowoflearnin-20&linkId=f25fd9f6b24b4470b49be24bacd0d041"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0717802418&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0717802418" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Karl Marx", "Friedrich Engels"],
    author_url: [
      "https://en.wikipedia.org/wiki/Karl_Marx",
      "https://en.wikipedia.org/wiki/Friedrich_Engels",
    ],
    /*estimated_reading_time: ,*/
    national_origin: "Germany",
    year_completion: 1848,
    book_lists: [2, 6],
    page_name: "communist-manifesto",
  },
  {
    id: 21,
    name: "The Complete Fairy Tales and Stories",
    url:
      "https://www.amazon.com/gp/product/0385189516/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0385189516&linkId=37cf8112a99851e57bfb0f54a2794424",
    audible_url:
      "https://www.amazon.com/gp/product/B079Y5G5GM/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B079Y5G5GM&linkId=a28c44d3ff92cd01a06e9bb0423b2385",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0385189516/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0385189516&linkCode=as2&tag=flowoflearnin-20&linkId=ae30b423c998bb78a61d56d4d912110b"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0385189516&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0385189516" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Hans Christian Andersen"],
    author_url: ["https://en.wikipedia.org/wiki/Hans_Christian_Andersen"],
    /*estimated_reading_time: ,*/
    national_origin: "Denmark",
    year_completion: 1835,
    book_lists: [3, 6],
    page_name: "complete-fairy-tales-and-stories",
  },
  {
    id: 22,
    name: "The Complete Works of William Shakespeare",
    url:
      "https://www.amazon.com/gp/product/185326895X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=185326895X&linkId=e1fa3c6defd55abab0c812e87b56b007",
    audible_url: "",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/185326895X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=185326895X&linkCode=as2&tag=flowoflearnin-20&linkId=9e8a47155064d1497a97af85bba0ad68"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=185326895X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=185326895X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["William Shakespeare"],
    author_url: ["https://en.wikipedia.org/wiki/William_Shakespeare"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: "1589 - 1616",
    book_lists: [2, 6],
    page_name: "complete-works-of-william-shakespeare",
  },
  {
    id: 23,
    name: "Crime and Punishment",
    url:
      "https://www.amazon.com/gp/product/0486415872/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0486415872&linkId=55197a8d60df3cc7e3e0304ddf9683b0",
    audible_url:
      "https://www.amazon.com/gp/product/B0011FSRTY/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0011FSRTY&linkId=aff7a9929f0f8f950f5dd0827752c5db",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0486415872/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0486415872&linkCode=as2&tag=flowoflearnin-20&linkId=096fbfed5a78460535d60c2e50822258"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0486415872&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0486415872" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Fyodor Dostoevsky"],
    author_url: ["https://en.wikipedia.org/wiki/Fyodor_Dostoevsky"],
    /*estimated_reading_time: ,*/
    national_origin: "Russia",
    year_completion: 1866,
    book_lists: [2, 3, 7],
    page_name: "crime-and-punishment",
  },
  {
    id: 24,
    name: "Democracy in America",
    url:
      "https://www.amazon.com/gp/product/0226805360/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0226805360&linkId=9b1a12b29f2c7d399a376887ada7560a",
    audible_url:
      "https://www.amazon.com/gp/product/B088P3SFRX/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B088P3SFRX&linkId=ab07ad4b2c932643e2e5e50e3986615a",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0226805360/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0226805360&linkCode=as2&tag=flowoflearnin-20&linkId=3281828998c939684045fb361e278011"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0226805360&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0226805360" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Alexis de Tocqueville"],
    author_url: ["https://en.wikipedia.org/wiki/Alexis_de_Tocqueville"],
    /*estimated_reading_time: ,*/
    national_origin: "France",
    year_completion: 1835,
    book_lists: [2, 6],
    page_name: "democracy-in-america",
  },
  {
    id: 25,
    name: "Demons",
    url:
      "https://www.amazon.com/gp/product/0679734511/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0679734511&linkId=3502f2cb60422741f7cfde8442db6833",
    audible_url: "",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0679734511/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0679734511&linkCode=as2&tag=flowoflearnin-20&linkId=d63633192a43e91d8d63d9184d0875b0"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0679734511&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0679734511" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Fyodor Dostoevsky"],
    author_url: ["https://en.wikipedia.org/wiki/Fyodor_Dostoevsky"],
    /*estimated_reading_time: ,*/
    national_origin: "Russia",
    year_completion: 1872,
    book_lists: [3, 5],
    page_name: "demons",
  },
  {
    id: 26,
    name: "The Diary of a Young Girl",
    url:
      "https://www.amazon.com/gp/product/0553577123/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0553577123&linkId=bb6f724214335bdd5a9424bcba665129",
    audible_url:
      "https://www.amazon.com/gp/product/B003NYOBPA/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B003NYOBPA&linkId=a6cc24751ab44a896ee9350a8291670f",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0553577123/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0553577123&linkCode=as2&tag=flowoflearnin-20&linkId=90c6d30325a0ad9be5894b87b0a1deae"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0553577123&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0553577123" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Anne Frank"],
    author_url: ["https://en.wikipedia.org/wiki/Anne_Frank"],
    /*estimated_reading_time: ,*/
    national_origin: "Netherlands",
    year_completion: 1947,
    book_lists: [2, 4, 6],
    page_name: "diary-of-a-young-girl",
  },
  {
    id: 27,
    name: "The Divine Comedy",
    url:
      "https://www.amazon.com/gp/product/0142437220/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0142437220&linkId=c8d440a6e2396071b8ff316ebd598cf5",
    audible_url:
      "https://www.amazon.com/gp/product/B00FPDQ6G4/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00FPDQ6G4&linkId=2c381f5ed81cef1647f3efd9237d4358",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0142437220/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0142437220&linkCode=as2&tag=flowoflearnin-20&linkId=97c0a3dbe7ccf2c46a110b95d09e4610"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0142437220&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0142437220" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Dante Alighieri"],
    author_url: ["https://en.wikipedia.org/wiki/Dante_Alighieri"],
    /*estimated_reading_time: ,*/
    national_origin: "Italy",
    year_completion: 1472,
    book_lists: [2, 3, 4, 6, 7],
    page_name: "divine-comedy",
  },
  {
    id: 28,
    name: "Don Quixote",
    url:
      "https://www.amazon.com/gp/product/0142437239/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0142437239&linkId=8457ef9f31e84465a10fabcd7066b6cb",
    audible_url:
      "https://www.amazon.com/gp/product/B083JJYRCV/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B083JJYRCV&linkId=3826b6adceab8f6ec63659f6bac7fc6c",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0142437239/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0142437239&linkCode=as2&tag=flowoflearnin-20&linkId=4c2b0d7719253baabba96ca3ed1ec9e5"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0142437239&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0142437239" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Miguel De Cervantes"],
    author_url: ["https://en.wikipedia.org/wiki/Miguel_de_Cervantes"],
    /*estimated_reading_time: ,*/
    national_origin: "Spain",
    year_completion: 1605,
    book_lists: [1, 2, 3, 4, 6, 7],
    page_name: "don-quixote",
  },
  {
    id: 29,
    name: "Fahrenheit 451",
    url:
      "https://www.amazon.com/gp/product/1451673310/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1451673310&linkId=3ecbcf99f56b47a6c82e8d440f4cb70e",
    audible_url:
      "https://www.amazon.com/gp/product/B00M4OO96Q/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00M4OO96Q&linkId=b698304a9737c565c13c1413bd4ea778",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1451673310/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1451673310&linkCode=as2&tag=flowoflearnin-20&linkId=772a91a5a2832c5b1c26f4c45bfd327f"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1451673310&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1451673310" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Ray Bradbury"],
    author_url: ["https://en.wikipedia.org/wiki/Ray_Bradbury"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1953,
    book_lists: [4, 7],
    page_name: "fahrenheit-451",
  },
  {
    id: 30,
    name: "Faust, First Part",
    url:
      "https://www.amazon.com/gp/product/0486821889/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0486821889&linkId=d71209a5da79cba752d414905975e9a2",
    audible_url:
      "https://www.amazon.com/gp/product/B017WT626C/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B017WT626C&linkId=9649c28e42c7a3fae01f6bbd42b73e27",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0486821889/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0486821889&linkCode=as2&tag=flowoflearnin-20&linkId=eedca31a755aa322b0331412796ec2d0"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0486821889&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0486821889" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Johann Wolfgang von Goethe"],
    author_url: ["https://en.wikipedia.org/wiki/Johann_Wolfgang_von_Goethe"],
    /*estimated_reading_time: ,*/
    national_origin: "Germany",
    year_completion: 1790,
    book_lists: [2, 3, 6],
    page_name: "faust-first-part",
  },
  {
    id: 31,
    name: "The Federalist Papers",
    url:
      "https://www.amazon.com/gp/product/0486496368/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0486496368&linkId=ce551cd845d6a74e4655da2ac7ae62ef",
    audible_url:
      "https://www.amazon.com/gp/product/B004HFK14E/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B004HFK14E&linkId=18b79765153d821935fbe23f101bc7d5",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0486496368/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0486496368&linkCode=as2&tag=flowoflearnin-20&linkId=90eedce547594d5109d8a4f1db80cbdc"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0486496368&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0486496368" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Alexander Hamilton", "James Madison", "John Jay"],
    author_url: [
      "https://en.wikipedia.org/wiki/Alexander_Hamilton",
      "https://en.wikipedia.org/wiki/James_Madison",
      "https://en.wikipedia.org/wiki/John_Jay",
    ],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1788,
    book_lists: [6, 7],
    page_name: "federalist-papers",
  },
  {
    id: 32,
    name: "For Whom the Bell Tolls",
    url:
      "https://www.amazon.com/gp/product/0684803356/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0684803356&linkId=96803ff9d5c9f11865990229d64f3038",
    audible_url:
      "https://www.amazon.com/gp/product/B000FIHM3A/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B000FIHM3A&linkId=1e24774071552dbd46c754e9fba142af",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0684803356/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0684803356&linkCode=as2&tag=flowoflearnin-20&linkId=7bb0c70ab0710e5a90d97577e47fb8bb"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0684803356&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0684803356" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Ernest Hemingway"],
    author_url: ["https://en.wikipedia.org/wiki/Ernest_Hemingway"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1940,
    book_lists: [5, 7],
    page_name: "for-whom-the-bell-tolls",
  },
  {
    id: 33,
    name: "Frankenstein",
    url:
      "https://www.amazon.com/gp/product/0486282112/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0486282112&linkId=f5d9c8bcee9c6090e87f1acc11b8942a",
    audible_url:
      "https://www.amazon.com/gp/product/B00FQS5BBO/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00FQS5BBO&linkId=75910265567206a4c0c38277ad619484",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0486282112/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0486282112&linkCode=as2&tag=flowoflearnin-20&linkId=0f296bdf08035b8b84e48d66242b3896"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0486282112&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0486282112" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Mary Shelley"],
    author_url: ["https://en.wikipedia.org/wiki/Mary_Shelley"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1818,
    book_lists: [6, 7],
    page_name: "frankenstein",
  },
  {
    id: 34,
    name: "The Godfather",
    url:
      "https://www.amazon.com/gp/product/0451205766/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0451205766&linkId=2d392490c001e7adfba3c2f29a274ccc",
    audible_url:
      "https://www.amazon.com/gp/product/B007JSDY7W/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B007JSDY7W&linkId=e1ae57e58f19b602a306b0ea63ba8054",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0451205766/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0451205766&linkCode=as2&tag=flowoflearnin-20&linkId=34c13271c1e4cc985b13a4b1a36bace0"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0451205766&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0451205766" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Mario Puzo"],
    author_url: ["https://en.wikipedia.org/wiki/Mario_Puzo"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1969,
    book_lists: [4, 7],
    page_name: "godfather",
  },
  {
    id: 35,
    name: "The Grapes of Wrath",
    url:
      "https://www.amazon.com/gp/product/0143039431/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0143039431&linkId=a89d65928a1e2e2ff179970bfc8e4ea4",
    audible_url:
      "https://www.amazon.com/gp/product/B0055WXT56/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0055WXT56&linkId=f848dd2807fb2cabbbdb1a3e16fab67d",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0143039431/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0143039431&linkCode=as2&tag=flowoflearnin-20&linkId=882b626a0947117470cdd4dfdd1c49be"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0143039431&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0143039431" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["John Steinbeck"],
    author_url: ["https://en.wikipedia.org/wiki/John_Steinbeck"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1939,
    book_lists: [4, 5, 7],
    page_name: "grapes-of-wrath",
  },
  {
    id: 36,
    name: "Great Expectations",
    url:
      "https://www.amazon.com/gp/product/0141439564/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0141439564&linkId=1d3f133ce2505dc1364eed697ef5cbd1",
    audible_url:
      "https://www.amazon.com/gp/product/B01JVSJ0LG/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B01JVSJ0LG&linkId=20951ae792a7966f6ef775f68e90e164",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0141439564/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0141439564&linkCode=as2&tag=flowoflearnin-20&linkId=c67e793aa4273117c38cb3f2cd696d7f"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0141439564&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0141439564" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Charles Dickens"],
    author_url: ["https://en.wikipedia.org/wiki/Charles_Dickens"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1861,
    book_lists: [3, 6],
    page_name: "great-expectations",
  },
  {
    id: 37,
    name: "The Great Gasby",
    url:
      "https://www.amazon.com/gp/product/0743273567/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0743273567&linkId=c41eaceb0fb8805f074ea2873f49e493",
    audible_url:
      "https://www.amazon.com/gp/product/B00BWY8FAU/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00BWY8FAU&linkId=b48d5732f5207bffdb1ddec8240906fb",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0743273567/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0743273567&linkCode=as2&tag=flowoflearnin-20&linkId=f13690ac1991d3e5f3be732e11db8f2f"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0743273567&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0743273567" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["F. Scott Fitzgerald"],
    author_url: ["https://en.wikipedia.org/wiki/F._Scott_Fitzgerald"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1925,
    book_lists: [1, 4, 7],
    page_name: "great-gatsby",
  },
  {
    id: 38,
    name: "Grimm's Fairy Tales",
    url:
      "https://www.amazon.com/gp/product/0691173222/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0691173222&linkId=ad9f6c8f5b34565253c130d65fd954df",
    audible_url:
      "https://www.amazon.com/gp/product/B00R6IRFG6/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00R6IRFG6&linkId=b7a0994e583502c683ff9350aba9bdba",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0691160597/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0691160597&linkCode=as2&tag=flowoflearnin-20&linkId=1d071ef0308a07388ee261179e745447"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0691160597&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0691160597" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Jacob Grimm", "Wilhelm Grimm"],
    author_url: [
      "https://en.wikipedia.org/wiki/Jacob_Grimm",
      "https://en.wikipedia.org/wiki/Wilhelm_Grimm",
    ],
    /*estimated_reading_time: ,*/
    national_origin: "Germany",
    year_completion: 1812,
    book_lists: [4, 6],
    page_name: "grimms-fairy-tales",
  },
  {
    id: 39,
    name: "The Gulag Archipelago",
    url:
      "https://www.amazon.com/gp/product/1784871516/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1784871516&linkId=00644c339069888f1c13c6b329bd3ebd",
    audible_url: "",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1784871516/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1784871516&linkCode=as2&tag=flowoflearnin-20&linkId=1313ad6c81c6a4851eedfaa571530615"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1784871516&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1784871516" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Aleksandr Solzhenitsyn"],
    author_url: ["https://en.wikipedia.org/wiki/Aleksandr_Solzhenitsyn"],
    /*estimated_reading_time: ,*/
    national_origin: "Soviet Union",
    year_completion: 1973,
    book_lists: [5, 6],
    page_name: "gulag-archipelago",
  },
  {
    id: 40,
    name: "Gulliver's Travels",
    url:
      "https://www.amazon.com/gp/product/0486292738/ref=as_li_tl?ie=UTF8&tag=flowoflearnin-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0486292738&linkId=c9919bfa204d660462d7733d75c8bbf4",
    audible_url:
      "https://www.amazon.com/gp/product/B00OSBIQF8/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00OSBIQF8&linkId=4a86e8251dc3dd73357756d92a05ce84",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0486292738/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0486292738&linkCode=as2&tag=flowoflearnin-20&linkId=b89bad91d0eac40d5eee224a92fc7de0"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0486292738&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0486292738" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Johnathan Swift"],
    author_url: ["https://en.wikipedia.org/wiki/Jonathan_Swift"],
    /*estimated_reading_time: ,*/
    national_origin: "Ireland",
    year_completion: 1726,
    book_lists: [3, 6],
    page_name: "gullivers-travels",
  },
  {
    id: 41,
    name: "Hamlet",
    url:
      "https://www.amazon.com/gp/product/1420952145/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1420952145&linkId=039fc34df9d91df30bb87f2467f0e2e1",
    audible_url:
      "https://www.amazon.com/gp/product/B00L4B5R2K/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00L4B5R2K&linkId=bedfc8851169594f02e29e9723864f62",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1420952145/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1420952145&linkCode=as2&tag=flowoflearnin-20&linkId=9e151f8b5d7b25aebb56f9a5abf7f861"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1420952145&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1420952145" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["William Shakespeare"],
    author_url: ["https://en.wikipedia.org/wiki/William_Shakespeare"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1603,
    book_lists: [2, 3, 6, 7],
    page_name: "hamlet",
  },
  {
    id: 42,
    name: "Heidi",
    url:
      "https://www.amazon.com/gp/product/1508480567/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1508480567&linkId=0f284f91bdb31f72db7d0d4fcb136007",
    audible_url:
      "https://www.amazon.com/gp/product/B078K35YMJ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B078K35YMJ&linkId=1e1cbc60d5c963910943c93c64c2af35",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1508480567/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1508480567&linkCode=as2&tag=flowoflearnin-20&linkId=f5364c5f2cb2cf6c71ad7c19b042e995"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1508480567&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1508480567" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Johanna Spyri"],
    author_url: ["https://en.wikipedia.org/wiki/Johanna_Spyri"],
    /*estimated_reading_time: ,*/
    national_origin: "Switzerland",
    year_completion: 1880,
    book_lists: [4, 6],
    page_name: "heidi",
  },
  {
    id: 43,
    name: "The Hobbit",
    url:
      "https://www.amazon.com/gp/product/054792822X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=054792822X&linkId=9b44969cc2a6d075264f834b4195e4a6",
    audible_url:
      "https://www.amazon.com/gp/product/B0099SNV7I/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0099SNV7I&linkId=4bd84c760ce176faa735169b7be31af8",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/054792822X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=054792822X&linkCode=as2&tag=flowoflearnin-20&linkId=30b01dd74799f9320676a3d1a8c309ce"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=054792822X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=054792822X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["J. R. R. Tolkien"],
    author_url: ["https://en.wikipedia.org/wiki/J._R._R._Tolkien"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1937,
    book_lists: [4, 6, 7],
    page_name: "hobbit",
  },
  {
    id: 44,
    name: "The Holy Bible",
    url:
      "https://www.amazon.com/gp/product/1565633253/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1565633253&linkId=727cd194caf02c218c0a6d7193974ca7",
    audible_url:
      "https://www.amazon.com/gp/product/B07LC3KXR4/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B07LC3KXR4&linkId=9ebbc8ab0bf188e9e01abd6e82bee788",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1565633253/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1565633253&linkCode=as2&tag=flowoflearnin-20&linkId=c401efcf92d829c514f1dc21eb9091dc"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1565633253&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1565633253" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: [],
    author_url: [],
    /*estimated_reading_time: ,*/
    national_origin: "Israel and the Mediterranean Region",
    year_completion: "",
    book_lists: [2, 6, 7],
    page_name: "holy-bible",
  },
  {
    id: 45,
    name: "How to Win Friends and Influence People",
    url:
      "https://www.amazon.com/gp/product/0671027034/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0671027034&linkId=afdb6894ec56ecf0f3864d0121b2c57d",
    audible_url:
      "https://www.amazon.com/gp/product/B0006IU7JK/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0006IU7JK&linkId=26e5a4472c60a22fa386eb20c3b199b7",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0671027034/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0671027034&linkCode=as2&tag=flowoflearnin-20&linkId=7fe72a045de04bd535d27157f238ab72"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0671027034&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0671027034" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Dale Carnegie"],
    author_url: ["https://en.wikipedia.org/wiki/Dale_Carnegie"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1936,
    book_lists: [4, 7],
    page_name: "how-to-win-friends-and-influence-people",
  },
  {
    id: 46,
    name: "The Idiot",
    url:
      "https://www.amazon.com/gp/product/1853261750/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1853261750&linkId=088ca454323203e325fce1e9ff3e2510",
    audible_url:
      "https://www.amazon.com/gp/product/B01MRCXFE1/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B01MRCXFE1&linkId=0732a308db0ebe59535079795efd5e72",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1853261750/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1853261750&linkCode=as2&tag=flowoflearnin-20&linkId=35212146ba21480904f96ed4eee926e2"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1853261750&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1853261750" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Fyodor Dostoevsky"],
    author_url: ["https://en.wikipedia.org/wiki/Fyodor_Dostoevsky"],
    /*estimated_reading_time: ,*/
    national_origin: "Russia",
    year_completion: 1869,
    book_lists: [3, 5],
    page_name: "idiot",
  },
  {
    id: 47,
    name: "The Iliad",
    url:
      "https://www.amazon.com/gp/product/0140275363/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0140275363&linkId=aa8fd872bdba31177bc6978fc714eaf1",
    audible_url:
      "https://www.amazon.com/gp/product/B07TV7P4K1/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B07TV7P4K1&linkId=1d5db471ebe22811b8074d982834e6f2",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0140275363/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0140275363&linkCode=as2&tag=flowoflearnin-20&linkId=e98dbe4405ce124a41ef114ac60279a1"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0140275363&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0140275363" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Homer"],
    author_url: ["https://en.wikipedia.org/wiki/Homer"],
    /*estimated_reading_time: ,*/
    national_origin: "Greece",
    year_completion: "762 BC",
    book_lists: [2, 3, 6, 7],
    page_name: "iliad",
  },
  {
    id: 48,
    name: "In Search of Lost Time",
    url:
      "https://www.amazon.com/gp/product/0142437964/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0142437964&linkId=cbd14af125c38e7e6435165c8f074b4c",
    audible_url:
      "https://www.amazon.com/gp/product/B002GDEW9Y/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B002GDEW9Y&linkId=e1d68b2a4a2e63c3655195a772a5b020",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0142437964/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0142437964&linkCode=as2&tag=flowoflearnin-20&linkId=cc4026fc038eecefcb0dd4eb13c1c495"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0142437964&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0142437964" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Marcel Proust"],
    author_url: ["https://en.wikipedia.org/wiki/Marcel_Proust"],
    /*estimated_reading_time: ,*/
    national_origin: "France",
    year_completion: 1913,
    book_lists: [2, 3],
    page_name: "in-search-of-lost-time",
  },
  {
    id: 49,
    name: "Invisible Man",
    url:
      "https://www.amazon.com/gp/product/0679732764/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0679732764&linkId=d6019bc239c2335e712711b09878aa73",
    audible_url:
      "https://www.amazon.com/gp/product/B004H0H4Y4/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B004H0H4Y4&linkId=f8bb71166df07cd2f178c6f9cc7324b3",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0679732764/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0679732764&linkCode=as2&tag=flowoflearnin-20&linkId=35f66a2fdb291429a86434c2044fedf2"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0679732764&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0679732764" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Ralph Ellison"],
    author_url: ["https://en.wikipedia.org/wiki/Ralph_Ellison"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1952,
    book_lists: [1, 3, 7],
    page_name: "invisible-man",
  },
  {
    id: 50,
    name: "Jane Eyre",
    url:
      "https://www.amazon.com/gp/product/0553211404/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0553211404&linkId=5d5c226ba267675dff2f010e409b8f1a",
    audible_url:
      "https://www.amazon.com/gp/product/B0098KOSCE/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0098KOSCE&linkId=1ee7ed56db0966ff11780170e24c415c",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0553211404/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0553211404&linkCode=as2&tag=flowoflearnin-20&linkId=3754cdd9eceb610a137815748b47b5e5"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0553211404&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0553211404" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Charlotte Bronte"],
    author_url: ["https://en.wikipedia.org/wiki/Charlotte_Bront%C3%AB"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1847,
    book_lists: [1, 6],
    page_name: "jane-eyre",
  },
  {
    id: 51,
    name: "The Last Mohicans",
    url:
      "https://www.amazon.com/gp/product/0553213296/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0553213296&linkId=aaf3b733b84e18203602e6ad77db0e7a",
    audible_url:
      "https://www.amazon.com/gp/product/B07282QFC9/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B07282QFC9&linkId=c5e4dcd2b207b91c5920166a17cbd28b",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0553213296/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0553213296&linkCode=as2&tag=flowoflearnin-20&linkId=8311c3be3b46a4d4c1c900fcd4d97b0c"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0553213296&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0553213296" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["James Fenimore Cooper"],
    author_url: ["https://en.wikipedia.org/wiki/James_Fenimore_Cooper"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1826,
    book_lists: [6, 7],
    page_name: "last-of-the-mohicans",
  },
  {
    id: 52,
    name: "Les Miserables",
    url:
      "https://www.amazon.com/gp/product/045141943X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=045141943X&linkId=429a0ba013c8c337d3600460c3a17eaf",
    audible_url:
      "https://www.amazon.com/gp/product/B0000545C8/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0000545C8&linkId=7e3dfc514299aae855b7bfbe2dcf64e9",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/045141943X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=045141943X&linkCode=as2&tag=flowoflearnin-20&linkId=4f8fe3a465a56569bd7a4965f0761ec5"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=045141943X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=045141943X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Victor Hugo"],
    author_url: ["https://en.wikipedia.org/wiki/Victor_Hugo"],
    /*estimated_reading_time: ,*/
    national_origin: "France",
    year_completion: 1862,
    book_lists: [6, 7],
    page_name: "les-miserables",
  },
  {
    id: 53,
    name: "Leviathan",
    url:
      "https://www.amazon.com/gp/product/0140431950/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0140431950&linkId=83ebf2acc46cc2c38669464bd77f47a1",
    audible_url:
      "https://www.amazon.com/gp/product/B005JR93AW/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B005JR93AW&linkId=0df5fa63e8cd0d6cf56be8d26a641a22",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0140431950/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0140431950&linkCode=as2&tag=flowoflearnin-20&linkId=72bb42dfdba185b63d7decf82cca2d1c"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0140431950&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0140431950" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Thomas Hobbes"],
    author_url: ["https://en.wikipedia.org/wiki/Thomas_Hobbes"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1651,
    book_lists: [6, 7],
    page_name: "leviathan",
  },
  {
    id: 54,
    name: "Life of Frederick Douglass, an American Slave",
    url:
      "https://www.amazon.com/gp/product/1678620386/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1678620386&linkId=7c0ae31c19bb134addd7d1d0359dd903",
    audible_url:
      "https://www.amazon.com/gp/product/B015F0BJP4/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B015F0BJP4&linkId=cdb5b63c7d002d0864b30f71da3b562a",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1678620386/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1678620386&linkCode=as2&tag=flowoflearnin-20&linkId=3c8a0fb11eaecdc26aad9d8f31b032ab"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1678620386&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1678620386" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Frederick Douglass"],
    author_url: ["https://en.wikipedia.org/wiki/Frederick_Douglass"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1845,
    book_lists: [2, 6],
    page_name: "life-of-frederick-douglass-an-american-slave",
  },
  {
    id: 55,
    name: "Lives of the Noble Grecians and Romans",
    url:
      "https://www.amazon.com/gp/product/1781395136/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1781395136&linkId=df17427469a3c824c71295aca6fa6a83",
    audible_url:
      "https://www.amazon.com/gp/product/B00U2YOX2A/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00U2YOX2A&linkId=23f724038ba25c2ed1b915463c68fd49",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1781395136/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1781395136&linkCode=as2&tag=flowoflearnin-20&linkId=6d7bc121fc559cf5397207f9050e39a6"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1781395136&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1781395136" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Plutarch"],
    author_url: ["https://en.wikipedia.org/wiki/Plutarch"],
    /*estimated_reading_time: ,*/
    national_origin: "Roman Empire",
    year_completion: "70 - 120 AD",
    book_lists: [6, 7],
    page_name: "lives-of-the-noble-grecians-and-romans",
  },
  {
    id: 56,
    name: "Lolita",
    url:
      "https://www.amazon.com/gp/product/0679723161/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0679723161&linkId=7744a61a4825993ec27b995205f8b172",
    audible_url:
      "https://www.amazon.com/gp/product/B000BKHEV2/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B000BKHEV2&linkId=575c54491368f0ee643f57209a247666",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0679723161/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0679723161&linkCode=as2&tag=flowoflearnin-20&linkId=81025b4ebd6086039c93506220ce7845"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0679723161&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0679723161" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Vladimir Nabokov"],
    author_url: ["https://en.wikipedia.org/wiki/Vladimir_Nabokov"],
    /*estimated_reading_time: ,*/
    national_origin: "Soviet Union",
    year_completion: 1955,
    book_lists: [3, 4],
    page_name: "lolita",
  },
  {
    id: 57,
    name: "The Long Goodbye",
    url:
      "https://www.amazon.com/gp/product/0394757688/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0394757688&linkId=09693faa6ae4cbb60d5543fed730293e",
    audible_url:
      "https://www.amazon.com/gp/product/B00QSFX3OQ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00QSFX3OQ&linkId=1a68bc23c3026ab45ea55cf69a0590a7",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0394757688/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0394757688&linkCode=as2&tag=flowoflearnin-20&linkId=09fb6e748a9e13c6e9ce73677a5822dd"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0394757688&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0394757688" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Raymond Chandler"],
    author_url: ["https://en.wikipedia.org/wiki/Raymond_Chandler"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1953,
    book_lists: [5, 6],
    page_name: "long-goodbye",
  },
  {
    id: 58,
    name: "Lord of the Flies",
    url:
      "https://www.amazon.com/gp/product/0399501487/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0399501487&linkId=7e639a1af7da90f2c81631691692bfe9",
    audible_url:
      "https://www.amazon.com/gp/product/B0000E69E3/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0000E69E3&linkId=e547c48f19ce43e3cd7bf3bd63da8063",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0399501487/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0399501487&linkCode=as2&tag=flowoflearnin-20&linkId=0499473f57bb7ec57fcdf1b3590fdf76"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0399501487&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0399501487" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["William Golding"],
    author_url: ["https://en.wikipedia.org/wiki/William_Golding"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1954,
    book_lists: [5, 7],
    page_name: "lord-of-the-flies",
  },
  {
    id: 59,
    name: "The Lord of the Rings",
    url:
      "https://www.amazon.com/gp/product/0345538374/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0345538374&linkId=48a123ea8f61c5a1ca1f908fa5cc95c3",
    audible_url: [
      "https://www.amazon.com/gp/product/B0099SNQYG/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0099SNQYG&linkId=71ad67f061255b6f4baae7f940e72b4b",
      "https://www.amazon.com/gp/product/B009NOT6GS/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B009NOT6GS&linkId=a99317bb9d3b7762630ab6d30cd7dd71",
      "https://www.amazon.com/gp/product/B009NOT66S/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B009NOT66S&linkId=6a4d115c21f931e2b7047a3413d0dca8",
    ],
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0345538374/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0345538374&linkCode=as2&tag=flowoflearnin-20&linkId=0f3aac0b5f17db1ec9a531e77fd79a65"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0345538374&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0345538374" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["J. R. R. Tolkien"],
    author_url: ["https://en.wikipedia.org/wiki/J._R._R._Tolkien"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1954,
    book_lists: [2, 4, 6, 7],
    page_name: "lord-of-the-rings",
  },
  {
    id: 60,
    name: "Madame Bovary",
    url:
      "https://www.amazon.com/gp/product/014310649X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=014310649X&linkId=9b191909a0eec45895d07247e544d174",
    audible_url:
      "https://www.amazon.com/gp/product/B07BB554BP/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B07BB554BP&linkId=2a5d97abde9836717eb718ddc8aadc2f",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/014310649X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=014310649X&linkCode=as2&tag=flowoflearnin-20&linkId=e46471b8f8f7269e233959ede62180f5"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=014310649X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=014310649X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Gustave Flaubert"],
    author_url: ["https://en.wikipedia.org/wiki/Gustave_Flaubert"],
    /*estimated_reading_time: ,*/
    national_origin: "France",
    year_completion: 1856,
    book_lists: [2, 3],
    page_name: "madame-bovary",
  },
  {
    id: 61,
    name: "The Maltese Falcon",
    url:
      "https://www.amazon.com/gp/product/0679722645/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0679722645&linkId=21a8b296f75a08d4f12011cf73e2d4ab",
    audible_url:
      "https://www.amazon.com/gp/product/B0001MC20S/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0001MC20S&linkId=676051e1e790dfe9981e06d8829cedfd",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0679722645/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0679722645&linkCode=as2&tag=flowoflearnin-20&linkId=22682cfe5ecca6f6d63fac82ac5be0b0"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0679722645&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0679722645" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Dashiell Hammett"],
    author_url: ["https://en.wikipedia.org/wiki/Dashiell_Hammett"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1929,
    book_lists: [5, 7],
    page_name: "maltese-falcon",
  },
  {
    id: 62,
    name: "Man's Search for Meaning",
    url:
      "https://www.amazon.com/gp/product/0807014273/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0807014273&linkId=f1afbaaef1f235246e01493de2a8d6b9",
    audible_url:
      "https://www.amazon.com/gp/product/B0006IU470/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0006IU470&linkId=6d3c20ba129c3309f5a105a5693bbeb3",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0807014273/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0807014273&linkCode=as2&tag=flowoflearnin-20&linkId=f5a15e56b7ff0885f41e0e2bfc0a2ecd"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0807014273&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0807014273" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Viktor Frankl"],
    author_url: ["https://en.wikipedia.org/wiki/Viktor_Frankl"],
    /*estimated_reading_time: ,*/
    national_origin: "Austria",
    year_completion: 1946,
    book_lists: [4, 5, 7],
    page_name: "mans-search-for-meaning",
  },
  {
    id: 63,
    name: "The Master and Margarita",
    url:
      "https://www.amazon.com/gp/product/0143108271/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0143108271&linkId=3729dcb995d3c2d10483f689a8b219c5",
    audible_url:
      "https://www.amazon.com/gp/product/B002PXRRI8/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B002PXRRI8&linkId=2ef07ba49da0728c7729469f227528de",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0143108271/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0143108271&linkCode=as2&tag=flowoflearnin-20&linkId=a2abe6307100328fc1ccc7792419a104"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0143108271&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0143108271" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Mikhail Bulgakov"],
    author_url: ["https://en.wikipedia.org/wiki/Mikhail_Bulgakov"],
    /*estimated_reading_time: ,*/
    national_origin: "Soviet Union",
    year_completion: 1967,
    book_lists: [4, 5, 7],
    page_name: "master-and-margarita",
  },
  {
    id: 64,
    name: "Meditations",
    url:
      "https://www.amazon.com/gp/product/0812968255/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0812968255&linkId=792c52fc7403a3bfdc0fe56fe84ac4ad",
    audible_url:
      "https://www.amazon.com/gp/product/B008H33IXS/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B008H33IXS&linkId=f95104ea3c139d9e6cc4b9eec7b581e9",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0812968255/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0812968255&linkCode=as2&tag=flowoflearnin-20&linkId=5faebce838b70508fad0c0b8b70f3a42"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0812968255&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0812968255" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Marcus Aurelius"],
    author_url: ["https://en.wikipedia.org/wiki/Marcus_Aurelius"],
    /*estimated_reading_time: ,*/
    national_origin: "Roman Empire",
    year_completion: "161 - 180 AD",
    book_lists: [6, 7],
    page_name: "meditations",
  },
  {
    id: 65,
    name: "Moby Dick",
    url:
      "https://www.amazon.com/gp/product/0486432157/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0486432157&linkId=f7ef0cc54f049af768271bc9d790bce6",
    audible_url:
      "https://www.amazon.com/gp/product/B00T8YQSN2/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00T8YQSN2&linkId=34c2cda934e141ad8ff94f7ecef76485",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/B00726OT20/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00726OT20&linkCode=as2&tag=flowoflearnin-20&linkId=eaf2d87e5deafbb9ed9777a55b152d60"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00726OT20&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=B00726OT20" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Herman Melville"],
    author_url: ["https://en.wikipedia.org/wiki/Herman_Melville"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1851,
    book_lists: [2, 3, 6, 7],
    page_name: "moby-dick",
  },
  {
    id: 66,
    name: "Mrs. Dalloway",
    url:
      "https://www.amazon.com/gp/product/1781398186/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1781398186&linkId=aeb97034ed95a7bb134f6e2a9b551062",
    audible_url:
      "https://www.amazon.com/gp/product/B004D2QVN6/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B004D2QVN6&linkId=21789af26cf25911b0480e04b36b6e91",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1781398186/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1781398186&linkCode=as2&tag=flowoflearnin-20&linkId=a40b2bfa068980e8a6bd43270a1090cd"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1781398186&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1781398186" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Virginia Woolf"],
    author_url: ["https://en.wikipedia.org/wiki/Virginia_Woolf"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1925,
    book_lists: [1, 3],
    page_name: "mrs-dalloway",
  },
  {
    id: 67,
    name: "Native Son",
    url:
      "https://www.amazon.com/gp/product/006083756X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=006083756X&linkId=ed5b5034902fc61ae825358b1f0c0cb6",
    audible_url:
      "https://www.amazon.com/gp/product/B00282MRRM/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00282MRRM&linkId=2b34dd8f39dee600888ec3c40a08a18d",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/006083756X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=006083756X&linkCode=as2&tag=flowoflearnin-20&linkId=c17a82584ec035e156a4eb08d1df6666"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=006083756X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=006083756X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Richard Wright"],
    author_url: ["https://en.wikipedia.org/wiki/Richard_Wright_(author)"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1940,
    book_lists: [2, 7],
    page_name: "native-son",
  },
  {
    id: 68,
    name: "The Nicomachean Ethics",
    url:
      "https://www.amazon.com/gp/product/1420953648/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1420953648&linkId=e8bf17ae49515a0556313a965f6ff649",
    audible_url:
      "https://www.amazon.com/gp/product/B004UR4R1M/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B004UR4R1M&linkId=d3d51263b0c60c09269d2f6f26cb5ef3",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1420953648/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1420953648&linkCode=as2&tag=flowoflearnin-20&linkId=900584882587405f57a727cc211781df"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1420953648&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1420953648" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Aristotle"],
    author_url: ["https://en.wikipedia.org/wiki/Aristotle"],
    /*estimated_reading_time: ,*/
    national_origin: "Greece",
    year_completion: "4th Century BC",
    book_lists: [6, 7],
    page_name: "nicomachean-ethics",
  },
  {
    id: 69,
    name: "The Odyssey",
    url:
      "https://www.amazon.com/gp/product/0140268863/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0140268863&linkId=3e462bc70ee8d3a1129eb305841053f4",
    audible_url:
      "https://www.amazon.com/gp/product/B07XJ6HJXZ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B07XJ6HJXZ&linkId=fdddb112f17c38463524ec516a1cf1a7",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0140268863/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0140268863&linkCode=as2&tag=flowoflearnin-20&linkId=e1f85834bd39233aa627df3f0d8671fa"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0140268863&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0140268863" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Homer"],
    author_url: ["https://en.wikipedia.org/wiki/Homer"],
    /*estimated_reading_time: ,*/
    national_origin: "Greece",
    year_completion: "8th Century BC",
    book_lists: [2, 3, 6, 7],
    page_name: "odyssey",
  },
  {
    id: 70,
    name: "The Oedipus Trilogy",
    url:
      "https://www.amazon.com/gp/product/015602764X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=015602764X&linkId=a6814183b1ea37ac645fe30c5201f17f",
    audible_url:
      "https://www.amazon.com/gp/product/B002HIT0OK/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B002HIT0OK&linkId=20535816e70b036d8ee909443f00cd96",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/015602764X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=015602764X&linkCode=as2&tag=flowoflearnin-20&linkId=85ad37e0c67ae30835ddf6792b1e1edd"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=015602764X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=015602764X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Sophocles"],
    author_url: ["https://en.wikipedia.org/wiki/Sophocles"],
    /*estimated_reading_time: ,*/
    national_origin: "Greece",
    year_completion: "429 BC",
    book_lists: [3, 6],
    page_name: "oedipus-trilogy",
  },
  {
    id: 71,
    name: "The Old Man and the Sea",
    url:
      "https://www.amazon.com/gp/product/0684801221/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0684801221&linkId=911cfd6cced8b9aa4f2921b6206a8dc7",
    audible_url:
      "https://www.amazon.com/gp/product/B000FIHM3U/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B000FIHM3U&linkId=3e18050c60576ada86c7909a074d22ca",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0684801221/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0684801221&linkCode=as2&tag=flowoflearnin-20&linkId=70e6c1faf679a6b1cc7161801d75ca29"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0684801221&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0684801221" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Ernest Hemingway"],
    author_url: ["https://en.wikipedia.org/wiki/Ernest_Hemingway"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1952,
    book_lists: [3, 4, 5],
    page_name: "old-man-and-the-sea",
  },
  {
    id: 72,
    name: "On Liberty",
    url:
      "https://www.amazon.com/gp/product/0486421309/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0486421309&linkId=4ff8dc4e10889f5035aaef722c5cf4f5",
    audible_url:
      "https://www.amazon.com/gp/product/B07Y5QWF3V/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B07Y5QWF3V&linkId=94ac5e4a8862ee964256865f6db628fd",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0486421309/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0486421309&linkCode=as2&tag=flowoflearnin-20&linkId=e76c7c64f69ccc548b25820cc5c3d8c4"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0486421309&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0486421309" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["John Stuart Mill"],
    author_url: ["https://en.wikipedia.org/wiki/John_Stuart_Mill"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1859,
    book_lists: [2, 6],
    page_name: "on-liberty",
  },
  {
    id: 73,
    name: "On the Duty of Civil Disobedience",
    url:
      "https://www.amazon.com/gp/product/1097881709/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1097881709&linkId=d9f7cd7780e27e1f01887f2ff54d2941",
    audible_url:
      "https://www.amazon.com/gp/product/B006WIY2MG/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B006WIY2MG&linkId=30665e79a82b532fb12f7b3cfe243c75",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1097881709/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1097881709&linkCode=as2&tag=flowoflearnin-20&linkId=00e5babe33ae9624b1683a6e26955b3c"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1097881709&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1097881709" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Henry David Thoreau"],
    author_url: ["https://en.wikipedia.org/wiki/Henry_David_Thoreau"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1949,
    book_lists: [2, 6, 7],
    page_name: "on-the-duty-of-civil-disobedience",
  },
  {
    id: 74,
    name: "One Hundred Years of Solitude",
    url:
      "https://www.amazon.com/gp/product/0060883286/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0060883286&linkId=359f58f789c1d4a910156ab9beadb4f4",
    audible_url:
      "https://www.amazon.com/gp/product/B00EF86KK2/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00EF86KK2&linkId=a7a62a338d7947092b2a6df263b852c6",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0060883286/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0060883286&linkCode=as2&tag=flowoflearnin-20&linkId=1b4822f5a24652b63e2479ae03e88bbb"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0060883286&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0060883286" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Gabriel Garcia Marquez"],
    author_url: [
      "https://en.wikipedia.org/wiki/Gabriel_Garc%C3%ADa_M%C3%A1rquez",
    ],
    /*estimated_reading_time: ,*/
    national_origin: "Colombia",
    year_completion: 1967,
    book_lists: [1, 2, 3, 4, 7],
    page_name: "one-hundred-years-of-solitude",
  },
  {
    id: 75,
    name: "The Outsiders",
    url:
      "https://www.amazon.com/gp/product/014240733X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=014240733X&linkId=151d4b24e556c1f6d3283218ac04b6e7",
    audible_url:
      "https://www.amazon.com/gp/product/B0002QU5CK/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0002QU5CK&linkId=523ada2fc6454a145a806791bb97d2de",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/014240733X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=014240733X&linkCode=as2&tag=flowoflearnin-20&linkId=7a0094ef380fa91a9a7d9a8b10edfa3f"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=014240733X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=014240733X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["S. E. Hinton"],
    author_url: ["https://en.wikipedia.org/wiki/S._E._Hinton"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1967,
    book_lists: [4, 7],
    page_name: "outsiders",
  },
  {
    id: 76,
    name: "The Principia: Mathematical Principles of Natural Philosophy",
    url:
      "https://www.amazon.com/gp/product/1724680447/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1724680447&linkId=d40cac762ed13d7beddde6a0a60f6d93",
    audible_url: "",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1724680447/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1724680447&linkCode=as2&tag=flowoflearnin-20&linkId=75c70c9f5671037013cdb1d94e243360"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1724680447&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1724680447" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Isaac Newton"],
    author_url: ["https://en.wikipedia.org/wiki/Isaac_Newton"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1687,
    book_lists: [2, 6],
    page_name: "principia",
  },
  {
    id: 77,
    name: "Pride and Prejudice",
    url:
      "https://www.amazon.com/gp/product/0486284735/ref=as_li_tl?ie=UTF8&tag=flowoflearnin-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0486284735&linkId=aab1d33d88e1e4433015bc5dd342fe25",
    audible_url:
      "https://www.amazon.com/gp/product/B07CV2ZZM1/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B07CV2ZZM1&linkId=4c9de85f7cf24335ddabad9e8d422a89",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0141439513/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0141439513&linkCode=as2&tag=flowoflearnin-20&linkId=ab3914af2c55e4b71525deaed2f3062e"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0141439513&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0141439513" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Jane Austen"],
    author_url: ["https://en.wikipedia.org/wiki/Jane_Austen"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1813,
    book_lists: [3, 4, 6, 7],
    page_name: "pride-and-prejudice",
  },
  {
    id: 78,
    name: "The Prince",
    url:
      "https://www.amazon.com/gp/product/1514649314/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1514649314&linkId=27bcc87d13cbea093c4229569ab3a385",
    audible_url:
      "https://www.amazon.com/gp/product/B01I1VNZL0/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B01I1VNZL0&linkId=ca2b582497f1cf27e0b279ee576bad18",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1514649314/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1514649314&linkCode=as2&tag=flowoflearnin-20&linkId=7428bb7c3a9ebe706df10fc599a7850a"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1514649314&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1514649314" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Niccolo Machiavelli"],
    author_url: ["https://en.wikipedia.org/wiki/Niccol%C3%B2_Machiavelli"],
    /*estimated_reading_time: ,*/
    national_origin: "Italy",
    year_completion: 1532,
    book_lists: [2, 6, 7],
    page_name: "prince",
  },
  {
    id: 79,
    name: "The Red and the Black",
    url:
      "https://www.amazon.com/gp/product/0140447644/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0140447644&linkId=855e50711154b20ef51bdf8b8355b9f6",
    audible_url:
      "https://www.amazon.com/gp/product/B004M9ZOBA/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B004M9ZOBA&linkId=d5446b9742349022a79c92cefad9b21c",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0140447644/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0140447644&linkCode=as2&tag=flowoflearnin-20&linkId=dd748d91ed80f4ef89386e4666d52bd6"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0140447644&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0140447644" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Stendhal"],
    author_url: ["https://en.wikipedia.org/wiki/Stendhal"],
    /*estimated_reading_time: ,*/
    national_origin: "France",
    year_completion: 1830,
    book_lists: [3, 5],
    page_name: "red-and-the-black",
  },
  {
    id: 80,
    name: "The Republic",
    url:
      "https://www.amazon.com/gp/product/1420952846/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1420952846&linkId=c059ef8aacbc5b215674e2d5262a086f",
    audible_url:
      "https://www.amazon.com/gp/product/B01CORRQHG/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B01CORRQHG&linkId=66246b08c7f13834a5afa2e5a82fa225",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/B01C4MLVGS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01C4MLVGS&linkCode=as2&tag=flowoflearnin-20&linkId=e8add8312df18bc0037638b502ac1652"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01C4MLVGS&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=B01C4MLVGS" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Plato"],
    author_url: ["https://en.wikipedia.org/wiki/Plato"],
    /*estimated_reading_time: ,*/
    national_origin: "Greece",
    year_completion: "375 BC",
    book_lists: [2, 7],
    page_name: "republic",
  },
  {
    id: 81,
    name: "Robinson Crusoe",
    url:
      "https://www.amazon.com/gp/product/150329238X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=150329238X&linkId=ce774f57f49342441ea3ba0231c16075",
    audible_url:
      "https://www.amazon.com/gp/product/B001MUU1MY/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B001MUU1MY&linkId=1f4af41ad38c6a598fbe82763a740dff",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/150329238X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=150329238X&linkCode=as2&tag=flowoflearnin-20&linkId=352924555540d360ea3ed72efa2e9985"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=150329238X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=150329238X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Daniel Defoe"],
    author_url: ["https://en.wikipedia.org/wiki/Daniel_Defoe"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1719,
    book_lists: [6, 7],
    page_name: "robinson-crusoe",
  },
  {
    id: 82,
    name: "The Seven Habits of Highly Effective People",
    url:
      "https://www.amazon.com/gp/product/1451639619/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1451639619&linkId=41980f0d7cb30308e1f4c5c79e62b974",
    audible_url:
      "https://www.amazon.com/gp/product/B0006IU4C0/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0006IU4C0&linkId=6f68a30a18a70808661aa83a9e1ee866",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1451639619/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1451639619&linkCode=as2&tag=flowoflearnin-20&linkId=1b63c70a99ac6a4e8b1d3a48a3e72619"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1451639619&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1451639619" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Stephen R. Covey"],
    author_url: ["https://en.wikipedia.org/wiki/Stephen_Covey"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1989,
    book_lists: [4, 6, 7],
    page_name: "seven-habits-of-highly-effective-people",
  },
  {
    id: 83,
    name: "The Stranger",
    url:
      "https://www.amazon.com/gp/product/0679720200/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0679720200&linkId=706daabefa74880ce1a0c8384504d55b",
    audible_url:
      "https://www.amazon.com/gp/product/B0009QRZQ2/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0009QRZQ2&linkId=d7b2a45b41b82c1c37115b9dd9626a03",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0679720200/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0679720200&linkCode=as2&tag=flowoflearnin-20&linkId=41b9ca981a0af4ece7c954c79ed85fa6"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0679720200&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0679720200" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Albert Camus"],
    author_url: ["https://en.wikipedia.org/wiki/Albert_Camus"],
    /*estimated_reading_time: ,*/
    national_origin: "France",
    year_completion: 1942,
    book_lists: [3, 4, 7],
    page_name: "stranger",
  },
  {
    id: 84,
    name: "The Swiss Family Robinson",
    url:
      "https://www.amazon.com/gp/product/1514694395/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1514694395&linkId=63f411733344149da3fcd04741dd5706",
    audible_url:
      "https://www.amazon.com/gp/product/B0090W8XCQ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0090W8XCQ&linkId=b0a4a0aa3870489a8bf58f6e475ceaaa",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1514694395/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1514694395&linkCode=as2&tag=flowoflearnin-20&linkId=137db159bf9a9d053ee4aa5b211793ed"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1514694395&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1514694395" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Johann David Wyss"],
    author_url: ["https://en.wikipedia.org/wiki/Johann_David_Wyss"],
    /*estimated_reading_time: ,*/
    national_origin: "Switzerland",
    year_completion: 1812,
    book_lists: [6, 7],
    page_name: "swiss-family-robinson",
  },
  {
    id: 85,
    name: "The Tale of Genji",
    url:
      "https://www.amazon.com/gp/product/4805314648/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=4805314648&linkId=afe9e428803c6dd29d47dd9c375d49e7",
    audible_url:
      "https://www.amazon.com/gp/product/B07HPDYBCC/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B07HPDYBCC&linkId=18dd6bc08b763190bf4cf5055e663865",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/4805314648/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=4805314648&linkCode=as2&tag=flowoflearnin-20&linkId=57f31b0dd93e419b7a7aaf8ca20ffc79"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=4805314648&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=4805314648" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Murasaki Shikibu"],
    author_url: ["https://en.wikipedia.org/wiki/Murasaki_Shikibu"],
    /*estimated_reading_time: ,*/
    national_origin: "Japan",
    year_completion: "11th Century",
    book_lists: [2, 3],
    page_name: "tale-of-genji",
  },
  {
    id: 86,
    name: "A Tale of Two Cities",
    url:
      "https://www.amazon.com/gp/product/0486406512/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0486406512&linkId=afdf42e36265fec04c1856d979a39656",
    audible_url:
      "https://www.amazon.com/gp/product/B0030V51H8/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0030V51H8&linkId=ba5d0409a09a84745a8a5e7175827aae",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0486406512/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0486406512&linkCode=as2&tag=flowoflearnin-20&linkId=966d7d2caf4cc5be5079812f702abdd1"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0486406512&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0486406512" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Charles Dickens"],
    author_url: ["https://en.wikipedia.org/wiki/Charles_Dickens"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1859,
    book_lists: [4, 6, 7],
    page_name: "tale-of-two-cities",
  },
  {
    id: 87,
    name: "Things Fall Apart",
    url:
      "https://www.amazon.com/gp/product/0385474547/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0385474547&linkId=332e759e6e6f5216dd09e00326d7cbef",
    audible_url:
      "https://soundcloud.com/cheveyo-mills/sets/things-fall-apart-by-chinua-achebe-audiobook",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0385474547/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0385474547&linkCode=as2&tag=flowoflearnin-20&linkId=3c892875d7c46b99c2f1e6308fc623f9"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0385474547&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0385474547" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Chinua Achebe"],
    author_url: ["https://en.wikipedia.org/wiki/Chinua_Achebe"],
    /*estimated_reading_time: ,*/
    national_origin: "Nigeria",
    year_completion: 1958,
    book_lists: [1, 2, 3, 4],
    page_name: "things-fall-apart",
  },
  {
    id: 88,
    name: "To Kill a Mockingbird",
    url:
      "https://www.amazon.com/gp/product/0060935464/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0060935464&linkId=39cf0003c78a13acd24550ba517ca5a5",
    audible_url:
      "https://www.amazon.com/gp/product/B00K1HPPXO/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00K1HPPXO&linkId=a7ace77e3379ff1f94016a9b6e86dc24",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0060935464/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0060935464&linkCode=as2&tag=flowoflearnin-20&linkId=77244e61d800ee6ff1874414fb1d0bb6"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0060935464&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0060935464" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Harper Lee"],
    author_url: ["https://en.wikipedia.org/wiki/Harper_Lee"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1960,
    book_lists: [1, 4, 5, 7],
    page_name: "to-kill-a-mockingbird",
  },
  {
    id: 89,
    name: "Treasure Island",
    url:
      "https://www.amazon.com/gp/product/1514650460/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1514650460&linkId=45bcd88143c8c1305a672ce8f5f4b9c0",
    audible_url:
      "https://www.amazon.com/gp/product/B071WQPBKP/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B071WQPBKP&linkId=2ccc75922e48406c4af6b05010561933",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1514650460/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1514650460&linkCode=as2&tag=flowoflearnin-20&linkId=253eceffc86c664099d3dcc502604a49"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1514650460&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1514650460" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Robert Louis Stevenson"],
    author_url: ["https://en.wikipedia.org/wiki/Robert_Louis_Stevenson"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1882,
    book_lists: [6, 7],
    page_name: "treasure-island",
  },
  {
    id: 90,
    name: "Ulysses",
    url:
      "https://www.amazon.com/gp/product/1840226358/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1840226358&linkId=caadef57a1339ca1cdb46c129245fd2c",
    audible_url:
      "https://www.amazon.com/gp/product/B074KNQSLR/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B074KNQSLR&linkId=6a46c17cf111dc053209a6b82c94bd08",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1840226358/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1840226358&linkCode=as2&tag=flowoflearnin-20&linkId=28c769c58f7ebdaf07314370326b28ea"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1840226358&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1840226358" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["James Joyce"],
    author_url: ["https://en.wikipedia.org/wiki/James_Joyce"],
    /*estimated_reading_time: ,*/
    national_origin: "Ireland",
    year_completion: 1922,
    book_lists: [3, 7],
    page_name: "ulysses",
  },
  {
    id: 91,
    name: "Uncle Tom's Cabin",
    url:
      "https://www.amazon.com/gp/product/0451530802/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0451530802&linkId=8ca869238f880483c02885fb898c2525",
    audible_url:
      "https://www.amazon.com/gp/product/B00C6O8NSE/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B00C6O8NSE&linkId=30ec3e2437a31580ddd3c178c99b2dae",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0451530802/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0451530802&linkCode=as2&tag=flowoflearnin-20&linkId=f2a713316c1bcebd5959377c4d82ba68"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0451530802&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0451530802" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Harriet Beecher Stowe"],
    author_url: ["https://en.wikipedia.org/wiki/Harriet_Beecher_Stowe"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1852,
    book_lists: [2, 6],
    page_name: "uncle-toms-cabin",
  },
  {
    id: 92,
    name: "War and Peace",
    url:
      "https://www.amazon.com/gp/product/1853260622/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1853260622&linkId=b7a4e22169a060de6a79945ccfcf047a",
    audible_url:
      "https://www.amazon.com/gp/product/B07LFJNKY3/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B07LFJNKY3&linkId=fc627fab939c62915982312a1c22aa81",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1853260622/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1853260622&linkCode=as2&tag=flowoflearnin-20&linkId=d729eccf25f46ea42fc066806a73f225"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1853260622&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1853260622" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Leo Tolstoy"],
    author_url: ["https://en.wikipedia.org/wiki/Leo_Tolstoy"],
    /*estimated_reading_time: ,*/
    national_origin: "Russia",
    year_completion: 1869,
    book_lists: [2, 3, 4, 5, 6],
    page_name: "war-and-peace",
  },
  {
    id: 93,
    name: "The Wealth of Nations",
    url:
      "https://www.amazon.com/gp/product/1505577128/ref=as_li_tl?ie=UTF8&tag=flowoflearnin-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1505577128&linkId=73c97f710ecfbe4c80f589ada782e7e3",
    audible_url:
      "https://www.amazon.com/gp/product/B004INR39G/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B004INR39G&linkId=e826e6e955a7030f2ef19ee2f537b66c",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1505577128/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1505577128&linkCode=as2&tag=flowoflearnin-20&linkId=30c77b709b0d3f7ac9af11f19c0e5720"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1505577128&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1505577128" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Adam Smith"],
    author_url: ["https://en.wikipedia.org/wiki/Adam_Smith"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1776,
    book_lists: [2, 6, 7],
    page_name: "wealth-of-nations",
  },
  {
    id: 94,
    name: "The Wind in the Willows",
    url:
      "https://www.amazon.com/gp/product/1949460479/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1949460479&linkId=145abce8701d4af2c12f3b9f347d89a2",
    audible_url:
      "https://www.amazon.com/gp/product/B000VB49UK/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B000VB49UK&linkId=f8d7f642567152b8a9f97896fe2ef91d",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1949460479/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1949460479&linkCode=as2&tag=flowoflearnin-20&linkId=be80744d82932c19ab9366396433a383"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1949460479&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1949460479" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Kenneth Grahame"],
    author_url: ["https://en.wikipedia.org/wiki/Kenneth_Grahame"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1908,
    book_lists: [4, 6],
    page_name: "wind-in-the-willows",
  },
  {
    id: 95,
    name: "Wuthering Heights",
    url:
      "https://www.amazon.com/gp/product/0141439556/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0141439556&linkId=9acf38024794c26796606cabe069902f",
    audible_url:
      "https://www.amazon.com/gp/product/B076PP94DP/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B076PP94DP&linkId=2e7c83c8dacd80d29b7b477f50e95e14",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0141439556/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0141439556&linkCode=as2&tag=flowoflearnin-20&linkId=8c245adc9fe0c5eef48ca5230f84eb91"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0141439556&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0141439556" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Emily Brontë"],
    author_url: ["https://en.wikipedia.org/wiki/Emily_Bront%C3%AB"],
    /*estimated_reading_time: ,*/
    national_origin: "United Kingdom",
    year_completion: 1847,
    book_lists: [3, 5, 6],
    page_name: "wuthering-heights",
  },
  {
    id: 96,
    name: "Zen and the Art of Motorcycle Maintenance",
    url:
      "https://www.amazon.com/gp/product/0060839872/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=0060839872&linkId=48e57ee3b09105662b018fac99085106",
    audible_url:
      "https://www.amazon.com/gp/product/B0000544SE/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B0000544SE&linkId=fdb468475bbc7e8e63306c67e37d6795",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/0060839872/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0060839872&linkCode=as2&tag=flowoflearnin-20&linkId=9432e9a7a151abcecac8b63ec7ec297d"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0060839872&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=0060839872" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Robert Pirsig"],
    author_url: ["https://en.wikipedia.org/wiki/Robert_M._Pirsig"],
    /*estimated_reading_time: ,*/
    national_origin: "United States",
    year_completion: 1974,
    book_lists: [5, 7],
    page_name: "zen-and-the-art-of-motorcycle-maintenance",
  },
  {
    id: 97,
    name: "Zorba the Greek",
    url:
      "https://www.amazon.com/gp/product/1476782814/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=1476782814&linkId=9cfbb620294448dec81046c1cefb913d",
    audible_url:
      "https://www.amazon.com/gp/product/B005ES5WV0/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=flowoflearnin-20&creative=9325&linkCode=as2&creativeASIN=B005ES5WV0&linkId=8a7aab0cf4f185448220cd9820886c12",
    book_image: `<a target="_blank"  href="https://www.amazon.com/gp/product/1476782814/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1476782814&linkCode=as2&tag=flowoflearnin-20&linkId=9cc3061b160e5236aef27216b2605b0a"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1476782814&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=flowoflearnin-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=flowoflearnin-20&l=am2&o=1&a=1476782814" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
    author: ["Nikos Kazantzakis"],
    author_url: ["https://en.wikipedia.org/wiki/Nikos_Kazantzakis"],
    /*estimated_reading_time: ,*/
    national_origin: "Greece",
    year_completion: 1946,
    book_lists: [3, 5],
    page_name: "zorba-the-greek",
  },
];

module.exports = {
  books: _books,
  _book_lists: _book_lists,
  getBookById: (id) => _books.filter((book) => book.id === id * 1)[0],
  getBook: (page_name) =>
    _books.filter((book) => book.page_name === page_name)[0],
  getBookByNoList: () =>
    _books.reduce(function (r, a) {
      let sum = a.book_lists.reduce((sum, next) => sum + next, 0);
      // console.log("sum", sum);
      r[a.book_lists.length] = r[a.book_lists.length] || [];
      r[a.book_lists.length].push(a);
      return r;
    }, Object.create(null)),
  getBookSortByName: () =>
    _books.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }),
};
