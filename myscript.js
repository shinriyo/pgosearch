// URLに飛ぶ
function moveUrl(url) {
    chrome.tabs.executeScript(null, {
        "code": "window.location.href = '" + url + "';"
    });
}

(function(loadedListener) {　
    var doc, readyState;

    　
    doc = document;　
    readyState = doc.readyState;

    　
    if (readyState === 'complete' || readyState === 'interactive') {　　 loadedListener();　 } else {　　 doc.addEventListener("DOMContentLoaded", loadedListener, false);　 }
})(function() {
    // popup.html.
    var dev_movedebug_btn = document.getElementById('pgosearch');
    if (dev_movedebug_btn != null) {
        // 処理を入れておく
        dev_movedebug_btn.addEventListener('click', function() {
            moveUrl("https://pmap.kuku.lu/");
        });
    }
});


$(function() {
    // URLを判定
    var href_str = window.location.href;
    var res = href_str.match(/pmap.kuku.lu/);
    // 違ったらしない
    if (res == null) return;

    // アフィリエイト
    var amazon = "<div>ポケモンGO ポケモンゴー 攻略 ゲット - WiLLBee CLIPON (黒) Pokemon Go スマホ ハンド バンド ホルダー リング - Xperia iPhone 6S 6 Plus<br /><a  href=\"http://www.amazon.co.jp/gp/product/B01IIGUB4M/ref=as_li_tf_il?ie=UTF8&camp=247&creative=1211&creativeASIN=B01IIGUB4M&linkCode=as2&tag=noctushinrsdi-22\"><img border=\"0\" src=\"http://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01IIGUB4M&Format=_SL110_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=noctushinrsdi-22\" ></a><img src=\"http://ir-jp.amazon-adsystem.com/e/ir?t=noctushinrsdi-22&l=as2&o=9&a=B01IIGUB4M\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" /></div>";
    // 警告をそのまま書き換え
    $('.home-sidebar-warning').replaceWith(amazon);

    // ボタン生成
    $('<button/>', {
        text: 'ID選ぶぜ',
        id: 'user_btn',
        click: function() {
            var num = document.getElementById('mynum');
            changeUser(num.value);
        }
    }).appendTo(".center-align-text");

    var pokemon_arr = [
        "Bulbasaur",
        "Ivysaur",
        "Venusaur",
        "Charmander",
        "Charmeleon",
        "Charizard",
        "Squirtle",
        "Wartortle",
        "Blastoise",
        "Caterpie",
        "Metapod",
        "Butterfree",
        "Weedle",
        "Kakuna",
        "Beedrill",
        "Pidgey",
        "Pidgeotto",
        "Pidgeot",
        "Rattata",
        "Raticate",
        "Spearow",
        "Fearow",
        "Ekans",
        "Arbok",
        "Pikachu",
        "Raichu",
        "Sandshrew",
        "Sandslash",
        "Nidoran♀",
        "Nidorina",
        "Nidoqueen",
        "Nidoran♂",
        "Nidorino",
        "Nidoking",
        "Clefairy",
        "Clefable",
        "Vulpix",
        "Ninetales",
        "Jigglypuff",
        "Wigglytuff",
        "Zubat",
        "Golbat",
        "Oddish",
        "Gloom",
        "Vileplume",
        "Paras",
        "Parasect",
        "Venonat",
        "Venomoth",
        "Diglett",
        "Dugtrio",
        "Meowth",
        "Persian",
        "Psyduck",
        "Golduck",
        "Mankey",
        "Primeape",
        "Growlithe",
        "Arcanine",
        "Poliwag",
        "Poliwhirl",
        "Poliwrath",
        "Abra",
        "Kadabra",
        "Alakazam",
        "Machop",
        "Machoke",
        "Machamp",
        "Bellsprout",
        "Weepinbell",
        "Victreebel",
        "Tentacool",
        "Tentacruel",
        "Geodude",
        "Graveler",
        "Golem",
        "Ponyta",
        "Rapidash",
        "Slowpoke",
        "Slowbro",
        "Magnemite",
        "Magneton",
        "Farfetch'd",
        "Doduo",
        "Dodrio",
        "Seel",
        "Dewgong",
        "Grimer",
        "Muk",
        "Shellder",
        "Cloyster",
        "Gastly",
        "Haunter",
        "Gengar",
        "Onix",
        "Drowzee",
        "Hypno",
        "Krabby",
        "Kingler",
        "Voltorb",
        "Electrode",
        "Exeggcute",
        "Exeggutor",
        "Cubone",
        "Marowak",
        "Hitmonlee",
        "Hitmonchan",
        "Lickitung",
        "Koffing",
        "Weezing",
        "Rhyhorn",
        "Rhydon",
        "Chansey",
        "Tangela",
        "Kangaskhan",
        "Horsea",
        "Seadra",
        "Goldeen",
        "Seaking",
        "Staryu",
        "Starmie",
        "Mr. Mime",
        "Scyther",
        "Jynx",
        "Electabuzz",
        "Magmar",
        "Pinsir",
        "Tauros",
        "Magikarp",
        "Gyarados",
        "Lapras",
        "Ditto",
        "Eevee",
        "Vaporeon",
        "Jolteon",
        "Flareon",
        "Porygon",
        "Omanyte",
        "Omastar",
        "Kabuto",
        "Kabutops",
        "Aerodactyl",
        "Snorlax",
        "Articuno",
        "Zapdos",
        "Moltres",
        "Dratini",
        "Dragonair",
        "Dragonite",
        "Mewtwo",
        "Mew"
    ];

    var timerID = 0;

    var stopTimer = function() {
        clearInterval(timerID);
    };

    var timer = function() {
        $.each(pokemon_arr, function(index, value) {
            var item = $('#area_configwindow_list_' + (index + 1));
            var en_name = pokemon_arr[index];
            // textクラスを書き換え
            // item.find("img").text(pokemon_arr[index]);
            var poke_html = item.html()
            if (typeof poke_html === "undefined") {
                return;
            }

            // console.log(poke_html);
            var img_txt = item.find("img").prop('outerHTML');
            item.html(img_txt + " " + en_name);
            stopTimer();
        });
    };

    var startTimer = function() {
        timerID = setInterval(timer /*定期的に呼び出す関数名*/ , 1000 /*呼び出す間隔*/ );
    };

    startTimer();

});