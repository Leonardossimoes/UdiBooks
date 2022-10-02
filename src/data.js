import bannerHome01 from "../src/images/banner-home01.png";
import bannerHome02 from "../src/images/banner-home02.png";
import bannerHome03 from "../src/images/banner-home03.png";
import shortBanner02 from "../src/images/short-banner02.png";

export const sliderItems = [
    {
      id: 1,
      img: bannerHome01,
    },
    {
      id: 2,
      img: bannerHome02,

    },
    {
      id: 3,
      img: bannerHome03,
    }
  ];

  export const shortBanners = [
    {
      id: 1,
      img: "https://livrariacultura.vteximg.com.br/arquivos/bhero-conhecimento-0722.png?v=637927058400470000",
    },
    {
      id: 2,
      img: shortBanner02,
    }
  ]

  export const categories = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "SHIRT STYLE!",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "LOUNGEWEAR LOVE",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "LIGHT JACKETS",
    },
  ];

  export const popularProductsHeader = [
    {
      title: "Ofertas exclusivas UdiBooks",
      subTitle: "Uma seleção de ofertas especiais para você",

    },
  ]

  export const popularProducts = [
    {
      id:1,
      link: "https://www.amazon.com.br/sangue-cinzas-Vol-1/dp/655981002X/ref=sr_1_10?keywords=livros&qid=1657735984&sr=8-10",
      img:"https://images-na.ssl-images-amazon.com/images/I/81TjnGG0g7L.jpg",
      title: "De sangue e cinzas",
      price: 19.99,
      break: 2,
      rating: 4,
      discount: 15,
      endpoint: "popularproducts/1"
    },
    {
      id:2,
      link: "https://www.amazon.com.br/Vermelho-branco-sangue-Casey-McQuiston-ebook/dp/B07XTQ5T5C/ref=sr_1_6?keywords=livros&qid=1657735984&sr=8-6",
      img:"https://m.media-amazon.com/images/I/411iLYOnR1L.jpg",
      title: "Vermelho, branco e sangue azul",
      price: 49.99,
      break: 3,
      rating: 5,
      discount: 10,
      endpoint: "popularProducts/2"
    },
    {
      id:3,
      link: "https://www.amazon.com.br/umdiasemreclamar-Descubra-gratid%C3%A3o-pode-mudar/dp/6587885047/ref=sr_1_13?keywords=livros&qid=1657735984&sr=8-13",
      img:"https://images-na.ssl-images-amazon.com/images/I/41+LUvzc6WL._SX331_BO1,204,203,200_.jpg",
      title: "Um dia sem reclamar",
      price: 19.99,
      break: 2,
      rating: 4,
      discount: 15,
      endpoint: "popularProducts/3"
    },
    {
      id:4,
      link: "https://www.amazon.com.br/Assim-que-Acaba-Colleen-Hoover/dp/8501112518/ref=sr_1_1?qid=1657736568&refinements=p_36%3A8620050011&rnid=8620044011&s=books&sr=1-1",
      img:"https://images-na.ssl-images-amazon.com/images/I/51i7kH+rh9L._SX322_BO1,204,203,200_.jpg",
      title: "É assim que acaba",
      price: 29.99,
      break: 3,
      rating: 5,
      discount: 22,
      endpoint: "popularProducts/4"
    },
    {
      id:5,
      link: "https://www.amazon.com.br/coisa-Stephen-King/dp/8560280944/ref=sr_1_27?qid=1657736594&refinements=p_36%3A8620050011&rnid=8620044011&s=books&sr=1-27",
      img:"https://images-na.ssl-images-amazon.com/images/I/51z0s3GcvwL._SX346_BO1,204,203,200_.jpg",
      title: "It! A coisa",
      price: 89.99,
      break: 4,
      rating: 5,
      discount: 0,
      endpoint: "popularProducts/5"
    },
    {
      id:6,
      link: "https://www.amazon.com.br/Mulheres-que-Correm-com-Lobos/dp/853252978X/ref=sr_1_14?keywords=livros&qid=1657735984&sr=8-14",
      img:"https://images-na.ssl-images-amazon.com/images/I/41ogXvQ5WYL._SX341_BO1,204,203,200_.jpg",
      title: "Mulheres que correm com lobos",
      price: 29.99,
      break: 3,
      rating: 5,
      discount: 15,
      endpoint: "popularProducts/6"
    },
    {
      id:7,
      link: "https://www.amazon.com.br/Harry-Potter-C%C3%A2mara-Secreta-Rowling/dp/8532530796/ref=sr_1_15?qid=1657736568&refinements=p_36%3A8620050011&rnid=8620044011&s=books&sr=1-15",
      img:"https://images-na.ssl-images-amazon.com/images/I/51SnGLrrJcL._SX346_BO1,204,203,200_.jpg",
      title: "Harry Potter e a câmara secreta",
      price: 74.99,
      break: 4,
      rating: 5,
      discount: 15,
      endpoint: "popularProducts/7"
    },
    {
      id:8,
      link: "https://www.amazon.com.br/dan%C3%A7a-morte-Stephen-King/dp/8581050549/ref=sr_1_25?qid=1657736594&refinements=p_36%3A8620050011&rnid=8620044011&s=books&sr=1-25&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
      img:"https://images-na.ssl-images-amazon.com/images/I/51Wpx+aPtZS._SX346_BO1,204,203,200_.jpg",
      title: "A dança da morte",
      price: 69.99,
      break: 4,
      rating: 4,
      discount: 10,
      endpoint: "popularProducts/8"
    },
  ]

  export const maxDiscountsHeader = [
    {
      title: "Ofertas relâmpago",
      subTitle: "Descontos imperdíveis no seu novo livro",

    },
  ]

  export const maxDiscounts = [
    {
      id:1,
      link: "https://www.amazon.com.br/dp/8575420275/ref=s9_acsd_al_bw_c2_x_2_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-9&pf_rd_r=AQ2NVA44WJAGNNTQ4H0J&pf_rd_t=101&pf_rd_p=75524f06-a1d0-4774-a931-3688ffdaff15&pf_rd_i=6740748011",
      img:"https://images-na.ssl-images-amazon.com/images/I/41EG12xiuZL._SX331_BO1,204,203,200_.jpg",
      title: "O poder do agora: um guia para a iluminação espiritual",
      price: 29.99,
      break: 2,
      rating: 3,
      discount: 40,
      endpoint: "maxDiscounts/1"
    },
    {
      id:2,
      link: "https://www.amazon.com.br/dp/8542803175/ref=s9_acsd_al_bw_c2_x_4_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-9&pf_rd_r=AQ2NVA44WJAGNNTQ4H0J&pf_rd_t=101&pf_rd_p=75524f06-a1d0-4774-a931-3688ffdaff15&pf_rd_i=6740748011",
      img:"https://images-na.ssl-images-amazon.com/images/I/41Q2ZEa2-RL._SX331_BO1,204,203,200_.jpg",
      title: "A realidade de Madhu",
      price: 29.99,
      break: 2,
      rating: 4,
      discount: 35,
      endpoint: "maxDiscounts/2"
    },
    {
      id:3,
      link: "https://www.amazon.com.br/dp/8535928197/ref=s9_acsd_al_bw_c2_x_9_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-9&pf_rd_r=AQ2NVA44WJAGNNTQ4H0J&pf_rd_t=101&pf_rd_p=75524f06-a1d0-4774-a931-3688ffdaff15&pf_rd_i=6740748011",
      img:"https://images-na.ssl-images-amazon.com/images/I/41bUl4cVKsL._SX346_BO1,204,203,200_.jpg",
      title: "Homo Deus",
      price: 39.99,
      break: 3,
      rating: 5,
      discount: 42,
      endpoint: "maxDiscounts/3"
    },
    {
      id:4,
      link: "https://www.amazon.com.br/dp/8544106595/ref=s9_acsd_al_bw_c2_x_11_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-9&pf_rd_r=AQ2NVA44WJAGNNTQ4H0J&pf_rd_t=101&pf_rd_p=75524f06-a1d0-4774-a931-3688ffdaff15&pf_rd_i=6740748011",
      img:"https://images-na.ssl-images-amazon.com/images/I/510CMxWIujL._SX352_BO1,204,203,200_.jpg",
      title: "A princesa salva a si mesmo nesse livro",
      price: 19.99,
      break: 2,
      rating: 4,
      discount: 45,
      endpoint: "maxDiscounts/4"
    },
  ]

  export const creditCardSection = [
    {
      mainImage: "https://cdn-icons-png.flaticon.com/128/147/147258.png",
      background: "https://wallpaperaccess.com/full/894727.jpg",

    },
  ]

  export const paymentOptions = [
    {
      option: "VISA",
      image: "https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png"
    },
    {
      option: "MasterCard",
      image: "https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png"
    },
    {
      option: "elo",
      image: "https://logodownload.org/wp-content/uploads/2017/04/elo-logo-11.png"
    },
    {
      option: "alelo",
      image: "https://logodownload.org/wp-content/uploads/2017/09/alelo-logo.png"
    },
    {
      option: "DinersClub",
      image: "https://logodownload.org/wp-content/uploads/2016/10/Diners-Club-Logo.png"
    },
    {
      option: "HyperCard",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Hipercard_logo.svg/2000px-Hipercard_logo.svg.png"
    },
  ]
  
  export const categorieDropdown = [
    {
      id: 1,
      title: "Direito",
      svg: "https://cdn-icons-png.flaticon.com/512/924/924954.png",
      endpoint: "http://localhost:3000/law"
    },
    {
      id: 2,
      title: "Administração",
      svg: "https://cdn-icons-png.flaticon.com/512/784/784712.png",
      endpoint: "http://localhost:3000/adm"
    },
    {
      id: 3,
      title: "Auto ajuda",
      svg: "https://cdn-icons-png.flaticon.com/512/3728/3728607.png",
      endpoint: "http://localhost:3000/help"
    },
    {
      id: 4,
      title: "Quadrinhos",
      svg: "https://cdn-icons-png.flaticon.com/512/626/626508.png",
      endpoint: "http://localhost:3000/kids"
    },
    {
      id: 5,
      title: "Medicina",
      svg: "https://cdn-icons-png.flaticon.com/512/862/862032.png",
      endpoint: "http://localhost:3000/med"
    },
    {
      id: 6,
      title: "Romance",
      svg: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
      endpoint: "http://localhost:3000/romance"
    },
    {
      id: 7,
      title: "Biografias",
      svg: "https://cdn-icons-png.flaticon.com/512/1769/1769041.png",
      endpoint: "http://localhost:3000/bio"
    },
    {
      id: 8,
      title: "Esportes",
      svg: "https://cdn-icons-png.flaticon.com/512/857/857492.png",
      endpoint: "http://localhost:3000/esportes"
    },
    {
      id: 9,
      title: "Gastronômia",
      svg: "https://cdn-icons-png.flaticon.com/512/1980/1980708.png",
      endpoint: "http://localhost:3000/food"
    },

  ]

  export const publisher = [

    {
      id: "1",
      title: "Ali Hazelwood",
      endpoint: "http://localhost:3000/ali"
    },
    {
      id: "2",
      title: "Kel Costa",
      endpoint: "http://localhost:3000/kel"
    },
    {
      id: "3",
      title: "Emma Wildes",
      endpoint: "http://localhost:3000/emma"
    },
    {
      id: "4",
      title: "Larissa Chagas",
      endpoint: "http://localhost:3000/lari"
    },
    {
      id: "5",
      title: "T M Kechichian",
      endpoint: "http://localhost:3000/kech"
    }
  ]

  export const booksRomance = [
    {
      id:1,
      link: "https://www.amazon.com.br/dp/6555604603/ref=s9_acsd_hps_bw_c2_x_1_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-7&pf_rd_r=1VJYSRVE950FTK0WV87E&pf_rd_t=101&pf_rd_p=2c04238c-eb6a-4b16-90d0-0000a4c830b9&pf_rd_i=7882388011",
      img:"https://images-na.ssl-images-amazon.com/images/I/51bA-mipFHL.jpg",
      title: "Continência ao amor",
      price: 59.99,
      break: 2,
      rating: 4,
      discount: 20,
    },
    {
      id:2,
      link: "https://www.amazon.com.br/dp/655565399X/ref=s9_acsd_hps_bw_c2_x_2_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-7&pf_rd_r=1VJYSRVE950FTK0WV87E&pf_rd_t=101&pf_rd_p=2c04238c-eb6a-4b16-90d0-0000a4c830b9&pf_rd_i=7882388011",
      img:"https://images-na.ssl-images-amazon.com/images/I/81P9aC6AckL.jpg",
      title: "A razão do amor",
      price: 54.99,
      break: 2,
      rating: 5,
      discount: 15,
    },
    {
      id:3,
      link: "https://www.amazon.com.br/Todas-as-suas-im-perfei%C3%A7%C3%B5es/dp/8501117684?ref_=Oct_d_otopr_d_7882388011&pd_rd_w=2g7XT&content-id=amzn1.sym.ecc25cc1-ec38-4678-aabf-b9da0181edb4&pf_rd_p=ecc25cc1-ec38-4678-aabf-b9da0181edb4&pf_rd_r=1VJYSRVE950FTK0WV87E&pd_rd_wg=tQxa7&pd_rd_r=594faa14-700a-421c-9e75-1d7977a7b992&pd_rd_i=8501117684",
      img:"https://images-na.ssl-images-amazon.com/images/I/81Vhnel+xxL.jpg",
      title: "Todas as suas (im)perfeições",
      price: 29.99,
      break: 2,
      rating: 3,
      discount: 20,
    },
    {
      id:4,
      link: "https://www.amazon.com.br/Eu-esse-meu-cora%C3%A7%C3%A3o-Hunter/dp/8555391210?ref_=Oct_d_otopr_d_7882388011&pd_rd_w=2g7XT&content-id=amzn1.sym.ecc25cc1-ec38-4678-aabf-b9da0181edb4&pf_rd_p=ecc25cc1-ec38-4678-aabf-b9da0181edb4&pf_rd_r=1VJYSRVE950FTK0WV87E&pd_rd_wg=tQxa7&pd_rd_r=594faa14-700a-421c-9e75-1d7977a7b992&pd_rd_i=8555391210",
      img:"https://images-na.ssl-images-amazon.com/images/I/81w-GCfqtjL.jpg",
      title: "Eu e esse meu coração",
      price: 39.99,
      break: 2,
      rating: 4,
      discount: 20,
    },
    {
      id:5,
      link: "https://www.amazon.com.br/farsa-amor-Espanha-Sucesso-TikTok/dp/6555652977?ref_=Oct_d_otopr_d_7882388011&pd_rd_w=2g7XT&content-id=amzn1.sym.ecc25cc1-ec38-4678-aabf-b9da0181edb4&pf_rd_p=ecc25cc1-ec38-4678-aabf-b9da0181edb4&pf_rd_r=1VJYSRVE950FTK0WV87E&pd_rd_wg=tQxa7&pd_rd_r=594faa14-700a-421c-9e75-1d7977a7b992&pd_rd_i=6555652977",
      img:"https://images-na.ssl-images-amazon.com/images/I/71UAsqPgHHL.jpg",
      title: "Uma farsa de amor na Espanha",
      price: 49.99,
      break: 2,
      rating: 5,
      discount: 15,
    },
    {
      id:6,
      link: "https://www.amazon.com.br/morro-dos-ventos-uivantes/dp/8594318235?ref_=Oct_d_oup_d_7882388011&pd_rd_w=pE10r&content-id=amzn1.sym.0dd2d5ea-95b1-4298-a644-6328eaa0cb22&pf_rd_p=0dd2d5ea-95b1-4298-a644-6328eaa0cb22&pf_rd_r=1VJYSRVE950FTK0WV87E&pd_rd_wg=tQxa7&pd_rd_r=594faa14-700a-421c-9e75-1d7977a7b992&pd_rd_i=8594318235",
      img:"https://images-na.ssl-images-amazon.com/images/I/71lqmkoeosL.jpg",
      title: "O morro dos ventos uivantes",
      price: 14.99,
      break: 2,
      rating: 4,
      discount: 25,
    },
    {
      id:7,
      link: "https://www.amazon.com.br/Biblioteca-Meia-Noite-Matt-Haig/dp/6558380544?ref_=Oct_d_orecs_d_7882388011&pd_rd_w=hXhB0&content-id=amzn1.sym.0b88fdcf-5a93-418f-aa69-11a1a44f3d28&pf_rd_p=0b88fdcf-5a93-418f-aa69-11a1a44f3d28&pf_rd_r=1VJYSRVE950FTK0WV87E&pd_rd_wg=tQxa7&pd_rd_r=594faa14-700a-421c-9e75-1d7977a7b992&pd_rd_i=6558380544",
      img:"https://images-na.ssl-images-amazon.com/images/I/81iqH8dpjuL.jpg",
      title: "A Biblioteca da Meia-Noite",
      price: 34.99,
      break: 2,
      rating: 4,
      discount: 15,
    },
    {
      id:8,
      link: "https://www.amazon.com.br/Assim-que-Acaba-Colleen-Hoover/dp/8501112518?ref_=Oct_d_orecs_d_7882388011&pd_rd_w=hXhB0&content-id=amzn1.sym.0b88fdcf-5a93-418f-aa69-11a1a44f3d28&pf_rd_p=0b88fdcf-5a93-418f-aa69-11a1a44f3d28&pf_rd_r=1VJYSRVE950FTK0WV87E&pd_rd_wg=tQxa7&pd_rd_r=594faa14-700a-421c-9e75-1d7977a7b992&pd_rd_i=8501112518",
      img:"https://images-na.ssl-images-amazon.com/images/I/91r5G8RxqfL.jpg",
      title: "É Assim que Acaba",
      price: 39.99,
      break: 2,
      rating: 4,
      discount: 20,
    },
    {
      id:9,
      link: "https://www.amazon.com.br/lado-feio-do-amor/dp/8501105732?ref_=Oct_d_orecs_d_7882388011&pd_rd_w=hXhB0&content-id=amzn1.sym.0b88fdcf-5a93-418f-aa69-11a1a44f3d28&pf_rd_p=0b88fdcf-5a93-418f-aa69-11a1a44f3d28&pf_rd_r=1VJYSRVE950FTK0WV87E&pd_rd_wg=tQxa7&pd_rd_r=594faa14-700a-421c-9e75-1d7977a7b992&pd_rd_i=8501105732",
      img:"https://images-na.ssl-images-amazon.com/images/I/81FEytag46L.jpg",
      title: "O lado feio do amor",
      price: 39.99,
      break: 2,
      rating: 4,
      discount: 15,
    },
    {
      id:10,
      link: "https://www.amazon.com.br/Um-Lugar-Bem-Longe-Daqui/dp/8551004867?ref_=Oct_d_omwf_d_7882388011&pd_rd_w=JPBbS&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=1VJYSRVE950FTK0WV87E&pd_rd_wg=tQxa7&pd_rd_r=594faa14-700a-421c-9e75-1d7977a7b992&pd_rd_i=8551004867",
      img:"https://images-na.ssl-images-amazon.com/images/I/61LhAUifXYL.jpg",
      title: "Um Lugar Bem Longe Daqui",
      price: 39.99,
      break: 2,
      rating: 5,
      discount: 20,
    },
    {
      id:11,
      link: "https://www.amazon.com.br/dp/6589906440/ref=s9_acsd_hps_bw_c2_x_0_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-7&pf_rd_r=1VJYSRVE950FTK0WV87E&pf_rd_t=101&pf_rd_p=2c04238c-eb6a-4b16-90d0-0000a4c830b9&pf_rd_i=7882388011",
      img:"https://images-na.ssl-images-amazon.com/images/I/81laJRyQPhL.jpg",
      title: "Defy",
      price: 49.99,
      break: 2,
      rating: 3,
      discount: 10,
    },
    {
      id:12,
      link: "https://www.amazon.com.br/dp/6558470837/ref=s9_acsd_hps_bw_c2_x_3_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-7&pf_rd_r=1VJYSRVE950FTK0WV87E&pf_rd_t=101&pf_rd_p=2c04238c-eb6a-4b16-90d0-0000a4c830b9&pf_rd_i=7882388011",
      img:"https://images-na.ssl-images-amazon.com/images/I/81lu4h6wZ3L.jpg",
      title: "Ana Karenina",
      price: 104.99,
      break: 3,
      rating: 5,
      discount: 25,
    },
  ]

  export const booksEsportes = [
    {
      id:1,
      link: "https://www.amazon.com.br/Cora%C3%A7%C3%A3o-Martinho-Martins-Castanheira-Ferreira/dp/6599096387?ref_=Oct_d_omg_d_7842741011&pd_rd_w=ECrAc&content-id=amzn1.sym.324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_p=324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_r=J2WXKBDQ1R577WSRBJ9S&pd_rd_wg=nRkFi&pd_rd_r=49a568f1-325e-4e7f-b6ae-debd313cec73&pd_rd_i=6599096387",
      img:"https://images-na.ssl-images-amazon.com/images/I/81BZ7-zIeCL.jpg",
      title: "Cabeça Fria, Coração Quente",
      price: 59.99,
      break: 2,
      rating: 5,
      discount: 20,
      endpoint: "sports/1"
    },
    {
      id:2,
      link: "https://www.amazon.com.br/Busca-Mesmos-Cl%C3%B3vis-Barros-Filho/dp/8568014453?ref_=Oct_d_omg_d_7842741011&pd_rd_w=ECrAc&content-id=amzn1.sym.324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_p=324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_r=J2WXKBDQ1R577WSRBJ9S&pd_rd_wg=nRkFi&pd_rd_r=49a568f1-325e-4e7f-b6ae-debd313cec73&pd_rd_i=8568014453",
      img:"https://images-na.ssl-images-amazon.com/images/I/713PXbCOrbL.jpg",
      title: "Em busca de nós mesmos",
      price: 24.99,
      break: 2,
      rating: 4,
      discount: 25,
      endpoint: "sports/2"
    },
    {
      id:3,
      link: "https://www.amazon.com.br/Vencemos-juntos-Rodolfo-Rodrigues/dp/8555462770?ref_=Oct_d_omg_d_7842741011&pd_rd_w=ECrAc&content-id=amzn1.sym.324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_p=324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_r=J2WXKBDQ1R577WSRBJ9S&pd_rd_wg=nRkFi&pd_rd_r=49a568f1-325e-4e7f-b6ae-debd313cec73&pd_rd_i=8555462770",
      img:"https://images-na.ssl-images-amazon.com/images/I/81znyS5itkL.jpg",
      title: "Vencemos juntos",
      price: 69.99,
      break: 3,
      rating: 5,
      discount: 30,
      endpoint: "sports/3"
    },
    {
      id:4,
      link: "https://www.amazon.com.br/dp/6555644664/ref=s9_acsd_hps_bw_c2_x_1_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-7&pf_rd_r=J2WXKBDQ1R577WSRBJ9S&pf_rd_t=101&pf_rd_p=76c28de9-91af-4e33-a280-e3b54b2ae855&pf_rd_i=7842741011",
      img:"https://images-na.ssl-images-amazon.com/images/I/81+Ru7qA3IL.jpg",
      title: "Você aguenta ser feliz?: Como cuidar da saúde mental e física para ter qualidade de vida",
      price: 49.99,
      break: 2,
      rating: 4,
      discount: 25,
      endpoint: "sports/4"
    },
    {
      id:5,
      link: "https://www.amazon.com.br/dp/8550815543/ref=s9_acsd_hps_bw_c2_x_0_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-7&pf_rd_r=J2WXKBDQ1R577WSRBJ9S&pf_rd_t=101&pf_rd_p=76c28de9-91af-4e33-a280-e3b54b2ae855&pf_rd_i=7842741011",
      img:"https://images-na.ssl-images-amazon.com/images/I/61MawGktk8L.jpg",
      title: "Agente de mudança: Transforme sua paixão",
      price: 99.99,
      break: 4,
      rating: 5,
      discount: 10,
      endpoint: "sports/5"
    },
    {
      id:6,
      link: "https://www.amazon.com.br/dp/0063018950/ref=s9_acsd_hps_bw_c2_x_2_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-9&pf_rd_r=J2WXKBDQ1R577WSRBJ9S&pf_rd_t=101&pf_rd_p=615a6684-02c9-4f2a-9c62-3410ca253a89&pf_rd_i=7842741011",
      img:"https://images-na.ssl-images-amazon.com/images/I/71aqdXi32xL.jpg",
      title: "Breathe: A Life in Flow",
      price: 89.99,
      break: 3,
      rating: 5,
      discount: 25,
      endpoint: "sports/6"
    },
    {
      id:7,
      link: "https://www.amazon.com.br/dp/1401310923/ref=s9_acsd_hps_bw_c2_x_4_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-9&pf_rd_r=J2WXKBDQ1R577WSRBJ9S&pf_rd_t=101&pf_rd_p=615a6684-02c9-4f2a-9c62-3410ca253a89&pf_rd_i=7842741011",
      img:"https://images-na.ssl-images-amazon.com/images/I/61Ti6-dtOrS.jpg",
      title: "Rafa",
      price: 99.99,
      break: 4,
      rating: 5,
      discount: 20,
      endpoint: "sports/7"
    },
    {
      id:8,
      link: "https://www.amazon.com.br/dp/0593233751/ref=s9_acsd_hps_bw_c2_x_3_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-9&pf_rd_r=J2WXKBDQ1R577WSRBJ9S&pf_rd_t=101&pf_rd_p=615a6684-02c9-4f2a-9c62-3410ca253a89&pf_rd_i=7842741011",
      img:"https://images-na.ssl-images-amazon.com/images/I/81ijSmsaYSL.jpg",
      title: "Hwpo: Hard Work Pays Off",
      price: 109.99,
      break: 4,
      rating: 4,
      discount: 15,
      endpoint: "sports/8"
    },
    {
      id:9,
      link: "https://www.amazon.com.br/Interior-T%C3%AAnis-Cl%C3%A1ssico-Excel%C3%AAncia-Desempenho/dp/8569371012?ref_=Oct_d_omwf_d_7842741011&pd_rd_w=QYj5s&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=J2WXKBDQ1R577WSRBJ9S&pd_rd_wg=nRkFi&pd_rd_r=49a568f1-325e-4e7f-b6ae-debd313cec73&pd_rd_i=8569371012",
      img:"https://images-na.ssl-images-amazon.com/images/I/51P4Tn2Og+L.jpg",
      title: "O Jogo Interior do Tênis",
      price: 49.99,
      break: 2,
      rating: 4,
      discount: 15,
      endpoint: "sports/9"
    },
    {
      id:10,
      link: "https://www.amazon.com.br/Hist%C3%B3ria-Futebol-Para-Quem-Pressa/dp/8558890889?ref_=Oct_d_oup_d_7842741011&pd_rd_w=dXU4F&content-id=amzn1.sym.0dd2d5ea-95b1-4298-a644-6328eaa0cb22&pf_rd_p=0dd2d5ea-95b1-4298-a644-6328eaa0cb22&pf_rd_r=J2WXKBDQ1R577WSRBJ9S&pd_rd_wg=nRkFi&pd_rd_r=49a568f1-325e-4e7f-b6ae-debd313cec73&pd_rd_i=8558890889",
      img:"https://m.media-amazon.com/images/P/B07SH27G7N.01._SCLZZZZZZZ_SX500_.jpg",
      title: "A História do Futebol para quem tem pressa",
      price: 29.99,
      break: 2,
      rating: 4,
      discount: 20,
      endpoint: "sports/10"
    },
    {
      id:11,
      link: "https://www.amazon.com.br/Prescri%C3%A7%C3%A3o-periodiza%C3%A7%C3%A3o-treinamento-for%C3%A7a-academias/dp/8520445748?ref_=Oct_d_otopr_d_7842741011&pd_rd_w=AIGbQ&content-id=amzn1.sym.ecc25cc1-ec38-4678-aabf-b9da0181edb4&pf_rd_p=ecc25cc1-ec38-4678-aabf-b9da0181edb4&pf_rd_r=J2WXKBDQ1R577WSRBJ9S&pd_rd_wg=nRkFi&pd_rd_r=49a568f1-325e-4e7f-b6ae-debd313cec73&pd_rd_i=8520445748",
      img:"https://images-na.ssl-images-amazon.com/images/I/71xjGQAkWmL.jpg",
      title: "Prescrição e periodização do treinamento de força em academias",
      price: 59.99,
      break: 2,
      rating: 5,
      discount: 10,
      endpoint: "sports/11"
    },
    {
      id:12,
      link: "https://www.amazon.com.br/Um-Olho-Bola-Outro-Cartola/dp/8542210972?ref_=Oct_d_omwf_d_7842811011&pd_rd_w=2HNLE&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=461VD03JR9TXJ01KP627&pd_rd_wg=DVhi4&pd_rd_r=921cbb88-2b72-4b5f-8d68-440b1c3c9f0d&pd_rd_i=8542210972",
      img:"https://images-na.ssl-images-amazon.com/images/I/91u2h6eCn2L.jpg",
      title: "Um olho na bola, outro na cartola",
      price: 29.99,
      break: 2,
      rating: 4,
      discount: 25,
      endpoint: "sports/12"
    },
  ]

  export const booksAdm = [
    {
      id:1,
      link: "https://www.amazon.com.br/Mindset-Carol-S-Dweck/dp/8547000240?ref_=Oct_d_omwf_d_7872854011&pd_rd_w=qH2mO&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=SZ5M8FE4YSSW1N33T6M4&pd_rd_wg=tecFi&pd_rd_r=b07a73e9-23a1-42e3-ac77-a403fe9d9237&pd_rd_i=8547000240",
      img:"https://images-na.ssl-images-amazon.com/images/I/71Ils+Co9fL.jpg",
      title: "Mindset: A nova psicologia do sucesso",
      price: 39.99,
      break: 2,
      rating: 4,
      discount: 20,
      endpoint: "adm/1"

    },
    {
      id:2,
      link: "https://www.amazon.com.br/poder-do-h%C3%A1bito-Charles-Duhigg/dp/8539004119?ref_=Oct_d_omwf_d_7872854011&pd_rd_w=qH2mO&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=SZ5M8FE4YSSW1N33T6M4&pd_rd_wg=tecFi&pd_rd_r=b07a73e9-23a1-42e3-ac77-a403fe9d9237&pd_rd_i=8539004119",
      img:"https://images-na.ssl-images-amazon.com/images/I/81XTXQEVPlL.jpg",
      title: "O poder do hábito",
      price: 49.99,
      break: 2,
      rating: 5,
      discount: 15,
      endpoint: "adm/2"
    },
    {
      id:3,
      link: "https://www.amazon.com.br/R%C3%A1pido-devagar-Daniel-Kahneman/dp/853900383X?ref_=Oct_d_omwf_d_7872854011&pd_rd_w=qH2mO&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=SZ5M8FE4YSSW1N33T6M4&pd_rd_wg=tecFi&pd_rd_r=b07a73e9-23a1-42e3-ac77-a403fe9d9237&pd_rd_i=853900383X",
      img:"https://images-na.ssl-images-amazon.com/images/I/61pt9lG-PvL.jpg",
      title: "Rápido e devagar: Duas formas de pensar",
      price: 99.99,
      break: 3,
      rating: 4,
      discount: 20,
      endpoint: "adm/3"
    },
    {
      id:4,
      link: "https://www.amazon.com.br/Mil-Milh%C3%A3o-Sem-Cortar-Cafezinho/dp/8595083274?ref_=Oct_d_omg_d_7872854011&pd_rd_w=gwPxB&content-id=amzn1.sym.324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_p=324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_r=SZ5M8FE4YSSW1N33T6M4&pd_rd_wg=tecFi&pd_rd_r=b07a73e9-23a1-42e3-ac77-a403fe9d9237&pd_rd_i=8595083274",
      img:"https://m.media-amazon.com/images/P/B07HQWPVRS.01._SCLZZZZZZZ_SX500_.jpg",
      title: "Do Mil ao Milhão. Sem Cortar o Cafezinho",
      price: 49.99,
      break: 2,
      rating: 5,
      discount: 20,
      endpoint: "adm/4"
    },
    {
      id:5,
      link: "https://www.amazon.com.br/dp/8550815543/ref=s9_acsd_hps_bw_c2_x_0_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-7&pf_rd_r=J2WXKBDQ1R577WSRBJ9S&pf_rd_t=101&pf_rd_p=76c28de9-91af-4e33-a280-e3b54b2ae855&pf_rd_i=7842741011",
      img:"https://images-na.ssl-images-amazon.com/images/I/61MawGktk8L.jpg",
      title: "Agente de mudança: Transforme sua paixão",
      price: 99.99,
      break: 4,
      rating: 5,
      discount: 10,
      endpoint: "adm/5"
    },
    {
      id:6,
      link: "https://www.amazon.com.br/Mais-esperto-que-Diabo-liberdade/dp/8568014003?ref_=Oct_d_omg_d_7872854011&pd_rd_w=gwPxB&content-id=amzn1.sym.324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_p=324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_r=SZ5M8FE4YSSW1N33T6M4&pd_rd_wg=tecFi&pd_rd_r=b07a73e9-23a1-42e3-ac77-a403fe9d9237&pd_rd_i=8568014003",
      img:"https://images-na.ssl-images-amazon.com/images/I/71c4clNHGYL.jpg",
      title: "Mais esperto que o Diabo: O mistério revelado da liberdade e do sucesso",
      price: 19.99,
      break: 2,
      rating: 4,
      discount: 25,
      endpoint: "adm/6"
    },
    {
      id:7,
      link: "https://www.amazon.com.br/dp/1401310923/ref=s9_acsd_hps_bw_c2_x_4_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-9&pf_rd_r=J2WXKBDQ1R577WSRBJ9S&pf_rd_t=101&pf_rd_p=615a6684-02c9-4f2a-9c62-3410ca253a89&pf_rd_i=7842741011",
      img:"https://images-na.ssl-images-amazon.com/images/I/61Ti6-dtOrS.jpg",
      title: "Rafa",
      price: 99.99,
      break: 4,
      rating: 5,
      discount: 20,
      endpoint: "adm/7"
    },
    {
      id:8,
      link: "https://www.amazon.com.br/Economia-coisa-s%C3%A9ria-mercados-2000-2018/dp/858285126X?ref_=Oct_d_old_d_7872854011_1&pd_rd_w=NQYmq&content-id=amzn1.sym.1d5518b3-4cf3-464f-944d-e54d027616e2&pf_rd_p=1d5518b3-4cf3-464f-944d-e54d027616e2&pf_rd_r=SZ5M8FE4YSSW1N33T6M4&pd_rd_wg=tecFi&pd_rd_r=b07a73e9-23a1-42e3-ac77-a403fe9d9237",
      img:"https://images-na.ssl-images-amazon.com/images/I/71OHDc4uVNL.jpg",
      title: "Economia é coisa séria: Brasil, mercados, política",
      price: 29.99,
      break: 2,
      rating: 4,
      discount: 20,
      endpoint: "adm/8"
    },
    {
      id:9,
      link: "https://www.amazon.com.br/Lideran%C3%A7a-guerra-Grandes-li%C3%A7%C3%B5es-hist%C3%B3ria/dp/8582851472?ref_=Oct_d_old_d_7872854011_0&pd_rd_w=NQYmq&content-id=amzn1.sym.1d5518b3-4cf3-464f-944d-e54d027616e2&pf_rd_p=1d5518b3-4cf3-464f-944d-e54d027616e2&pf_rd_r=SZ5M8FE4YSSW1N33T6M4&pd_rd_wg=tecFi&pd_rd_r=b07a73e9-23a1-42e3-ac77-a403fe9d9237",
      img:"https://images-na.ssl-images-amazon.com/images/I/51HMsP4kpNL.jpg",
      title: "Liderança na guerra: Grandes lições de quem fez história",
      price: 39.99,
      break: 2,
      rating: 5,
      discount: 25,
      endpoint: "adm/9"
    },
    {
      id:10,
      link: "https://www.amazon.com.br/Ponto-inflex%C3%A3o-Fl%C3%A1vio-Augusto-Silva/dp/8593156835?ref_=Oct_d_oup_d_7872854011&pd_rd_w=5axQi&content-id=amzn1.sym.0dd2d5ea-95b1-4298-a644-6328eaa0cb22&pf_rd_p=0dd2d5ea-95b1-4298-a644-6328eaa0cb22&pf_rd_r=SZ5M8FE4YSSW1N33T6M4&pd_rd_wg=tecFi&pd_rd_r=b07a73e9-23a1-42e3-ac77-a403fe9d9237&pd_rd_i=8593156835",
      img:"https://images-na.ssl-images-amazon.com/images/I/41Odhs226UL.jpg",
      title: "Ponto de inflexão",
      price: 29.99,
      break: 2,
      rating: 5,
      discount: 10,
      endpoint: "adm/10"
    },
    {
      id:11,
      link: "https://www.amazon.com.br/Jeito-Harvard-Ser-Feliz/dp/8502180266?ref_=Oct_d_oup_d_7872854011&pd_rd_w=5axQi&content-id=amzn1.sym.0dd2d5ea-95b1-4298-a644-6328eaa0cb22&pf_rd_p=0dd2d5ea-95b1-4298-a644-6328eaa0cb22&pf_rd_r=SZ5M8FE4YSSW1N33T6M4&pd_rd_wg=tecFi&pd_rd_r=b07a73e9-23a1-42e3-ac77-a403fe9d9237&pd_rd_i=8502180266",
      img:"https://images-na.ssl-images-amazon.com/images/I/616BWqxn+QL.jpg",
      title: "O Jeito Harvard de Ser Feliz",
      price: 29.99,
      break: 2,
      rating: 5,
      discount: 15,
      endpoint: "adm/11"
    },
    {
      id:12,
      link: "https://www.amazon.com.br/Pai-rico-pai-pobre-anos/dp/8550801488?ref_=Oct_d_orecs_d_7872854011&pd_rd_w=kezX9&content-id=amzn1.sym.0b88fdcf-5a93-418f-aa69-11a1a44f3d28&pf_rd_p=0b88fdcf-5a93-418f-aa69-11a1a44f3d28&pf_rd_r=SZ5M8FE4YSSW1N33T6M4&pd_rd_wg=tecFi&pd_rd_r=b07a73e9-23a1-42e3-ac77-a403fe9d9237&pd_rd_i=8550801488",
      img:"https://images-na.ssl-images-amazon.com/images/I/81KY9mmrF-L.jpg",
      title: "Pai Rico, Pai Pobre",
      price: 49.99,
      break: 2,
      rating: 5,
      discount: 25,
      endpoint: "adm/12"
    },
  ]

  export const booksKids = [
    {
      id:1,
      link: "https://www.amazon.com.br/dp/8538076205/ref=s9_acsd_hps_bw_c2_x_2_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-9&pf_rd_r=7GMZE0G5GTFRWEJNBQXS&pf_rd_t=101&pf_rd_p=9a21f7ff-9184-4db5-9e99-63f17027fc16&pf_rd_i=7844001011",
      img:"https://images-na.ssl-images-amazon.com/images/I/7179RXiixuL.jpg",
      title: "Turma da Mônica - Vamos aprender o alfabeto",
      price: 19.99,
      break: 2,
      rating: 3,
      discount: 20,
      endpoint: "kids/1"
    },
    {
      id:2,
      link: "https://www.amazon.com.br/dp/8574067539/ref=s9_acsd_hps_bw_c2_x_1_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-9&pf_rd_r=7GMZE0G5GTFRWEJNBQXS&pf_rd_t=101&pf_rd_p=9a21f7ff-9184-4db5-9e99-63f17027fc16&pf_rd_i=7844001011",
      img:"https://images-na.ssl-images-amazon.com/images/I/81tPByJE0NL.jpg",
      title: "A árvore generosa",
      price: 29.99,
      break: 2,
      rating: 4,
      discount: 15,
      endpoint: "kids/2"
    },
    {
      id:3,
      link: "https://www.amazon.com.br/dp/8594720033/ref=s9_acsd_hps_bw_c2_x_2_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-11&pf_rd_r=7GMZE0G5GTFRWEJNBQXS&pf_rd_t=101&pf_rd_p=8ce1f081-6918-4a5d-8586-0a3c66f55315&pf_rd_i=7844001011",
      img:"https://images-na.ssl-images-amazon.com/images/I/71hXYqx+YSL.jpg",
      title: "365 DESENHOS PARA COLORIR DISNEY PIXAR",
      price: 29.99,
      break: 2,
      rating: 5,
      discount: 20,
      endpoint: "kids/3"
    },
    {
      id:4,
      link: "https://www.amazon.com.br/dp/6586181453/ref=s9_acsd_hps_bw_c2_x_3_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-15&pf_rd_r=7GMZE0G5GTFRWEJNBQXS&pf_rd_t=101&pf_rd_p=c24d6e33-48be-47ba-8853-88d977331ee4&pf_rd_i=7844001011",
      img:"https://images-na.ssl-images-amazon.com/images/I/71CX3iwPVrL.jpg",
      title: "101 Mulheres Incríveis que Transformaram a Ciência",
      price: 49.99,
      break: 2,
      rating: 4,
      discount: 20,
      endpoint: "kids/4"
    },
    {
      id:5,
      link: "https://www.amazon.com.br/dp/6599239242/ref=s9_acsd_hps_bw_c2_x_8_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-15&pf_rd_r=7GMZE0G5GTFRWEJNBQXS&pf_rd_t=101&pf_rd_p=c24d6e33-48be-47ba-8853-88d977331ee4&pf_rd_i=7844001011",
      img:"https://images-na.ssl-images-amazon.com/images/I/61dp+ZsA9aL.jpg",
      title: "Logo antes de nascer",
      price: 49.99,
      break: 2,
      rating: 5,
      discount: 15,
      endpoint: "kids/5"
    },
    {
      id:6,
      link: "https://www.amazon.com.br/dp/8566642414/ref=s9_acsd_hps_bw_c2_x_7_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-15&pf_rd_r=7GMZE0G5GTFRWEJNBQXS&pf_rd_t=101&pf_rd_p=c24d6e33-48be-47ba-8853-88d977331ee4&pf_rd_i=7844001011",
      img:"https://images-na.ssl-images-amazon.com/images/I/91s+izjUd9L.jpg",
      title: "Diário de Pilar na África",
      price: 59.99,
      break: 3,
      rating: 4,
      discount: 25,
      endpoint: "kids/6"
    },
    {
      id:7,
      link: "https://www.amazon.com.br/dp/8516092747/ref=s9_acsd_hps_bw_c2_x_11_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-15&pf_rd_r=7GMZE0G5GTFRWEJNBQXS&pf_rd_t=101&pf_rd_p=c24d6e33-48be-47ba-8853-88d977331ee4&pf_rd_i=7844001011",
      img:"https://images-na.ssl-images-amazon.com/images/I/81MiVp-34hL.jpg",
      title: "Os Problemas da Família Gorgonzola",
      price: 59.99,
      break: 3,
      rating: 5,
      discount: 20,
      endpoint: "kids/7"
    },
    {
      id:8,
      link: "https://www.amazon.com.br/dp/8538061208/ref=s9_acsd_hps_bw_c2_x_14_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-15&pf_rd_r=7GMZE0G5GTFRWEJNBQXS&pf_rd_t=101&pf_rd_p=c24d6e33-48be-47ba-8853-88d977331ee4&pf_rd_i=7844001011",
      img:"https://images-na.ssl-images-amazon.com/images/I/51oJlH0CoFL.jpg",
      title: "Viagem ao céu",
      price: 19.99,
      break: 2,
      rating: 5,
      discount: 20,
      endpoint: "kids/8"
    },
    {
      id:9,
      link: "https://www.amazon.com.br/dp/8516063046/ref=s9_acsd_hps_bw_c2_x_13_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-15&pf_rd_r=7GMZE0G5GTFRWEJNBQXS&pf_rd_t=101&pf_rd_p=c24d6e33-48be-47ba-8853-88d977331ee4&pf_rd_i=7844001011",
      img:"https://images-na.ssl-images-amazon.com/images/I/A1dwEo611vL.jpg",
      title: "O Amigo do Rei",
      price: 59.99,
      break: 3,
      rating: 5,
      discount: 25,
      endpoint: "kids/9"
    },
    {
      id:10,
      link: "https://www.amazon.com.br/dp/8539512440/ref=s9_acsd_hps_bw_c2_x_12_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-15&pf_rd_r=7GMZE0G5GTFRWEJNBQXS&pf_rd_t=101&pf_rd_p=c24d6e33-48be-47ba-8853-88d977331ee4&pf_rd_i=7844001011",
      img:"https://images-na.ssl-images-amazon.com/images/I/91sz2lACnAL.jpg",
      title: "A Casa na Árvore com 26 Andares",
      price: 59.99,
      break: 3,
      rating: 4,
      discount: 25,
      endpoint: "kids/10"
    },
    {
      id:11,
      link: "https://www.amazon.com.br/dp/8516062988/ref=s9_acsd_hps_bw_c2_x_17_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-15&pf_rd_r=7GMZE0G5GTFRWEJNBQXS&pf_rd_t=101&pf_rd_p=c24d6e33-48be-47ba-8853-88d977331ee4&pf_rd_i=7844001011",
      img:"https://images-na.ssl-images-amazon.com/images/I/51pOHyGeRoL.jpg",
      title: "Romeu e Julieta",
      price: 39.99,
      break: 2,
      rating: 4,
      discount: 20,
      endpoint: "kids/11"
    },
    {
      id:12,
      link: "https://www.amazon.com.br/dp/8562500712/ref=s9_acsd_hps_bw_c2_x_19_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-15&pf_rd_r=7GMZE0G5GTFRWEJNBQXS&pf_rd_t=101&pf_rd_p=c24d6e33-48be-47ba-8853-88d977331ee4&pf_rd_i=7844001011",
      img:"https://m.media-amazon.com/images/P/B00O3LBEHK.01._SCLZZZZZZZ_SX500_.jpg",
      title: "Vampiro: Uma tenebrosa noite de sustos, doces e travessuras",
      price: 19.99,
      break: 2,
      rating: 3,
      discount: 10,
      endpoint: "kids/12"      
    },
  ]
  export const booksBio = [
    {
      id:1,
      link: "https://www.amazon.com.br/marca-vit%C3%B3ria-Phil-Knight/dp/8543104467?ref_=Oct_d_otopr_d_7841731011&pd_rd_w=FTrQw&content-id=amzn1.sym.ecc25cc1-ec38-4678-aabf-b9da0181edb4&pf_rd_p=ecc25cc1-ec38-4678-aabf-b9da0181edb4&pf_rd_r=DR8W15Q1M8FS46XQ4928&pd_rd_wg=2kvlW&pd_rd_r=613f401d-bde9-4abf-968f-d20e71ea6497&pd_rd_i=8543104467",
      img:"https://images-na.ssl-images-amazon.com/images/I/51PDs0RT7vL.jpg",
      title: "A marca da vitória: A autobiografia do criador da Nike",
      price: 39.99,
      break: 2,
      rating: 5,
      discount: 20,
      endpoint: "bio/1"
    },
    {
      id:2,
      link: "https://www.amazon.com.br/Minha-Hist%C3%B3ria-Michelle-Obama/dp/854700064X?ref_=Oct_d_omg_d_7841731011&pd_rd_w=qQkBr&content-id=amzn1.sym.324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_p=324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_r=DR8W15Q1M8FS46XQ4928&pd_rd_wg=2kvlW&pd_rd_r=613f401d-bde9-4abf-968f-d20e71ea6497&pd_rd_i=854700064X",
      img:"https://images-na.ssl-images-amazon.com/images/I/81Ed9yMQWIL.jpg",
      title: "Minha História",
      price: 39.99,
      break: 2,
      rating: 5,
      discount: 20,
      endpoint: "bio/2"
    },
    {
      id:3,
      link: "https://www.amazon.com.br/Uma-terra-prometida-Barack-Obama/dp/8535933964?ref_=Oct_d_omg_d_7841731011&pd_rd_w=qQkBr&content-id=amzn1.sym.324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_p=324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_r=DR8W15Q1M8FS46XQ4928&pd_rd_wg=2kvlW&pd_rd_r=613f401d-bde9-4abf-968f-d20e71ea6497&pd_rd_i=8535933964",
      img:"https://images-na.ssl-images-amazon.com/images/I/71ZCGlZewLL.jpg",
      title: "Uma terra prometida",
      price: 39.99,
      break: 2,
      rating: 5,
      discount: 20,
      endpoint: "bio/3"
    },
    {
      id:4,
      link: "https://www.amazon.com.br/Arig%C3%B3-esp%C3%ADrito-Dr-Fritz-Predestinado/dp/8531521319?ref_=Oct_d_omg_d_7841731011&pd_rd_w=qQkBr&content-id=amzn1.sym.324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_p=324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_r=DR8W15Q1M8FS46XQ4928&pd_rd_wg=2kvlW&pd_rd_r=613f401d-bde9-4abf-968f-d20e71ea6497&pd_rd_i=8531521319",
      img:"https://images-na.ssl-images-amazon.com/images/I/81OLDkhcN2L.jpg",
      title: "Arigó e o espírito do Dr. Fritz",
      price: 59.99,
      break: 3,
      rating: 4,
      discount: 20,
      endpoint: "bio/4"
    },
    {
      id:5,
      link: "https://www.amazon.com.br/Narciso-em-f%C3%A9rias-Caetano-Veloso/dp/8535932259?ref_=Oct_d_old_d_7841731011_0&pd_rd_w=k1IsK&content-id=amzn1.sym.1d5518b3-4cf3-464f-944d-e54d027616e2&pf_rd_p=1d5518b3-4cf3-464f-944d-e54d027616e2&pf_rd_r=DR8W15Q1M8FS46XQ4928&pd_rd_wg=2kvlW&pd_rd_r=613f401d-bde9-4abf-968f-d20e71ea6497",
      img:"https://images-na.ssl-images-amazon.com/images/I/81L5qjtMxtL.jpg",
      title: "Narciso em férias",
      price: 29.99,
      break: 2,
      rating: 4,
      discount: 15,
      endpoint: "bio/5"
    },
    {
      id:6,
      link: "https://www.amazon.com.br/Democracia-Tropical-Fernando-Paulo-Gabeira/dp/8556080197?ref_=Oct_d_old_d_7841731011_4&pd_rd_w=k1IsK&content-id=amzn1.sym.1d5518b3-4cf3-464f-944d-e54d027616e2&pf_rd_p=1d5518b3-4cf3-464f-944d-e54d027616e2&pf_rd_r=DR8W15Q1M8FS46XQ4928&pd_rd_wg=2kvlW&pd_rd_r=613f401d-bde9-4abf-968f-d20e71ea6497",
      img:"https://images-na.ssl-images-amazon.com/images/I/61pymfJY25L.jpg",
      title: "Democracia tropical: Caderno de um aprendiz",
      price: 19.99,
      break: 2,
      rating: 4,
      discount: 25,
      endpoint: "bio/6"
    },
    {
      id:7,
      link: "https://www.amazon.com.br/Diana-Sua-verdadeira-hist%C3%B3ria/dp/8576847787?ref_=Oct_d_orecs_d_7841731011&pd_rd_w=oq7Z4&content-id=amzn1.sym.0b88fdcf-5a93-418f-aa69-11a1a44f3d28&pf_rd_p=0b88fdcf-5a93-418f-aa69-11a1a44f3d28&pf_rd_r=DR8W15Q1M8FS46XQ4928&pd_rd_wg=2kvlW&pd_rd_r=613f401d-bde9-4abf-968f-d20e71ea6497&pd_rd_i=8576847787",
      img:"https://images-na.ssl-images-amazon.com/images/I/81KSAeXuBOL.jpg",
      title: "Diana: Sua verdadeira história",
      price: 49.99,
      break: 2,
      rating: 5,
      discount: 15,
      endpoint: "bio/7"
    },
    {
      id:8,
      link: "https://www.amazon.com.br/di%C3%A1rio-Anne-Frank/dp/6550970407?ref_=Oct_d_oup_d_7841731011&pd_rd_w=U2aLz&content-id=amzn1.sym.0dd2d5ea-95b1-4298-a644-6328eaa0cb22&pf_rd_p=0dd2d5ea-95b1-4298-a644-6328eaa0cb22&pf_rd_r=DR8W15Q1M8FS46XQ4928&pd_rd_wg=2kvlW&pd_rd_r=613f401d-bde9-4abf-968f-d20e71ea6497&pd_rd_i=6550970407",
      img:"https://images-na.ssl-images-amazon.com/images/I/514tKci6HIL.jpg",
      title: "O diário de Anne Frank",
      price: 19.99,
      break: 2,
      rating: 4,
      discount: 20,
      endpoint: "bio/8"
    },
    {
      id:9,
      link: "https://www.amazon.com.br/Aprendizados-Minha-caminhada-para-significado/dp/8546501270?ref_=Oct_d_omwf_d_7841752011&pd_rd_w=jOpAI&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=6XW607N02Y36X0Z5H07W&pd_rd_wg=mGFM5&pd_rd_r=6d0ef86e-5194-47a7-8dd2-6d34636d53e6&pd_rd_i=8546501270",
      img:"https://images-na.ssl-images-amazon.com/images/I/813f0soYkXL.jpg",
      title: "Aprendizados: Minha caminhada para uma vida com mais significado",
      price: 49.99,
      break: 2,
      rating: 4,
      discount: 15,
      endpoint: "bio/9"
    },
    {
      id:10,
      link: "https://www.amazon.com.br/Maria-Bonita-viol%C3%AAncia-mulheres-canga%C3%A7o/dp/8547000682?ref_=Oct_d_omwf_d_7841752011&pd_rd_w=jOpAI&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=6XW607N02Y36X0Z5H07W&pd_rd_wg=mGFM5&pd_rd_r=6d0ef86e-5194-47a7-8dd2-6d34636d53e6&pd_rd_i=8547000682",
      img:"https://images-na.ssl-images-amazon.com/images/I/A1E2ctMTzsL.jpg",
      title: "Maria Bonita: Sexo, violência e mulheres no cangaço",
      price: 39.99,
      break: 2,
      rating: 4,
      discount: 20,
      endpoint: "bio/10"
    },
    {
      id:11,
      link: "https://www.amazon.com.br/Lula-1-Biografia-Fernando-Morais/dp/6559212920?ref_=Oct_d_orecs_d_7841752011&pd_rd_w=Aa1cZ&content-id=amzn1.sym.0b88fdcf-5a93-418f-aa69-11a1a44f3d28&pf_rd_p=0b88fdcf-5a93-418f-aa69-11a1a44f3d28&pf_rd_r=6XW607N02Y36X0Z5H07W&pd_rd_wg=mGFM5&pd_rd_r=6d0ef86e-5194-47a7-8dd2-6d34636d53e6&pd_rd_i=6559212920",
      img:"https://images-na.ssl-images-amazon.com/images/I/81Or2lwumkL.jpg",
      title: "Lula, volume 1: Biografia",
      price: 59.99,
      break: 3,
      rating: 5,
      discount: 10,
      endpoint: "bio/11"
    },
    {
      id:12,
      link: "https://www.amazon.com.br/autobiografia-Martin-Luther-King/dp/8537813079?ref_=Oct_d_omwf_d_7841752011&pd_rd_w=jOpAI&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=6XW607N02Y36X0Z5H07W&pd_rd_wg=mGFM5&pd_rd_r=6d0ef86e-5194-47a7-8dd2-6d34636d53e6&pd_rd_i=8537813079",
      img:"https://images-na.ssl-images-amazon.com/images/I/91lbj3I2yxL.jpg",
      title: "A autobiografia de Martin Luther King",
      price: 79.99,
      break: 3,
      rating: 5,
      discount: 25,
      endpoint: "bio/12"
    },
  ]
  export const booksFood = [
    {
      id:1,
      link: "https://www.amazon.com.br/dp/8539607492/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-6&pf_rd_r=PDJGMKEYRJ561KFB67EJ&pf_rd_t=101&pf_rd_p=63f1368f-d4fa-4792-b7a4-26446bd5b5da&pf_rd_i=7872552011",
      img:"https://images-na.ssl-images-amazon.com/images/I/816GVsNbCHL.jpg",
      title: "Chef profissional",
      price: 299.99,
      break: 5,
      rating: 5,
      discount: 25,
      endpoint: "food/1"
    },
    {
      id:2,
      link: "https://www.amazon.com.br/dp/8539606097/ref=s9_acsd_al_bw_c2_x_2_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-6&pf_rd_r=PDJGMKEYRJ561KFB67EJ&pf_rd_t=101&pf_rd_p=63f1368f-d4fa-4792-b7a4-26446bd5b5da&pf_rd_i=7872552011",
      img:"https://images-na.ssl-images-amazon.com/images/I/81anJ30ml8L.jpg",
      title: "Garde manger: a arte e o ofício da cozinha fria",
      price: 269.99,
      break: 5,
      rating: 5,
      discount: 20,
      endpoint: "food/2"
    },
    {
      id:3,
      link: "https://www.amazon.com.br/dp/8539609231/ref=s9_acsd_al_bw_c2_x_4_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-6&pf_rd_r=PDJGMKEYRJ561KFB67EJ&pf_rd_t=101&pf_rd_p=63f1368f-d4fa-4792-b7a4-26446bd5b5da&pf_rd_i=7872552011",
      img:"https://images-na.ssl-images-amazon.com/images/I/91fMyxqMYWL.jpg",
      title: "Manual prático de confeitaria Senac",
      price: 139.99,
      break: 5,
      rating: 5,
      discount: 25,
      endpoint: "food/3"
    },
    {
      id:4,
      link: "https://www.amazon.com.br/dp/8578814339/ref=s9_acsd_al_bw_c2_x_3_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-6&pf_rd_r=PDJGMKEYRJ561KFB67EJ&pf_rd_t=101&pf_rd_p=63f1368f-d4fa-4792-b7a4-26446bd5b5da&pf_rd_i=7872552011",
      img:"https://images-na.ssl-images-amazon.com/images/I/71iOVF3W4NL.jpg",
      title: "Larousse da confeitaria",
      price: 199.99,
      break: 5,
      rating: 4,
      discount: 20,
      endpoint: "food/4"
    },
    {
      id:5,
      link: "https://www.amazon.com.br/dp/8527902958/ref=s9_acsd_al_bw_c2_x_1_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-6&pf_rd_r=PDJGMKEYRJ561KFB67EJ&pf_rd_t=101&pf_rd_p=63f1368f-d4fa-4792-b7a4-26446bd5b5da&pf_rd_i=7872552011",
      img:"https://images-na.ssl-images-amazon.com/images/I/51rf+kqLPZL.jpg",
      title: "Le Cordon Bleu : Todas as técnicas culinárias",
      price: 159.99,
      break: 5,
      rating: 5,
      discount: 15,
      endpoint: "food/5"
    },
    {
      id:6,
      link: "https://www.amazon.com.br/dp/8578815254/ref=s9_acsd_al_bw_c2_x_4_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-7&pf_rd_r=PDJGMKEYRJ561KFB67EJ&pf_rd_t=101&pf_rd_p=01483150-a463-42d4-ae8a-de0e81b9adae&pf_rd_i=7872552011",
      img:"https://images-na.ssl-images-amazon.com/images/I/61tEmKDfSjL.jpg",
      title: "Flor de sal: O livro de receitas do blog para uma alimentação mais natural e consciente",
      price: 59.99,
      break: 3,
      rating: 4,
      discount: 25,
      endpoint: "food/6"
    },
    {
      id:7,
      link: "https://www.amazon.com.br/dp/8578813421/ref=s9_acsd_al_bw_c2_x_2_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-7&pf_rd_r=PDJGMKEYRJ561KFB67EJ&pf_rd_t=101&pf_rd_p=01483150-a463-42d4-ae8a-de0e81b9adae&pf_rd_i=7872552011",
      img:"https://images-na.ssl-images-amazon.com/images/I/91WfT-9nKrL.jpg",
      title: "Cozinha vegana para o dia a dia",
      price: 79.99,
      break: 3,
      rating: 4,
      discount: 15,
      endpoint: "food/7"
    },
    {
      id:8,
      link: "https://www.amazon.com.br/dp/8578812980/ref=s9_acsd_al_bw_c2_x_1_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-7&pf_rd_r=PDJGMKEYRJ561KFB67EJ&pf_rd_t=101&pf_rd_p=01483150-a463-42d4-ae8a-de0e81b9adae&pf_rd_i=7872552011",
      img:"https://images-na.ssl-images-amazon.com/images/I/61dtt1D7oXL.jpg",
      title: "Alimentação sem carne: Um guia prático para montar a sua dieta vegetariana com saúde",
      price: 39.99,
      break: 2,
      rating: 4,
      discount: 20,
      endpoint: "food/8"
    },
    {
      id:9,
      link: "https://www.amazon.com.br/dp/8525062723/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-7&pf_rd_r=PDJGMKEYRJ561KFB67EJ&pf_rd_t=101&pf_rd_p=01483150-a463-42d4-ae8a-de0e81b9adae&pf_rd_i=7872552011",
      img:"https://images-na.ssl-images-amazon.com/images/I/810M4kH9LgL.jpg",
      title: "Diário de uma vegana",
      price: 49.99,
      break: 2,
      rating: 4,
      discount: 15,
      endpoint: "food/9"
    },
    {
      id:10,
      link: "https://www.amazon.com.br/Maria-Bonita-viol%C3%AAncia-mulheres-canga%C3%A7o/dp/8547000682?ref_=Oct_d_omwf_d_7841752011&pd_rd_w=jOpAI&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=6XW607N02Y36X0Z5H07W&pd_rd_wg=mGFM5&pd_rd_r=6d0ef86e-5194-47a7-8dd2-6d34636d53e6&pd_rd_i=8547000682",
      img:"https://images-na.ssl-images-amazon.com/images/I/51dUoQkGMcL.jpg",
      title: "50 marmitas veganas: Delícias para saborear a qualquer hora",
      price: 29.99,
      break: 2,
      rating: 5,
      discount: 20,
      endpoint: "food/10"
    },
    {
      id:11,
      link: "https://www.amazon.com.br/Cozinha-Pr%C3%A1tica-Rita-Lobo/dp/8539605376?ref_=Oct_d_omwf_d_7872552011&pd_rd_w=KyoVu&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=PDJGMKEYRJ561KFB67EJ&pd_rd_wg=TSkst&pd_rd_r=7412c6ef-ca03-44fe-b1d9-dc372cbad55c&pd_rd_i=8539605376",
      img:"https://m.media-amazon.com/images/P/B07LBXDQWG.01._SCLZZZZZZZ_SX500_.jpg",
      title: "Cozinha prática",
      price: 99.99,
      break: 4,
      rating: 5,
      discount: 10,
      endpoint: "food/11"
    },
    {
      id:12,
      link: "https://www.amazon.com.br/Panelinha-Receitas-funcionam-Rita-Lobo/dp/8539602776?ref_=Oct_d_omwf_d_7872552011&pd_rd_w=KyoVu&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=PDJGMKEYRJ561KFB67EJ&pd_rd_wg=TSkst&pd_rd_r=7412c6ef-ca03-44fe-b1d9-dc372cbad55c&pd_rd_i=8539602776",
      img:"https://images-na.ssl-images-amazon.com/images/I/91PNKfqOKRL.jpg",
      title: "Panelinha: receitas que funcionam",
      price: 79.99,
      break: 3,
      rating: 5,
      discount: 25,
      endpoint: "food/12"
    },
  ]

  export const booksLaw = [
    {
      id:1,
      link: "https://www.amazon.com.br/dp/8539607492/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-6&pf_rd_r=PDJGMKEYRJ561KFB67EJ&pf_rd_t=101&pf_rd_p=63f1368f-d4fa-4792-b7a4-26446bd5b5da&pf_rd_i=7872552011",
      img:"https://images-na.ssl-images-amazon.com/images/I/81PL2KUI08L.jpg",
      title: "Vade Mecum Metodo 2022 - 2º Semestre",
      price: 129.99,
      break: 5,
      rating: 5,
      discount: 25,
      endpoint: "law/1"
    },
    {
      id:2,
      link: "https://www.amazon.com.br/Vade-Mecum-Saraiva-Tradicional-edi%C3%A7%C3%A3o/dp/6553620075?ref_=Oct_d_onr_d_7874340011&pd_rd_w=K0pKY&content-id=amzn1.sym.797b3760-e0f6-48ee-98c3-a59c3b827b09&pf_rd_p=797b3760-e0f6-48ee-98c3-a59c3b827b09&pf_rd_r=T5B9985FZ8GWB17T24C7&pd_rd_wg=bHk8F&pd_rd_r=3d7ec6ba-b696-4f0b-8663-b5db61c19048&pd_rd_i=6553620075",
      img:"https://images-na.ssl-images-amazon.com/images/I/81q00uUVIFL.jpg",
      title: "Vade Mecum Saraiva - Tradicional - 34ª edição 2022",
      price: 149.99,
      break: 5,
      rating: 5,
      discount: 20,
      endpoint: "law/2"
    },
    {
      id:3,
      link: "https://www.amazon.com.br/dp/6559643115/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-7&pf_rd_r=T5B9985FZ8GWB17T24C7&pf_rd_t=101&pf_rd_p=981b250a-3ee8-4887-9605-915dcb479387&pf_rd_i=7874340011",
      img:"https://images-na.ssl-images-amazon.com/images/I/71VxLX83r2L.jpg",
      title: "Manual de Direito Civil - Volume Único",
      price: 249.99,
      break: 5,
      rating: 5,
      discount: 25,
      endpoint: "law/3"
    },
    {
      id:4,
      link: "https://www.amazon.com.br/dp/6555596090/ref=s9_acsd_al_bw_c2_x_1_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-7&pf_rd_r=T5B9985FZ8GWB17T24C7&pf_rd_t=101&pf_rd_p=981b250a-3ee8-4887-9605-915dcb479387&pf_rd_i=7874340011",
      img:"https://images-na.ssl-images-amazon.com/images/I/61kgiFFU2UL.jpg",
      title: "Direito Civil Brasileiro VOL. 6 - 19ª edição 2022",
      price: 199.99,
      break: 5,
      rating: 4,
      discount: 20,
      endpoint: "law/4"
    },
    {
      id:5,
      link: "https://www.amazon.com.br/dp/6559643611/ref=s9_acsd_al_bw_c2_x_7_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-7&pf_rd_r=T5B9985FZ8GWB17T24C7&pf_rd_t=101&pf_rd_p=981b250a-3ee8-4887-9605-915dcb479387&pf_rd_i=7874340011",
      img:"https://images-na.ssl-images-amazon.com/images/I/71-Y44D6sIL.jpg",
      title: "Direito Civil - Lei de Introdução e Parte Geral - Vol. 1",
      price: 199.99,
      break: 5,
      rating: 4,
      discount: 15,
      endpoint: "law/5"
    },
    {
      id:6,
      link: "https://www.amazon.com.br/dp/6559643646/ref=s9_acsd_al_bw_c2_x_9_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-7&pf_rd_r=T5B9985FZ8GWB17T24C7&pf_rd_t=101&pf_rd_p=981b250a-3ee8-4887-9605-915dcb479387&pf_rd_i=7874340011",
      img:"https://images-na.ssl-images-amazon.com/images/I/715JgZ9WQoL.jpg",
      title: "Direito Civil - Direito das Obrigações e Responsabilidade Civil - Vol. 2: Volume 2",
      price: 159.99,
      break: 5,
      rating: 4,
      discount: 25,
      endpoint: "law/6"
    },
    {
      id:7,
      link: "https://www.amazon.com.br/dp/8553603458/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-9&pf_rd_r=T5B9985FZ8GWB17T24C7&pf_rd_t=101&pf_rd_p=5375a7e1-e853-466f-8287-4cec48fd351e&pf_rd_i=7874340011",
      img:"https://images-na.ssl-images-amazon.com/images/I/71alpa-SQ9L.jpg",
      title: "Direito penal esquematizado®: Parte geral",
      price: 79.99,
      break: 3,
      rating: 4,
      discount: 15,
      endpoint: "law/7"
    },
    {
      id:8,
      link: "https://www.amazon.com.br/Vigiar-punir-Nascimento-Michel-Foucault/dp/8532605087?ref_=Oct_d_omwf_d_7874340011&pd_rd_w=K71fO&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=T5B9985FZ8GWB17T24C7&pd_rd_wg=bHk8F&pd_rd_r=3d7ec6ba-b696-4f0b-8663-b5db61c19048&pd_rd_i=8532605087",
      img:"https://images-na.ssl-images-amazon.com/images/I/715cug5raAL.jpg",
      title: "Vigiar e punir: Nascimento da prisão",
      price: 59.99,
      break: 2,
      rating: 4,
      discount: 20,
      endpoint: "law/8"
    },
    {
      id:9,
      link: "https://www.amazon.com.br/Os-Onze-seus-bastidores-crises/dp/8535932380?ref_=Oct_d_omwf_d_7874340011&pd_rd_w=K71fO&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=T5B9985FZ8GWB17T24C7&pd_rd_wg=bHk8F&pd_rd_r=3d7ec6ba-b696-4f0b-8663-b5db61c19048&pd_rd_i=8535932380",
      img:"https://images-na.ssl-images-amazon.com/images/I/81-+bsk+68L.jpg",
      title: "Os Onze: O STF, seus bastidores e suas crises",
      price: 49.99,
      break: 2,
      rating: 4,
      discount: 15,
      endpoint: "law/9"
    },
    {
      id:10,
      link: "https://www.amazon.com.br/Ret%C3%B3rica-Aristoteles/dp/8572837469?ref_=Oct_d_omwf_d_7874340011&pd_rd_w=K71fO&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=T5B9985FZ8GWB17T24C7&pd_rd_wg=bHk8F&pd_rd_r=3d7ec6ba-b696-4f0b-8663-b5db61c19048&pd_rd_i=8572837469",
      img:"https://images-na.ssl-images-amazon.com/images/I/61A+g0nFuSL.jpg",
      title: "Retórica",
      price: 49.99,
      break: 2,
      rating: 5,
      discount: 20,
      endpoint: "law/10"
    },
    {
      id:11,
      link: "https://www.amazon.com.br/Justi%C3%A7a-que-fazer-coisa-certa/dp/852001030X?ref_=Oct_d_omwf_d_7874340011&pd_rd_w=K71fO&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=T5B9985FZ8GWB17T24C7&pd_rd_wg=bHk8F&pd_rd_r=3d7ec6ba-b696-4f0b-8663-b5db61c19048&pd_rd_i=852001030X",
      img:"https://images-na.ssl-images-amazon.com/images/I/81I8EOn-suL.jpg",
      title: "Justiça: O que é fazer a coisa certa",
      price: 39.99,
      break: 2,
      rating: 5,
      discount: 10,
      endpoint: "law/11"
    },
    {
      id:12,
      link: "https://www.amazon.com.br/Direito-Processual-Penal-edi%C3%A7%C3%A3o-2022/dp/6553621640?ref_=Oct_d_otopr_d_7874340011&pd_rd_w=7be4x&content-id=amzn1.sym.ecc25cc1-ec38-4678-aabf-b9da0181edb4&pf_rd_p=ecc25cc1-ec38-4678-aabf-b9da0181edb4&pf_rd_r=T5B9985FZ8GWB17T24C7&pd_rd_wg=bHk8F&pd_rd_r=3d7ec6ba-b696-4f0b-8663-b5db61c19048&pd_rd_i=6553621640",
      img:"https://images-na.ssl-images-amazon.com/images/I/71V3HMZlgdL.jpg",
      title: "Direito Processual Penal",
      price: 139.99,
      break: 5,
      rating: 5,
      discount: 25,
      endpoint: "law/12"
    },
  ]
  export const booksMed = [
    {
      id:1,
      link: "https://www.amazon.com.br/Corpo-fala-linguagem-silenciosa-comunica%C3%A7%C3%A3o/dp/8532602088?ref_=Oct_d_omwf_d_7874461011&pd_rd_w=haq9u&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=P9CFEEJH06THPCJDAWVK&pd_rd_wg=6TIPG&pd_rd_r=9e28d578-f7f8-4232-aff6-06eee0395a36&pd_rd_i=8532602088",
      img:"https://images-na.ssl-images-amazon.com/images/I/51D932tuqAL._SX324_BO1,204,203,200_.jpg",
      title: "Corpo fala: A linguagem silenciosa da comunicação não verbal",
      price: 39.99,
      break: 2,
      rating: 5,
      discount: 25,
      endpoint: "med/1"
    },
    {
      id:2,
      link: "https://www.amazon.com.br/Psicopatologia-Semiologia-dos-Transtornos-Mentais/dp/8582715056?ref_=Oct_d_omwf_d_7874461011&pd_rd_w=haq9u&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=P9CFEEJH06THPCJDAWVK&pd_rd_wg=6TIPG&pd_rd_r=9e28d578-f7f8-4232-aff6-06eee0395a36&pd_rd_i=8582715056",
      img:"https://images-na.ssl-images-amazon.com/images/I/51MQWux8UaL._SX348_BO1,204,203,200_.jpg",
      title: "Psicopatologia e Semiologia dos Transtornos Mentais",
      price: 139.99,
      break: 5,
      rating: 4,
      discount: 20,
      endpoint: "med/2"
    },
    {
      id:3,
      link: "https://www.amazon.com.br/Alimenta%C3%A7%C3%A3o-sem-carne-pr%C3%A1tico-vegetariana/dp/8578812980?ref_=Oct_d_omwf_d_7874461011&pd_rd_w=haq9u&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=P9CFEEJH06THPCJDAWVK&pd_rd_wg=6TIPG&pd_rd_r=9e28d578-f7f8-4232-aff6-06eee0395a36&pd_rd_i=8578812980",
      img:"https://images-na.ssl-images-amazon.com/images/I/515DnUDoigL._SX343_BO1,204,203,200_.jpg",
      title: "Alimentação sem carne: Um guia prático para montar a sua dieta vegetariana com saúde",
      price: 59.99,
      break: 3,
      rating: 4,
      discount: 25,
      endpoint: "med/3"
    },
    {
      id:4,
      link: "https://www.amazon.com.br/El%C3%A1stico-pensamento-flex%C3%ADvel-mudar-nossas/dp/853781797X?ref_=Oct_d_omwf_d_7874461011&pd_rd_w=haq9u&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=P9CFEEJH06THPCJDAWVK&pd_rd_wg=6TIPG&pd_rd_r=9e28d578-f7f8-4232-aff6-06eee0395a36&pd_rd_i=853781797X",
      img:"https://images-na.ssl-images-amazon.com/images/I/41jQUZcxNhL._SX346_BO1,204,203,200_.jpg",
      title: "Elástico: Como o pensamento flexível pode mudar nossas vidas",
      price: 49.99,
      break: 2,
      rating: 5,
      discount: 20,
      endpoint: "med/4"
    },
    {
      id:5,
      link: "https://www.amazon.com.br/dp/8527734710/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-6&pf_rd_r=P9CFEEJH06THPCJDAWVK&pf_rd_t=101&pf_rd_p=feb83e59-abf7-422c-9704-82146ca73cc1&pf_rd_i=7874461011",
      img:"https://images-na.ssl-images-amazon.com/images/I/41fIU6wgy4L._SX379_BO1,204,203,200_.jpg",
      title: "Semiologia Médica",
      price: 599.99,
      break: 5,
      rating: 5,
      discount: 15,
      endpoint: "med/5"
    },
    {
      id:6,
      link: "https://www.amazon.com.br/dp/8527730502/ref=s9_acsd_al_bw_c2_x_1_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-6&pf_rd_r=P9CFEEJH06THPCJDAWVK&pf_rd_t=101&pf_rd_p=feb83e59-abf7-422c-9704-82146ca73cc1&pf_rd_i=7874461011",
      img:"https://images-na.ssl-images-amazon.com/images/I/41ZbthTRvUL._SX385_BO1,204,203,200_.jpg",
      title: "Rezende Obstetrícia",
      price: 549.99,
      break: 5,
      rating: 4,
      discount: 25,
      endpoint: "med/6"
    },
    {
      id:7,
      link: "https://www.amazon.com.br/dp/8535290826/ref=s9_acsd_al_bw_c2_x_2_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-6&pf_rd_r=P9CFEEJH06THPCJDAWVK&pf_rd_t=101&pf_rd_p=feb83e59-abf7-422c-9704-82146ca73cc1&pf_rd_i=7874461011",
      img:"https://images-na.ssl-images-amazon.com/images/I/417HZXLf2kL._SX391_BO1,204,203,200_.jpg",
      title: "Bontrager - Tratado de Posicionamento Radiográfico e Anatomia Associada",
      price: 499.99,
      break: 5,
      rating: 3,
      discount: 15,
      endpoint: "med/7"
    },
    {
      id:8,
      link: "https://www.amazon.com.br/dp/8527726629/ref=s9_acsd_al_bw_c2_x_3_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-6&pf_rd_r=P9CFEEJH06THPCJDAWVK&pf_rd_t=101&pf_rd_p=feb83e59-abf7-422c-9704-82146ca73cc1&pf_rd_i=7874461011",
      img:"https://images-na.ssl-images-amazon.com/images/I/414GDkMeGAL._SX345_BO1,204,203,200_.jpg",
      title: "Manual de neonatologia",
      price: 399.99,
      break: 5,
      rating: 4,
      discount: 20,
      endpoint: "med/8"
    },
    {
      id:9,
      link: "https://www.amazon.com.br/dp/852772586X/ref=s9_acsd_al_bw_c2_x_4_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-6&pf_rd_r=P9CFEEJH06THPCJDAWVK&pf_rd_t=101&pf_rd_p=feb83e59-abf7-422c-9704-82146ca73cc1&pf_rd_i=7874461011",
      img:"https://images-na.ssl-images-amazon.com/images/I/51fAT4va2EL._SX352_BO1,204,203,200_.jpg",
      title: "Psicofarmacologia - Bases Neurocientíficas e Aplicações Práticas",
      price: 399.99,
      break: 5,
      rating: 4,
      discount: 15,
      endpoint: "med/9"
    },
    {
      id:10,
      link: "https://www.amazon.com.br/dp/8527737663/ref=s9_acsd_al_bw_c2_x_5_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-6&pf_rd_r=P9CFEEJH06THPCJDAWVK&pf_rd_t=101&pf_rd_p=feb83e59-abf7-422c-9704-82146ca73cc1&pf_rd_i=7874461011",
      img:"https://images-na.ssl-images-amazon.com/images/I/418RmhgFWSL._SX374_BO1,204,203,200_.jpg",
      title: "Berek & Novak - Tratado de Ginecologia",
      price: 699.99,
      break: 5,
      rating: 5,
      discount: 20,
      endpoint: "med/10"
    },
    {
      id:11,
      link: "https://www.amazon.com.br/dp/8527731304/ref=s9_acsd_al_bw_c2_x_6_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-6&pf_rd_r=P9CFEEJH06THPCJDAWVK&pf_rd_t=101&pf_rd_p=feb83e59-abf7-422c-9704-82146ca73cc1&pf_rd_i=7874461011",
      img:"https://images-na.ssl-images-amazon.com/images/I/51WrPKfcHAL._SX352_BO1,204,203,200_.jpg",
      title: "Zollinger - Atlas de Cirurgia",
      price: 509.99,
      break: 5,
      rating: 5,
      discount: 10,
      endpoint: "med/11"
    },
    {
      id:12,
      link: "https://www.amazon.com.br/dp/8527730553/ref=s9_acsd_al_bw_c2_x_7_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-6&pf_rd_r=P9CFEEJH06THPCJDAWVK&pf_rd_t=101&pf_rd_p=feb83e59-abf7-422c-9704-82146ca73cc1&pf_rd_i=7874461011",
      img:"https://images-na.ssl-images-amazon.com/images/I/41PZ2KmxSGL._SX343_BO1,204,203,200_.jpg",
      title: "Exame Clínico",
      price: 399.99,
      break: 5,
      rating: 4,
      discount: 25,
      endpoint: "med/12"
    },
  ]

  export const booksHelp = [
    {
      id:1,
      link: "https://www.amazon.com.br/Sutil-Arte-Ligar-Se/dp/855100249X?ref_=Oct_d_omwf_d_7841720011&pd_rd_w=jccgK&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=XAZNFACE3GDMCRF536KD&pd_rd_wg=ZS9HL&pd_rd_r=56cae41d-ac20-437a-a0a6-482a0f8b2f46&pd_rd_i=855100249X",
      img:"https://images-na.ssl-images-amazon.com/images/I/6175IU0qFgL.jpg",
      title: "A Sutil Arte de Ligar o F*da-Se",
      price: 39.99,
      break: 2,
      rating: 5,
      discount: 25,
      endpoint: "help/1"
    },
    {
      id:2,
      link: "https://www.amazon.com.br/dp/0141988517/ref=s9_acsd_hps_bw_c2_x_1_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-9&pf_rd_r=XAZNFACE3GDMCRF536KD&pf_rd_t=101&pf_rd_p=96ebb901-436b-45f9-88b8-c88c8b444ffb&pf_rd_i=7841720011",
      img:"https://images-na.ssl-images-amazon.com/images/I/71wR8wezE1L.jpg",
      title: "12 Rules for Life: An Antidote to Chaos",
      price: 99.99,
      break: 3,
      rating: 4,
      discount: 20,
      endpoint: "help/2"
    },
    {
      id:3,
      link: "https://www.amazon.com.br/poder-a%C3%A7%C3%A3o-Paulo-Vieira/dp/854520034X?ref_=Oct_d_omg_d_7841720011&pd_rd_w=cjJo1&content-id=amzn1.sym.324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_p=324ac3f4-65c0-48b6-a3ae-a54e2c813f1e&pf_rd_r=XAZNFACE3GDMCRF536KD&pd_rd_wg=ZS9HL&pd_rd_r=56cae41d-ac20-437a-a0a6-482a0f8b2f46&pd_rd_i=854520034X",
      img:"https://images-na.ssl-images-amazon.com/images/I/81sR3mT3Z2L.jpg",
      title: "O poder da ação",
      price: 29.99,
      break: 2,
      rating: 3,
      discount: 25,
      endpoint: "help/3"
    },
    {
      id:4,
      link: "https://www.amazon.com.br/raiva-n%C3%A3o-educa-calma-emocional/dp/6555662646?ref_=Oct_d_orecs_d_7841720011&pd_rd_w=uIVv5&content-id=amzn1.sym.0b88fdcf-5a93-418f-aa69-11a1a44f3d28&pf_rd_p=0b88fdcf-5a93-418f-aa69-11a1a44f3d28&pf_rd_r=XAZNFACE3GDMCRF536KD&pd_rd_wg=ZS9HL&pd_rd_r=56cae41d-ac20-437a-a0a6-482a0f8b2f46&pd_rd_i=6555662646",
      img:"https://images-na.ssl-images-amazon.com/images/I/71SvgvNLrPL.jpg",
      title: "A raiva não educa. A calma educa",
      price: 39.99,
      break: 2,
      rating: 5,
      discount: 20,
      endpoint: "help/4"
    },
    {
      id:5,
      link: "https://www.amazon.com.br/PROCRASTINA%C3%87%C3%83O-cient%C3%ADfico-sobre-procrastinar-definitivamente-ebook/dp/B075JMXJLH?ref_=Oct_d_obs_d_7841720011&pd_rd_w=aVb11&content-id=amzn1.sym.574d7dde-c8d1-436d-a7fc-f2654a8c3190&pf_rd_p=574d7dde-c8d1-436d-a7fc-f2654a8c3190&pf_rd_r=XAZNFACE3GDMCRF536KD&pd_rd_wg=ZS9HL&pd_rd_r=56cae41d-ac20-437a-a0a6-482a0f8b2f46&pd_rd_i=B075JMXJLH",
      img:"https://m.media-amazon.com/images/P/B075JMXJLH.01._SCLZZZZZZZ_SX500_.jpg",
      title: "PROCRASTINAÇÃO: Guia científico sobre como parar de procrastinar",
      price: 19.99,
      break: 2,
      rating: 4,
      discount: 15,
      endpoint: "help/5"
    },
    {
      id:6,
      link: "https://www.amazon.com.br/dp/6588370113/ref=s9_acsd_hps_bw_c2_x_19_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-6&pf_rd_r=XAZNFACE3GDMCRF536KD&pf_rd_t=101&pf_rd_p=6dcf4e74-32cb-45b2-85e2-5dd6f0611df0&pf_rd_i=7841720011",
      img:"https://images-na.ssl-images-amazon.com/images/I/71HrcY2tvTS.jpg",
      title: "O que o ensino não te ensina",
      price: 49.99,
      break: 2,
      rating: 4,
      discount: 25,
      endpoint: "help/6"
    },
    {
      id:7,
      link: "https://www.amazon.com.br/dp/8553603458/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-9&pf_rd_r=T5B9985FZ8GWB17T24C7&pf_rd_t=101&pf_rd_p=5375a7e1-e853-466f-8287-4cec48fd351e&pf_rd_i=7874340011",
      img:"https://images-na.ssl-images-amazon.com/images/I/71Ils+Co9fL.jpg",
      title: "Mindset: A nova psicologia do sucesso",
      price: 39.99,
      break: 2,
      rating: 4,
      discount: 15,
      endpoint: "help/7"
    },
    {
      id:8,
      link: "https://www.amazon.com.br/dp/6587408095/ref=s9_acsd_hps_bw_c2_x_3_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-6&pf_rd_r=XAZNFACE3GDMCRF536KD&pf_rd_t=101&pf_rd_p=6dcf4e74-32cb-45b2-85e2-5dd6f0611df0&pf_rd_i=7841720011",
      img:"https://images-na.ssl-images-amazon.com/images/I/71ucrSXj33L.jpg",
      title: "Um Psicólogo no Campo de Concentração",
      price: 39.99,
      break: 2,
      rating: 4,
      discount: 20,
      endpoint: "help/8"
    },
    {
      id:9,
      link: "https://www.amazon.com.br/dp/6555480009/ref=s9_acsd_hps_bw_c2_x_6_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-6&pf_rd_r=XAZNFACE3GDMCRF536KD&pf_rd_t=101&pf_rd_p=6dcf4e74-32cb-45b2-85e2-5dd6f0611df0&pf_rd_i=7841720011",
      img:"https://images-na.ssl-images-amazon.com/images/I/71V2Zu9CAYL.jpg",
      title: "Por que gritamos",
      price: 99.99,
      break: 3,
      rating: 5,
      discount: 15,
      endpoint: "help/9"
    },
    {
      id:10,
      link: "https://www.amazon.com.br/Ret%C3%B3rica-Aristoteles/dp/8572837469?ref_=Oct_d_omwf_d_7874340011&pd_rd_w=K71fO&content-id=amzn1.sym.0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_p=0a946fed-f177-4172-b4ee-5f9f85219905&pf_rd_r=T5B9985FZ8GWB17T24C7&pd_rd_wg=bHk8F&pd_rd_r=3d7ec6ba-b696-4f0b-8663-b5db61c19048&pd_rd_i=8572837469",
      img:"https://images-na.ssl-images-amazon.com/images/I/81t5ukq4b7L.jpg",
      title: "O maior líder da história",
      price: 49.99,
      break: 2,
      rating: 5,
      discount: 20,
      endpoint: "help/10"
    },
    {
      id:11,
      link: "https://www.amazon.com.br/dp/1401961983/ref=s9_acsd_hps_bw_c2_x_12_i?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-9&pf_rd_r=XAZNFACE3GDMCRF536KD&pf_rd_t=101&pf_rd_p=96ebb901-436b-45f9-88b8-c88c8b444ffb&pf_rd_i=7841720011",
      img:"https://images-na.ssl-images-amazon.com/images/I/714rVHe0N4L.jpg",
      title: "Whole Brain Living: The Anatomy of Choice and the Four Characters That Drive Our Life",
      price: 129.99,
      break: 4,
      rating: 5,
      discount: 10,
      endpoint: "help/11"
    },
    {
      id:12,
      link: "https://www.amazon.com.br/Em-mim-basta-quando-sentido/dp/6550471419?ref_=Oct_d_onr_d_7841720011&pd_rd_w=leHnm&content-id=amzn1.sym.797b3760-e0f6-48ee-98c3-a59c3b827b09&pf_rd_p=797b3760-e0f6-48ee-98c3-a59c3b827b09&pf_rd_r=XAZNFACE3GDMCRF536KD&pd_rd_wg=ZS9HL&pd_rd_r=56cae41d-ac20-437a-a0a6-482a0f8b2f46&pd_rd_i=6550471419",
      img:"https://images-na.ssl-images-amazon.com/images/I/61js3gJ40YL.jpg",
      title: "Em mim basta!: O poder de pular fora quando nada mais faz sentido",
      price: 49.99,
      break: 2,
      rating: 4,
      discount: 25,
      endpoint: "help/12"
    },
  ]

  export const booksAli = [
    {
      id:1,
      link: "https://www.amazon.com.br/Below-Zero-English-Ali-Hazelwood-ebook/dp/B09M371WGW/ref=sr_1_16?qid=1663150674&refinements=p_lbr_books_authors_browse-bin%3AAli+Hazelwood&rnid=8097978011&s=books&sr=1-16",
      img:"https://m.media-amazon.com/images/P/B09M371WGW.01._SCLZZZZZZZ_SX500_.jpg",
      title: "Below Zero",
      price: 19.99,
      break: 2,
      rating: 4,
      discount: 25,
      endpoint: "ali/1"
    },
    {
      id:2,
      link: "https://www.amazon.com.br/hip%C3%B3tese-amor-Sucesso-TikTok/dp/6555653302/ref=sr_1_1?qid=1663150674&refinements=p_lbr_books_authors_browse-bin%3AAli+Hazelwood&rnid=8097978011&s=books&sr=1-1",
      img:"https://images-na.ssl-images-amazon.com/images/I/712x9dUpZFL.jpg",
      title: "A hipótese do amor",
      price: 49.99,
      break: 2,
      rating: 4,
      discount: 20,
      endpoint: "ali/2"
    },
    {
      id:3,
      link: "https://www.amazon.com.br/Love-Hypothesis-Ali-Hazelwood/dp/0593336828/ref=sr_1_3?qid=1663150674&refinements=p_lbr_books_authors_browse-bin%3AAli+Hazelwood&rnid=8097978011&s=books&sr=1-3&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
      img:"https://images-na.ssl-images-amazon.com/images/I/81kGXZeqYLL.jpg",
      title: "The Love Hypothesis",
      price: 99.99,
      break: 4,
      rating: 5,
      discount: 25,
      endpoint: "ali/3"
    },
    {
      id:4,
      link: "https://www.amazon.com.br/Love-Brain-bestselling-author-Hypothesis/dp/1408725770/ref=sr_1_4?qid=1663150674&refinements=p_lbr_books_authors_browse-bin%3AAli+Hazelwood&rnid=8097978011&s=books&sr=1-4",
      img:"https://images-na.ssl-images-amazon.com/images/I/71fL2RlDuAL.jpg",
      title: "Love on the Brain",
      price: 69.99,
      break: 3,
      rating: 5,
      discount: 20,
      endpoint: "ali/4"
    },
    {
      id:5,
      link: "https://www.amazon.com.br/Loathe-Love-You-Ali-Hazelwood/dp/0593437802/ref=sr_1_5?qid=1663150674&refinements=p_lbr_books_authors_browse-bin%3AAli+Hazelwood&rnid=8097978011&s=books&sr=1-5",
      img:"https://images-na.ssl-images-amazon.com/images/I/81giIqEbK+L.jpg",
      title: "Loathe to Love You",
      price: 109.99,
      break: 4,
      rating: 5,
      discount: 15,
      endpoint: "ali/5"
    },
    {
      id:6,
      link: "https://www.amazon.com.br/Die-theoretische-Unwahrscheinlichkeit-von-Liebe/dp/3352009716/ref=sr_1_8?qid=1663150674&refinements=p_lbr_books_authors_browse-bin%3AAli+Hazelwood&rnid=8097978011&s=books&sr=1-8&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
      img:"https://images-na.ssl-images-amazon.com/images/I/71XASzf-laL.jpg",
      title: "Die theoretische Unwahrscheinlichkeit von Liebe (Original)",
      price: 309.99,
      break: 5,
      rating: 5,
      discount: 25,
      endpoint: "ali/6"
    }
  ]

  export const booksKel = [
    {
      id:1,
      link: "https://www.amazon.com.br/Minha-pequena-mulher-Kel-Costa/dp/6586154057/ref=sr_1_1?qid=1663151563&refinements=p_lbr_books_authors_browse-bin%3AKel+Costa&rnid=8097978011&s=books&sr=1-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
      img:"https://images-na.ssl-images-amazon.com/images/I/91XwowRyV7L.jpg",
      title: "Minha pequena mulher",
      price: 79.99,
      break: 3,
      rating: 5,
      discount: 25,
      endpoint: "kel/1"
    },
    {
      id:2,
      link: "https://www.amazon.com.br/SS-Pleasury-Kel-Costa/dp/6586154111/ref=sr_1_2?qid=1663151563&refinements=p_lbr_books_authors_browse-bin%3AKel+Costa&rnid=8097978011&s=books&sr=1-2&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
      img:"https://images-na.ssl-images-amazon.com/images/I/71jIaTN-ACL.jpg",
      title: "SS Pleasury",
      price: 89.99,
      break: 3,
      rating: 5,
      discount: 20,
      endpoint: "kel/2"
    },
    {
      id:3,
      link: "https://www.amazon.com.br/Love-Hypothesis-Ali-Hazelwood/dp/0593336828/ref=sr_1_3?qid=1663150674&refinements=p_lbr_books_authors_browse-bin%3AAli+Hazelwood&rnid=8097978011&s=books&sr=1-3&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
      img:"https://images-na.ssl-images-amazon.com/images/I/61O7NSnSe-L.jpg",
      title: "Perfeito pra mim",
      price: 79.99,
      break: 3,
      rating: 4,
      discount: 25,
      endpoint: "kel/3"
    },
    {
      id:4,
      link: "https://www.amazon.com.br/Ru%C3%ADnas-Gelo-confronto-final-3/dp/8568925472/ref=sr_1_4?qid=1663151563&refinements=p_lbr_books_authors_browse-bin%3AKel+Costa&rnid=8097978011&s=books&sr=1-4&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
      img:"https://images-na.ssl-images-amazon.com/images/I/71jwaHh-GAL.jpg",
      title: "Ruínas de Gelo: O confronto final: 3",
      price: 79.99,
      break: 3,
      rating: 4,
      discount: 20,
      endpoint: "kel/4"
    },
    {
      id:5,
      link: "https://www.amazon.com.br/Procura-se-uma-bab%C3%A1-Kel-Costa/dp/6586154278/ref=sr_1_5?qid=1663151563&refinements=p_lbr_books_authors_browse-bin%3AKel+Costa&rnid=8097978011&s=books&sr=1-5&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
      img:"https://images-na.ssl-images-amazon.com/images/I/61GbMkxpBgL.jpg",
      title: "Procura-se uma babá",
      price: 79.99,
      break: 3,
      rating: 4,
      discount: 15,
      endpoint: "kel/5"
    },
    {
      id:6,
      link: "https://www.amazon.com.br/N%C3%A3o-foi-amor-primeira-vista/dp/6586154170/ref=sr_1_6?qid=1663151563&refinements=p_lbr_books_authors_browse-bin%3AKel+Costa&rnid=8097978011&s=books&sr=1-6&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
      img:"https://images-na.ssl-images-amazon.com/images/I/71Un90LhGQL.jpg",
      title: "Não foi amor à primeira vista",
      price: 69.99,
      break: 3,
      rating: 4,
      discount: 25,
      endpoint: "kel/6"
    }
  ]
  export const booksEmma = [
    {
      id:1,
      link: "9https://www.amazon.com.br/Encontro-Muito-Ousado-Emma-Wildes/dp/989657717X/ref=sr_1_1?qid=1663151916&refinements=p_lbr_books_authors_browse-bin%3AEmma+Wildes&rnid=8097978011&s=books&sr=1-1&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
      img:"https://images-na.ssl-images-amazon.com/images/I/81tIubWGGAL.jpg",
      title: "Um Encontro Muito Ousado",
      price: 599.99,
      break: 5,
      rating: 5,
      discount: 10,
      endpoint: "emma/1"
    },
    {
      id:2,
      link: "https://www.amazon.com.br/Tentadora-Cair-Noite-Emma-Wildes/dp/9896576394/ref=sr_1_2?qid=1663151916&refinements=p_lbr_books_authors_browse-bin%3AEmma+Wildes&rnid=8097978011&s=books&sr=1-2&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
      img:"https://images-na.ssl-images-amazon.com/images/I/816lXpjJhnL.jpg",
      title: "Tentadora ao Cair da Noite ",
      price: 589.99,
      break: 5,
      rating: 5,
      discount: 15,
      endpoint: "emma/2"
    },
    {
      id:3,
      link: "https://www.amazon.com.br/Sedu%C3%A7%C3%A3o-Terras-Altas-Emma-Wildes/dp/9896575827/ref=sr_1_3?qid=1663151916&refinements=p_lbr_books_authors_browse-bin%3AEmma+Wildes&rnid=8097978011&s=books&sr=1-3&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
      img:"https://images-na.ssl-images-amazon.com/images/I/91zbj+1w0OL.jpg",
      title: "Sedução nas Terras Altas",
      price: 519.99,
      break: 5,
      rating: 4,
      discount: 25,
      endpoint: "emma/3"
    },
    {
      id:4,
      link: "https://www.amazon.com.br/Rumor-Muito-Inconveniente-Whisper-Scandal/dp/9896575339/ref=sr_1_4?qid=1663151916&refinements=p_lbr_books_authors_browse-bin%3AEmma+Wildes&rnid=8097978011&s=books&sr=1-4&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
      img:"https://images-na.ssl-images-amazon.com/images/I/81v7yvapk2L.jpg",
      title: "Um Rumor Muito Inconveniente Whisper of Scandal",
      price: 599.99,
      break: 5,
      rating: 5,
      discount: 20,
      endpoint: "emma/4"
    },
    {
      id:5,
      link: "https://www.amazon.com.br/Um-Amor-Luar-Whisper-Scandal/dp/9896574952/ref=sr_1_5?qid=1663151916&refinements=p_lbr_books_authors_browse-bin%3AEmma+Wildes&rnid=8097978011&s=books&sr=1-5&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
      img:"https://images-na.ssl-images-amazon.com/images/I/91O0FhJvzKL.jpg",
      title: "Um Amor ao Luar - Whisper of Scandal",
      price: 559.99,
      break: 5,
      rating: 4,
      discount: 15,
      endpoint: "emma/5"
    },
    {
      id:6,
      link: "https://www.amazon.com.br/Um-Homem-Imoral-Emma-Wildes/dp/9896573476/ref=sr_1_7?qid=1663151916&refinements=p_lbr_books_authors_browse-bin%3AEmma+Wildes&rnid=8097978011&s=books&sr=1-7",
      img:"https://images-na.ssl-images-amazon.com/images/I/41t5MTUFs4L.jpg",
      title: "Um Homem Imoral",
      price: 299.99,
      break: 5,
      rating: 5,
      discount: 25,
      endpoint: "emma/6"
    }
  ]

  export const booksLari = [
    {
      id:1,
      link: "https://www.amazon.com.br/Box-Trilogia-Thief-Larissa-Chagas-ebook/dp/B0BDXPZBNT/ref=sr_1_1?qid=1663152326&refinements=p_lbr_books_authors_browse-bin%3ALarissa+Chagas&rnid=8097978011&s=books&sr=1-1",
      img:"https://m.media-amazon.com/images/P/B0BDXPZBNT.01._SCLZZZZZZZ_SX500_.jpg",
      title: "Box - Trilogia Thief",
      price: 9.99,
      break: 4,
      rating: 5,
      discount: 20,
      endpoint: "lari/1"
    },
    {
      id:2,
      link: "https://www.amazon.com.br/Beat-Your-Heart-conto-ebook/dp/B0B3TZSB6T/ref=sr_1_2?qid=1663152326&refinements=p_lbr_books_authors_browse-bin%3ALarissa+Chagas&rnid=8097978011&s=books&sr=1-2",
      img:"https://m.media-amazon.com/images/I/41jE5NdMLpL.jpg",
      title: "The Beat of Your Heart ",
      price: 59.99,
      break: 3,
      rating: 4,
      discount: 15,
      endpoint: "lari/2"
    },
    {
      id:3,
      link: "https://www.amazon.com.br/Dont-Break-Heart-Larissa-Chagas-ebook/dp/B09PJ21WNY/ref=sr_1_3?qid=1663152326&refinements=p_lbr_books_authors_browse-bin%3ALarissa+Chagas&rnid=8097978011&s=books&sr=1-3",
      img:"https://m.media-amazon.com/images/I/41R6TECA4KL.jpg",
      title: "Don't Break My Heart",
      price: 29.99,
      break: 2,
      rating: 4,
      discount: 25,
      endpoint: "lari/3"
    },
    {
      id:4,
      link: "https://www.amazon.com.br/plano-muito-elaborado-Trilogia-Thief-ebook/dp/B09PGY8RBT/ref=sr_1_4?qid=1663152326&refinements=p_lbr_books_authors_browse-bin%3ALarissa+Chagas&rnid=8097978011&s=books&sr=1-4",
      img:"https://m.media-amazon.com/images/I/41Tkt6G-PAL.jpg",
      title: "Um plano muito bem elaborado",
      price: 49.99,
      break: 2,
      rating: 5,
      discount: 20,
      endpoint: "lari/4"
    },
    {
      id:5,
      link: "https://www.amazon.com.br/Bem-vindo-fabulosa-Vegas-Trilogia-Thief-ebook/dp/B09TPQ61KB/ref=sr_1_5?qid=1663152326&refinements=p_lbr_books_authors_browse-bin%3ALarissa+Chagas&rnid=8097978011&s=books&sr=1-5",
      img:"https://m.media-amazon.com/images/I/41FEtOEAtSL.jpg",
      title: "Bem-vindo à fabulosa Las Vegas",
      price: 59.99,
      break: 3,
      rating: 4,
      discount: 15,
      endpoint: "lari/5"
    },
    {
      id:6,
      link: "https://www.amazon.com.br/Justificando-meios-Trilogia-Thief-Livro-ebook/dp/B09Y64ZF4C/ref=sr_1_6?qid=1663152326&refinements=p_lbr_books_authors_browse-bin%3ALarissa+Chagas&rnid=8097978011&s=books&sr=1-6",
      img:"https://m.media-amazon.com/images/I/41okJflu0SL.jpg",
      title: "Justificando os meios",
      price: 29.99,
      break: 2,
      rating: 5,
      discount: 25,
      endpoint: "lari/6"
    }
  ]

  export const booksKech = [
    {
      id:1,
      link: "https://www.amazon.com.br/Quando-Magia-Acontece-LIVRO-%C3%9ANICO-ebook/dp/B0BD8T3JKB/ref=sr_1_1?qid=1663167521&refinements=p_lbr_books_authors_browse-bin%3AT+M+Kechichian&rnid=8097978011&s=books&sr=1-1",
      img:"https://m.media-amazon.com/images/P/B0BD8T3JKB.01._SCLZZZZZZZ_SX500_.jpg",
      title: "Quando a Magia Acontece: Um CEO para mim",
      price: 39.99,
      break: 2,
      rating: 5,
      discount: 20,
      endpoint: "kech/1"
    },
    {
      id:2,
      link: "https://www.amazon.com.br/Influencer-que-Conquistou-CEO-LIVRO-ebook/dp/B09V72Z5FY/ref=sr_1_2?qid=1663167521&refinements=p_lbr_books_authors_browse-bin%3AT+M+Kechichian&rnid=8097978011&s=books&sr=1-2",
      img:"https://m.media-amazon.com/images/I/51oQnXpQ2XL.jpg",
      title: "A Influencer que Conquistou o CEO ",
      price: 29.99,
      break: 2,
      rating: 4,
      discount: 15,
      endpoint: "kech/2"
    },
    {
      id:3,
      link: "https://www.amazon.com.br/DESTROYER-LIVRO-%C3%9ANICO-T-KECHICHIAN-ebook/dp/B094P1LF74/ref=sr_1_3?qid=1663167521&refinements=p_lbr_books_authors_browse-bin%3AT+M+Kechichian&rnid=8097978011&s=books&sr=1-3",
      img:"https://m.media-amazon.com/images/I/516zAEsyGoS.jpg",
      title: "DESTROYER",
      price: 39.99,
      break: 2,
      rating: 4,
      discount: 25,
      endpoint: "kech/3"
    },
    {
      id:4,
      link: "https://www.amazon.com.br/Misteriosa-Ess%C3%AAncia-Enigmas-Livro-1-ebook/dp/B07F11P3P9/ref=sr_1_4?qid=1663167521&refinements=p_lbr_books_authors_browse-bin%3AT+M+Kechichian&rnid=8097978011&s=books&sr=1-4",
      img:"https://m.media-amazon.com/images/I/41aU5Zn5zPL.jpg",
      title: "Misteriosa Essência",
      price: 59.99,
      break: 3,
      rating: 5,
      discount: 20,
      endpoint: "kech/4"
    },
    {
      id:5,
      link: "https://www.amazon.com.br/Melhor-Amigo-Clich%C3%AA-Amamos-Livro-ebook/dp/B07ZVXFCL5/ref=sr_1_5?qid=1663167521&refinements=p_lbr_books_authors_browse-bin%3AT+M+Kechichian&rnid=8097978011&s=books&sr=1-5",
      img:"https://m.media-amazon.com/images/I/51shoChHTpL.jpg",
      title: "Meu Melhor Amigo",
      price: 49.99,
      break: 2,
      rating: 4,
      discount: 10,
      endpoint: "kech/5"
    },
    {
      id:6,
      link: "https://www.amazon.com.br/Meu-Irresist%C3%ADvel-Clich%C3%AA-Amamos-Livro-ebook/dp/B087QGSHZY/ref=sr_1_6?qid=1663167521&refinements=p_lbr_books_authors_browse-bin%3AT+M+Kechichian&rnid=8097978011&s=books&sr=1-6",
      img:"https://m.media-amazon.com/images/I/41Bo+6lsdAL.jpg",
      title: "Meu CEO Irresistível",
      price: 39.99,
      break: 2,
      rating: 5,
      discount: 25,
      endpoint: "kech/6"
    }
  ]




