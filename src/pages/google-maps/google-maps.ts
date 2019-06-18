import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavController } from "ionic-angular";
import { RuneStoneInfoPage } from "../rune-stone-info/rune-stone-info";

declare var google: any;

@Component({
  selector: "page-google-maps",
  templateUrl: "google-maps.html"
})
export class GoogleMapsPage {
  //reference to the html div
  @ViewChild("map") mapRef: ElementRef;

  map: any;

  constructor(private navCtrl: NavController) {}

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    //Array of photos to speed up the process of loading them in the application insted of using flickr api
    var locations = [
      [
        "Fredriksdal",
        58.9644444,
        17.4625,
        "Gnupa  lät resa denna sten efter Gudlev, sin broder. Han ändades österut i krigstjänst",
        [
          "assets/audio/fornnordiska/Nr4 Fredriksdal(fo).m4a",
          " assets/audio/svenska/Nr4 Fredriksdal(sv).m4a"
        ],
        [
          "https://c1.staticflickr.com/5/4451/37742688396_843c2d50a1_k.jpg",
          "https://c1.staticflickr.com/5/4493/37742696476_8d6efe2f6c_k.jpg",
          "https://c1.staticflickr.com/5/4457/37533098380_1bb128a72d_k.jpg",
          "https://c1.staticflickr.com/5/4448/37533099410_ec3cf5365a_k.jpg"
        ]
      ],
      [
        "Kristinedal",
        58.97,
        17.425555555555558,
        "Holmsten och Vigunn de läto resa stenen efter hennes son, och Vihjälm efter Ingefast.",
        [
          "assets/audio/fornnordiska/Nr5 Kristinedahl(fo).m4a",
          " assets/audio/svenska/Nr5 Kristinedahl(sv).m4a"
        ],
        [
          "https://c1.staticflickr.com/5/4500/37759580412_ceba6bd2d2_k.jpg",
          "https://c1.staticflickr.com/5/4500/37791296701_4e1e8d7c10_k.jpg"
        ]
      ],
      [
        "Norastenen",
        58.9661111,
        17.541111111111114,
        "Ingemar och Ärnvi lät resa denna sten och göra bro efter Stenkil, sin son. Gud hjälpe hans ande. (Hela texten är känd från historisk nedteckning)",
        [
          "assets/audio/fornnordiska/Nr11 Nora(fo).m4a",
          " assets/audio/svenska/Nr11 Nora(sv).m4a"
        ],
        [
          "https://c1.staticflickr.com/5/4494/37791292541_020cb7ca36_k.jpg",
          "https://c1.staticflickr.com/5/4473/37791293171_492f736616_k.jpg"
        ]
      ],
      [
        "Tjuvstigen",
        58.9777778,
        17.54527777777778,
        "Lät Ingeger resa ännu en sten efter sina söner, gjorde dem synliga. Gud hjälpe deras ande. Torer högg",
        [
          "assets/audio/fornnordiska/Nr1 Tjuvstigen(fo).m4a",
          " assets/audio/svenska/Nr1 Tjuvstigen(sv).m4a"
        ],
        [
          "https://c1.staticflickr.com/5/4466/37121267813_8aab1a0405_k.jpg",
          "https://c1.staticflickr.com/5/4498/37121271613_cb368b2ee1_k.jpg"
        ]
      ],
      [
        "Långbro",
        58.9286111,
        17.477777777777778,
        "Vigöt och Ingjald och Assur, de reste denna sten efter Sven, sin fader.",
        [
          "assets/audio/fornnordiska/Nr8 LÜngbro(fo).m4a",
          " assets/audio/svenska/Nr8 LÜngbro(sv).m4a"
        ],
        [
          "https://c1.staticflickr.com/5/4497/23938393918_13674c2c1a_k.jpg",
          "https://c1.staticflickr.com/5/4472/23938394718_1933f1d629_k.jpg"
        ]
      ],
      [
        "Skåängstenen",
        58.9638889,
        17.43138888888889,
        "Harje, Ljug eller Härljug(?). Skamhals och Olöv de lät göra dessa märken  efter Sven, sin fader. Gud hjälpe hans själ.",
        [
          "assets/audio/fornnordiska/Nr3 SkÜÑng(fo).m4a",
          " assets/audio/svenska/Nr3 SkÜÑng(sv).m4a"
        ],
        [
          "https://c1.staticflickr.com/5/4479/23938390588_2ce9cf559a_k.jpg",
          "https://c1.staticflickr.com/5/4476/23938391168_85c3b0f5fb_k.jpg"
        ]
      ],
      [
        "Bergastenen",
        58.9363889,
        17.498611111111114,
        "Finna, Salgäst.",
        [
          "assets/audio/fornnordiska/Nr13 Berga(fo).m4a",
          " assets/audio/svenska/Nr13 Berga(sv).m4a"
        ],
        [
          "https://c1.staticflickr.com/5/4459/37791301761_c1195fb0a3_k.jpg",
          "https://c1.staticflickr.com/5/4514/37791302101_929b7da1da_z.jpg",
          "https://c1.staticflickr.com/5/4491/37791302741_61fcb9b174_k.jpg",
          "https://c1.staticflickr.com/5/4489/37791267451_9b23cbda04_b.jpg",
          "https://c1.staticflickr.com/5/4459/23938367578_5bac82316a_b.jpg",
          "https://c1.staticflickr.com/5/4497/23938367728_aba6a49722_b.jpg",
          "https://c1.staticflickr.com/5/4467/37742672376_3399e8639f_b.jpg"
        ]
      ],
      [
        "Västerljungkyrka",
        58.9219444,
        17.448888888888888,
        "Honäv reste efter Germar, sin fader. Han är ändad i Tjust. Skamhals högg dessa runor.",
        [
          "assets/audio/fornnordiska/Nr12 VÑsterljungs kyrka(fo).m4a",
          " assets/audio/svenska/Nr12 VÑsterljungs kyrka(sv).m4a"
        ],
        [
          "https://c1.staticflickr.com/5/4462/37742688696_e5aa11b321_k.jpg",
          "https://c1.staticflickr.com/5/4456/37533081170_8d9f4f449a_k.jpg",
          "https://c1.staticflickr.com/5/4493/37742689606_cf8d5ccb4b_k.jpg",
          "https://c1.staticflickr.com/5/4512/37533081640_72a5153240_k.jpg",
          "https://c1.staticflickr.com/5/4511/37121262613_5e1083221e_k.jpg",
          "https://c1.staticflickr.com/5/4501/23938385388_94127b9a14_k.jpg",
          "https://c1.staticflickr.com/5/4459/23938385198_994fb448f5_k.jpg"
        ]
      ],
      [
        "Björke",
        58.9241667,
        17.459166666666665,
        "Tatte högg efter sin fader Skacke (Skage), det stora minnesmärket man alltid skall omtala",
        [
          "assets/audio/fornnordiska/Nr6 Bjîrke(fo).m4a",
          " assets/audio/svenska/Nr6 Bjîrke(sv).m4a"
        ],
        [
          "https://c1.staticflickr.com/5/4445/37081803394_e71934df77_b.jpg",
          "https://c1.staticflickr.com/5/4487/37791267051_1a4a6205cb_b.jpg",
          "https://c1.staticflickr.com/5/4509/37742671716_78d25e20dd_b.jpg"
        ]
      ],
      [
        "Erikslund Gillberga",
        58.9161111,
        17.450833333333332,
        "Sigvalde reste ... efter Torkel(?), sin bryte.",
        [
          "assets/audio/fornnordiska/Nr7 Gillberga(fo).m4a",
          " assets/audio/svenska/Nr7 Gillberga(sv).m4a"
        ],
        [
          "https://c1.staticflickr.com/5/4486/37759581212_2f7e410d6b_k.jpg",
          "https://c1.staticflickr.com/5/4501/37759581452_193ebc175d_k.jpg",
          "https://c1.staticflickr.com/5/4471/37791300561_25991e65c0_k.jpg",
          "https://c1.staticflickr.com/5/4490/37791301061_dcb3d337f8_k.jpg",
          "https://c1.staticflickr.com/5/4454/37791300931_b7ca920d2c_k.jpg"
        ]
      ],
      [
        "Ytterstene",
        58.916297,
        17.492098,
        "Faste och Ospak läto resa stenar efter Sigvat sin broder",
        [
          "assets/audio/fornnordiska/Nr9 Ytterstene(fo).m4a",
          " assets/audio/svenska/Nr9 Ytterstene(sv).m4a"
        ],
        [
          "https://c1.staticflickr.com/5/4492/37121261153_198456e8cc_k.jpg",
          "https://c1.staticflickr.com/5/4474/37533080240_0b5922e5b2_k.jpg"
        ]
      ]
    ];

    //Set up the map with an initial marker in focus
    const location = new google.maps.LatLng(58.9219444, 17.448888888888888);
    var marker, i;
    var options = {
      center: location,
      zoom: 10
    };
    var map = new google.maps.Map(this.mapRef.nativeElement, options);
    var infowindow = new google.maps.InfoWindow();
    var classRef = this;

    //loop through the photos array adding lat long
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      //adding markers with images
      google.maps.event.addListener(
        marker,
        "click",
        (function(marker, i) {
          return function() {
            infowindow.setContent(
              "<div class='runeTitle'>" +
                locations[i][0] +
                "</div>" +
                "<div>Läs mer</div> <img src='" +
                locations[i][5][0] +
                "' id='rune" +
                i +
                "'>"
            );
            infowindow.open(map, marker);

            var references = {
              name: locations[i][0],
              img: locations[i][5],
              text: locations[i][3],
              audio: locations[i][4]
            };

            var currId = document.getElementById("rune" + i);
            console.log(currId);
            currId.addEventListener("click", function() {
              classRef.navCtrl.push(RuneStoneInfoPage, references);
            });
          };
        })(marker, i)
      );
    }
  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    });
  }
}
