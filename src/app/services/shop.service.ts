import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  produits = [
    {
        id: 1,
        titre : 'Pepe Jeans',
        description : 'Pepe Jeans baskets pour faire des courses',
        image : 'https://www.chaussures.fr/media/catalog/product/cache/image/650x650/0/0/0000207093546_2_.jpg',
        prix : 57,
        favoris: false
    },
    {
        id: 2,
        titre : 'Nike AirMax',
        description : 'Découvrez la Nike Air Max 270 sur Nike.com.',
        image : 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/chaussure-air-max-270-pour-62kcVV.jpg',
        prix : 150,
        favoris: false

    },
    {
        id: 3,
        titre : 'chaussure Gazelle',
        description : 'Adidas chaussure noir avec des bandes blanches',
        image : 'https://assets.adidas.com/images/w_600,f_auto,q_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Chaussure_Gazelle_Noir_BB5476_01_standard.jpg',
        prix : 45,
        favoris: false
        
    },
    {
        id: 4,
        titre : 'Veste AMG',
        description : 'coupe-vent AMG à capuche amovible vous impressionnera pour ses capacités techniques et son design irréprochable',
        image : 'https://www.mercedes-accessoires.fr/17855-large_default/veste-mercedes-amg-manche-longue-capuche-hommes.jpg',
        prix : 220,
        favoris: false
    },
    {
        id: 5,
        titre : 'THE NORTH FACE Impendor',
        description : 'La veste The North Face Impendor est dotée de la technologie FutureLight qui est une membrane qui vous assure un imperméabilité et une respirabilité .',
        image : 'https://www.montaz.com/cache/imgcatalogue/2020/800x800/208101.jpg',
        prix : 260,
        favoris: false
    },
    {
        id: 6,
        titre : 'Veste DEVRED',
        description : 'Veste DEVRED cuir de mouton',
        image : 'https://ventcouvert.com/1312-ph_large/blouson-cuir-homme-ref-bodie-vachette-plong.jpg',
        prix : 500,
        favoris: false
    },
    {
        id: 7,
        titre : 'SIMPLE FLAVOR',
        description : 'Jean Homme, Jean Biker, Jean Trous. Tissu: 85% Coton, 15% Polyester. Coupe: Slim Fit. Style: Droit, Straight. Taille: Mi-Haute.',
        image : 'https://www.cdiscount.com/pdt2/9/7/3/1/700x700/mp05216973/rw/jean-homme-coupe-droit-mi-haute-style-motard-avec.jpg',
        prix : 21,
        favoris: false
    },
    {
        id: 8,
        titre : 'Jeans : BONOBO',
        description : 'Voici un prêt à porter toujours à la mode et qui s’adapte en toute occasion, le Jeans homme Bonobo regular effet used bleu.',
        image : 'https://www.mencorner.com/media/produits/2635/img//jeans-homme-regular-effet-used-1224331-2_1140x1140.jpg',
        prix : 60,
        favoris: false
    },
    {
        id: 9,
        titre : 'Jeans SpringField',
        description : 'Jeans SpringField déchiré et de bonne qualité',
        image : 'https://www.cdiscount.com/pdt2/6/9/8/1/700x700/mp24536698/rw/pantalons-hommmes-style-de-mode-skinny-jeans-elega.jpg',
        prix : 30,
        favoris: false
    },
];

categories = [
    {
        nom : 'Jeans',
        image : 'https://media.gettyimages.com/photos/full-frame-shot-of-jeans-for-sale-at-market-stall-picture-id692948479?s=612x612',
    },
    {
      nom : 'vestes',
      image : 'https://www.outside.fr/wp-content/uploads/2020/04/Veste_2020-720x640.jpg',
  },
  {
    nom : 'chaussures',
    image : 'https://www.chaussures.fr/media/catalog/product/cache/image/650x650/0/0/0000207093546_2_.jpg',
  }
  ];

  favorisProduits = [];
  constructor() { }

  addFavoris(i: number) {
    if (this.produits[i]['favoris'] == false) {
        this.produits[i]['favoris'] = true;
        this.favorisProduits.push(this.produits[i]);
    }
    if (this.produits[i]['favoris'] == true) {
        return;
    }
      
  }
  removeFavoris(i: number) {
    const produitPasFavoris = this.favorisProduits[i];
    this.produits.forEach(element => {
        if (element.id == produitPasFavoris.id) {
            element.favoris = false;
        }
    });
    console.log(produitPasFavoris);

    const index = this.favorisProduits.indexOf(produitPasFavoris);
    console.log(index);
    
    this.favorisProduits.splice(index, 1);




    console.log(this.favorisProduits);
    
  }
  
  addFavorisOutput(st: string) {
      this.produits.forEach(element => {
          if (element.titre === st) {
              element.favoris = true;
              this.favorisProduits.push(element);
          }
      });
      
  }
  removeFavorisOutput(st: string) {
    this.produits.forEach(element => {
        if (element.titre === st) {
            element.favoris = false;
            this.favorisProduits.forEach(el => {
                if (el.titre == element.titre) {
                    const index = this.favorisProduits.indexOf(el);
                    this.favorisProduits.splice(index, 1);
                }
            });
        }
    });
    
  }

  
}
