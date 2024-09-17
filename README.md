
<h1> YOUTUBE CLONE </h1>

"Developing a youtube clone project"

# Kütüphaneler

- react-icons
- react-router-dom
- tailwind (kurulumu kendi sayfasında)
- axios
- millify

# Yapılacaklar

- `SideNav.jsx` bileşeninde kategorileri listele,
- - Seçilen kategori bilgisini bütün bileşenlerin erişebilmesi için Context yapısında tut...

- Seçilen Kategori state'i her değiştiğinde ilgili kategoriye ait youtube video verisini çek,
- Bu veriyi `Feed.jsx` ' kullan ve herbir video objesi için ekrana `VideoCard.jsx` bas...

- Videolardan birine tıklandığında kullanıyı o videonun id'sini parametre olarak içeren bir linke yöndlendir...
- - `VideoDetail.jsx` sayfasında url'den parametreyi al,
- - parametre ile beraber api'ye video detayları için istek at,
- - api'den gelen veriyi ekrana bas...

- Eski Yönlendirdiğimiz Link
- - parametre yöntemiyle ekledik:
    /results/react.js
- - Bu şekilde yönlendirince özel karakterlerde sorun oluyor

- Bu Yüzden Url parametresi yöntemiyle yönlendirme yapacağız :
- - arama terimi yöntemiyle:
    /results/?search_query=react.js


<h2> Used technologies </h2>

REACT

<h2> Screen Gif </h2>

![](ekran.gif)