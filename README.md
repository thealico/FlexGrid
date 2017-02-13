# Flexbox Grid
Bu grid modeli 12 sütun üzerine [flexbox](http://www.w3schools.com/css/css3_flexbox.asp) tekniği ile inşa edilmiştir. Css üreticisi olarak Sass, görev yöneticisi olarakta Gulp tercih edilmiştir. Media değer aralıkları aşağıdaki tabloda görüldüğü gibidir.

| Media Değerleri      | MS <br> ( 376 > )  | XS <br> ( 568 > ) | SM <br> ( 768 > )  |   MD <br> ( 1024 > )  |  LG <br> ( 1280 > )  |
| ---                  | ---                | ---               | ---                |  ---                  | ---                  |
| Class Prefix         | -ms                | -xs               |  -sm               |  -md                  | -lg                 |
| Sass Media Değişken  |  $gl-ms            |  $gl-xs           |  $gl-sm            |  $gl-md               | $gl-lg               |

Bu listede genel kullanıma göre **ms** adlı beşinci bir ufak aralık görmektesiniz. Bu aralık mobilin yatay ve dikey kullanımına göre farklı özelleştirebilme ihtiyacından doğmuştur. Bunu tercih etmeseniz [grid.scss](https://github.com/thealico/flexboxgrid/blob/master/src/style/grid.scss) dosyasından ms etiketiyle dönen değerleri yorumlamak yeterli olacaktır.

----------

Satırlar ve sütunların class etiketleri  Bootstrap aşina olduğumuz şekide  **row** ve **col** olarak atandı. Col (col-1 > col 12) ve row (row-1 > row-12) kullanılıyor. Media aralığına göre formatlamak içinde yine media prefix (col-xs- ) ekleriyle birlikte yazıyoruz.


| Etiket    | Açıklama                                                       |
| ---       | ---                                                            |
| row       | Satır etiket ismi                                              |
| row-      | 1 den 12 ye kadar sütunlarının kaçarlı olacağı değeri alır     | 
| row-      | -ms -xs -sm -md -lg media eklerini alır    (row-xs-3)          |
| col       | Sütun etiketi ismi (tek başına kullanılır)                     |
| col-      | 1 den 12 ye kadar kaçarlı sütun değeri alır                    |
| col-      | -ms -xs -sm -md -lg media eklerini alır (col-xs-6)             |

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

----------

### Row'un aldığı referanlar

| Değer               | Media Destek | Açıklama |
| ------------------- | ----- | ------------------------ |
| [center](http://alico.me/labs/grid/example/#07)              | Var   | Sütunları yatayada ortalar|
| [start](http://alico.me/labs/grid/example/#07)               | Var   | Sütünları sola yaslı sıralar |
| [between](http://alico.me/labs/grid/example/#11)              | Var   | Sütünları sol ve sağa doğru sonlandırarak sıralar |
| [around](http://alico.me/labs/grid/example/#12)              | Var   | Sütunları merkeden ortalayarak sağa ve sola doğru sıralar |
| [end](http://alico.me/labs/grid/example/#07)                 | Var   | Sütunları sağa doğru yaslıyarak sıralar|
| top                 | Var   | Sütunları üste yaslar |
| [middle](http://alico.me/labs/grid/example/#08)              | Var   | Sütünları dikeyde rtalar|
| [bottom](http://alico.me/labs/grid/example/#08)              | Var   | Sütunları alta yaslar|
| stretch             | Var   ||
| baseline            | Var   ||
| direct-x            | Var   | Sütünları yatay sıralar |
| direct-xr           | Var   | Sütünları yatayda ters sıralanır  |
| direct-y            | Var   | Sütünları dikey sıralar|
| direct-yr           | Var   | Sütunları dikey ter sıralanır |
| [ns](http://alico.me/labs/grid/example/#05)                 | -     | Gutter boşlukları sıfırlar |


##Col


| Değer               | Media | Açıklama |
| ------------------- | ----- | ------------------------ |
| col-top             | Var   | Sütunu üste konumlar |
| col-middle          | Var   | Sütunu dikeyde ortaya konumlar |
| col-bottom          | Var   | Sütunu alta konumlanır |
| col-first           | Var   | Sütunu sol başa konumlar |
| col-last            | Var   | Sütunu sağ sona konumlar |
| col-ns              | Yok   | Sütunun padding boşluklarını sıfırlar |








