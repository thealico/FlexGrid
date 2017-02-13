# Flexbox Grid
Bu grid modeli 12 sütun üzerine [flexbox](http://www.w3schools.com/css/css3_flexbox.asp) tekniği ile inşa edilmiştir. Css üreticisi olarak Sass, görev yöneticisi olarakta Gulp tercih edilmiştir. Media değer aralığı seçenekleri aşağıda görülen tablodaki gibidir.

Bu listede genel kullanıma göre **ms** adlı beşinci bir ufak aralık görmektesiniz. Bu aralık mobilin yatay ve dikey kullanımına göre farklı özelleştirebilme ihtiyacından doğmuştur. Bunu tercih etmeseniz [grid.scss](https://github.com/thealico/flexboxgrid/blob/master/src/style/grid.scss) dosyasından ms etiketiyle dönen değerleri disable etmeniz yeterli olacaktır.


| Media Değerleri      | MS <br> ( 376 > )  | XS <br> ( 568 > ) | SM <br> ( 768 > )  |   MD <br> ( 1024 > )  |  LG <br> ( 1280 > )  |
| ---                  | ---                | ---               | ---                |  ---                  | ---                  |
| Class Prefix         | -ms                | -xs               |  -sm               |  -md                  | -lg                 |
| Sass Media Değişken  |  $gl-ms            |  $gl-xs           |  $gl-sm            |  $gl-md               | $gl-lg               |


Satırlar ve sütunların class etiketleri  Bootstrap aşina olduğumuz şekide  **row** ve **col** olarak atandı. Col (col-1 > col 12) ve row (row-1 > row-12) kullanılıyor. Media aralığına göre formatlamak içinde yine media prefix (col-xs- ) ekleriyle birlikte yazıyoruz.


| Etiket    | Sütun Aralıkları    | Media Aralıkları      |
| ---       | ---                 |---                    |
| row       |  row-1 > row-12     | row-xs-1  > row-md-12  |
| col       |  col-1 > col-12     | col-xs-1  > col-md-12  |

##Row

Flexbox Grid lerde  önceki nesil metodlara göre ayrışan en belirgin özellik col sütun sayısı değerini belirtmeye gereken kalmadan otomatik verebiliriz. Yada satırın (row) kendisine içinde sütünların (col) kaçarlı sütun olacağını söylebiliriz. Mesala aşağıdaki örnekte üç sütun var bu otomatik olarak üçe bölüneceği anlamına gelir. Eğer dört tane koyar isek dörde bölünecektir.

```
<div class="row">
  <div class="col">%33.33</div>
  <div class="col">%33.33</div>
  <div class="col">%33.33</div>
</div>
```

Buraya bakalım şimdi **row-2** verilmiş buna göre aşağıdaki kutular iki sütun genişliğinde dizilecektir. 

```
<div class="row-2">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
```
Olayı biraz daha detay katalım. Sütuna (row) bir şart atamayalım, ancak içerdeki sütunlardan sadece birine sütun sayısı verelim. Buna göre aşağıdaki örneğin çıktısında son sütun 6 genişliğinde olacaktır. Diğer sütunlar ise kalan alanı eşit şekilde paylaşacaktır.

```
<div class="row">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col-6"></div>
</div>
```

Şimdi aşağıdaki tablodan row'un aldığı referansları ve açıklamlarını bakabilirsiniz. Örnekleri görmek içinde değerlere verdiğim **linke** tıklamanız yeterli olacaktır.


| Değer               | Media Destek | Açıklama |
| ------------------- | ----- | ------------------------ |
| center              | Var   | Sütunları yatayada ortalar|
| start               | Var   | Sütünları sola yaslı sıralar |
| between             | Var   | Sütünları sol ve sağa doğru sonlandırarak sıralar |
| around              | Var   | Sütunları merkeden ortalayarak sağa ve sola doğru sıralar |
| end                 | Var   | Sütunları sağa doğru yaslıyarak sıralar|
| top                 | Var   | Sütunları üste yaslar |
| middle              | Var   | Sütünları dikeyde rtalar|
| bottom              | Var   | Sütunları alta yaslar|
| stretch             | Var   ||
| baseline            | Var   ||
| direct-x            | Var   | Sütünları yatay sıralar |
| direct-xr           | Var   | Sütünları yatayda ters sıralanır  |
| direct-y            | Var   | Sütünları dikey sıralar|
| direct-yr           | Var   | Sütunları dikey ter sıralanır |


##Col


| Değer               | Media | Açıklama |
| ------------------- | ----- | ------------------------ |
| col-top             | Var   | Sütunu üste konumlar |
| col-middle          | Var   | Sütunu dikeyde ortaya konumlar |
| col-bottom          | Var   | Sütunu alta konumlanır |
| col-first           | Var   | Sütunu sol başa konumlar |
| col-last            | Var   | Sütunu sağ sona konumlar |
| col-ns              | Yok   | Sütunun padding boşluklarını sıfırlar |








